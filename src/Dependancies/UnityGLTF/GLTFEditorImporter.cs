﻿using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Text.RegularExpressions;
using GLTF;
using GLTF.Schema;
using UnityEngine;
using UnityGLTF.Cache;
using UnityGLTF.Extensions;
using UnityEditor;
using Newtonsoft.Json.Linq;

namespace UnityGLTF
{
    /// <summary>
    /// Editor windows to load a GLTF scene in editor
    /// </summary>
    ///
    public class GLTFEditorImporter
	{
        protected class MeshAttrsTemp
        {
            public List<Vector3> vertices = new List<Vector3>();
            public List<Vector3> normals = new List<Vector3>();
            public List<Vector2> uv = new List<Vector2>();
            public List<Vector2> uv2 = new List<Vector2>();
            public List<Vector2> uv3 = new List<Vector2>();
            public List<Vector2> uv4 = new List<Vector2>();
            public List<Color> colors = new List<Color>();
            public List<Vector4> tangents = new List<Vector4>();
            public List<UnityEngine.Material> materials = new List<UnityEngine.Material>();
            public List<int[]> triangles = new List<int[]>();
            public List<BoneWeight> boneWeights = new List<BoneWeight>();
            public List<Matrix4x4> bindposes = new List<Matrix4x4>();
            public List<string> morphNames = new List<string>();
            public List<List<Vector3>> morphVertices = new List<List<Vector3>>();
            public List<List<Vector3>> morphNormals = new List<List<Vector3>>();
            public List<List<Vector3>> morphTangents = new List<List<Vector3>>();
        }

        public static bool extensionsInited = false;
		public bool _useGLTFMaterial = false;
		bool _isDone = false;

		// Import paths and options
		private string _projectDirectoryPath;
		private string _gltfDirectoryPath;
		private string _glTFPath = "";
		private bool _addToCurrentScene;
        private bool _generateLightMapUvs = false;

        // GLTF data
        private byte[] _glTFData;
		protected GLTFRoot _root;
		AssetManager _assetManager;
		private int _nbParsedNodes;
		private GameObject _sceneObject;
		public UnityEngine.Material defaultMaterial;

		protected AssetCache _assetCache;
		private TaskManager _taskManager;
		private bool _userStopped = false;
		private string _currentSampleName = "";

		private List<string> _assetsToRemove;
		Dictionary<int, GameObject> _importedObjects;
		Dictionary<int, List<SkinnedMeshRenderer>>_skinIndexToGameObjects;
        Dictionary<Node, GameObject> _skinObjectsStore = new Dictionary<Node, GameObject>();

        // Import Progress
        public enum IMPORT_STEP
		{
			READ_FILE,
			BUFFER,
			IMAGE,
            AUDIO,
			TEXTURE,
			MATERIAL,
			MESH,
			NODE,
			ANIMATION,
			SKIN,
            SKINNEDMESH
		}

		public delegate void RefreshWindow();
		public delegate void ProgressCallback(IMPORT_STEP step, int current, int total);

		private RefreshWindow _finishCallback;
		private ProgressCallback _progressCallback;

		protected const string Base64StringInitializer = "^data:[a-z-]+/[a-z-]+;base64,";

		/// <summary>
		/// Constructor
		/// </summary>
		public GLTFEditorImporter()
		{
			Initialize();
		}

		/// <summary>
		/// Constructors setting the delegate function to call after each iteration
		/// </summary>
		/// <param name="delegateFunction">The function to call after each iteration (usually Repaint())</param>
		public GLTFEditorImporter(ProgressCallback progressCallback, RefreshWindow finish=null)
		{
			_progressCallback = progressCallback;
			_finishCallback = finish;
			Initialize();
		}

		/// <summary>
		/// Initializes all the structures and objects
		/// </summary>
		public void Initialize()
		{
			_importedObjects = new Dictionary<int, GameObject>();
			_skinIndexToGameObjects = new Dictionary<int, List<SkinnedMeshRenderer>>();
			_isDone = true;
			_taskManager = new TaskManager();
			_assetsToRemove = new List<string>();
			defaultMaterial = new UnityEngine.Material(Shader.Find("Sein/PBR"));
            if (!extensionsInited)
            {
                GLTFProperty.RegisterExtension(new Sein_nodeExtensionFactory());
                GLTFProperty.RegisterExtension(new Sein_audioClipsExtensionFactory());
                GLTFProperty.RegisterExtension(new Sein_audioSourceExtensionFactory());
                GLTFProperty.RegisterExtension(new Sein_audioListenerExtensionFactory());
                GLTFProperty.RegisterExtension(new Sein_animatorListenerExtensionFactory());
                GLTFProperty.RegisterExtension(new Sein_physicBodyExtensionFactory());

                extensionsInited = true;
            }
        }

		/// <summary>
		/// Setup importer for an import
		/// </summary>
		/// <param name="gltfPath">Absolute path to the glTF file to import</param>
		/// <param name="importPath">Path in current project where to import the model</param>
		/// <param name="modelName">Name of the model prefab to create<param>
		public void setupForPath(string gltfPath, string importPath, string modelName, bool addScene=false, bool generateLightMapUvs = false)
		{
			_glTFPath = gltfPath;
			_gltfDirectoryPath = Path.GetDirectoryName(_glTFPath);
			_currentSampleName = modelName.Length > 0 ? modelName : "GLTFScene";
			_projectDirectoryPath = importPath;
			_assetManager = new AssetManager(_projectDirectoryPath, _currentSampleName);
			_importedObjects.Clear();
			_addToCurrentScene = addScene;
            _generateLightMapUvs = generateLightMapUvs;
            _skinIndexToGameObjects.Clear();
            _skinObjectsStore.Clear();

        }

		public void Update()
		{
			if(!_isDone)
			{
				if (_userStopped)
				{
					_userStopped = false;
					Clear();
					_isDone = true;
				}
				else
				{
					if (_taskManager != null && _taskManager.play())
					{
						// Do stuff
					}
					else
					{
						_isDone = true;
						finishImport();
					}
				}
			}
		}

		public void Load(bool useGLTFMaterial=false)
		{
			_isDone = false;
			_userStopped = false;
			_useGLTFMaterial = useGLTFMaterial;
			LoadFile();
			LoadGLTFScene();
		}

		// Private
		private void checkValidity()
		{
			if (_taskManager == null)
			{
				_taskManager = new TaskManager();
			}
		}

		private void LoadFile(int sceneIndex = -1)
		{
			_glTFData = File.ReadAllBytes(_glTFPath);
			_root = GLTFParser.ParseJson(_glTFData);
		}

		private void LoadGLTFScene(int sceneIndex = -1)
		{
			Scene scene;
			if (sceneIndex >= 0 && sceneIndex < _root.Scenes.Count)
			{
				scene = _root.Scenes[sceneIndex];
			}
			else
			{
				scene = _root.GetDefaultScene();
			}

			if (scene == null)
			{
				throw new Exception("No default scene in gltf file.");
			}

			_assetCache = new AssetCache(
				_root.Images != null ? _root.Images.Count : 0,
				_root.Textures != null ? _root.Textures.Count : 0,
				_root.Materials != null ? _root.Materials.Count : 0,
				_root.Buffers != null ? _root.Buffers.Count : 0,
				_root.Meshes != null ? _root.Meshes.Count : 0
			);

			// Load dependencies
			LoadBuffersEnum();
			if (_root.Images != null)
				LoadImagesEnum();
			if (_root.Textures != null)
				SetupTexturesEnum();
			if (_root.Materials != null)
				LoadMaterialsEnum();

            var extensions = _root.Extensions;
            if (extensions != null && extensions.ContainsKey("Sein_audioClips"))
            {
                LoadAudioClipsEnum();
            }

            LoadMeshesEnum();
			LoadSceneEnum();
            LoadSkinnedMeshesEnum();


            if (_root.Animations != null && _root.Animations.Count > 0)
				LoadAnimationsEnum();

			if (_root.Skins != null && _root.Skins.Count > 0)
				LoadSkinsEnum();
		}

		private void LoadBuffersEnum()
		{
			_taskManager.addTask(LoadBuffers());
		}

		private void LoadImagesEnum()
		{
			_taskManager.addTask(LoadImages());
		}

		private void SetupTexturesEnum()
		{
			_taskManager.addTask(SetupTextures());
		}

		private void LoadMaterialsEnum()
		{
			_taskManager.addTask(LoadMaterials());
		}

		private void LoadMeshesEnum()
		{
			_taskManager.addTask(LoadMeshes());
		}

        private void LoadAudioClipsEnum()
        {
            _taskManager.addTask(LoadAudioClips());
        }

        private void LoadSceneEnum()
		{
			_taskManager.addTask(LoadScene());
		}

        private void LoadSkinnedMeshesEnum()
        {
            _taskManager.addTask(LoadSkinnedMeshes());
        }

        private void LoadAnimationsEnum()
		{
			_taskManager.addTask(LoadAnimations());
		}

		private void LoadSkinsEnum()
		{
			_taskManager.addTask(LoadSkins());
		}

		private IEnumerator LoadBuffers()
		{
			if (_root.Buffers != null)
			{
				// todo add fuzzing to verify that buffers are before uri
				setProgress(IMPORT_STEP.BUFFER, 0, _root.Buffers.Count);
				for (int i = 0; i < _root.Buffers.Count; ++i)
				{
					GLTF.Schema.Buffer buffer = _root.Buffers[i];
					if (buffer.Uri != null)
					{
						LoadBuffer(_gltfDirectoryPath, buffer, i);
					}
					else //null buffer uri indicates GLB buffer loading
					{
						byte[] glbBuffer;
						GLTFParser.ExtractBinaryChunk(_glTFData, i, out glbBuffer);
						_assetCache.BufferCache[i] = glbBuffer;
					}
					setProgress(IMPORT_STEP.BUFFER, (i + 1), _root.Buffers.Count);
					yield return null;
				}
			}
		}

		protected virtual void LoadBuffer(string sourceUri, GLTF.Schema.Buffer buffer, int bufferIndex)
		{
			if (buffer.Uri != null)
			{
				byte[] bufferData = null;
				var uri = buffer.Uri;
				var bufferPath = Path.Combine(sourceUri, uri);
				bufferData = File.ReadAllBytes(bufferPath);
				_assetCache.BufferCache[bufferIndex] = bufferData;
			}
		}

		private IEnumerator LoadImages()
		{
			for (int i = 0; i < _root.Images.Count; ++i)
			{
				Image image = _root.Images[i];
				LoadImage(_gltfDirectoryPath, image, i);
				setProgress(IMPORT_STEP.IMAGE, (i + 1), _root.Images.Count);
				yield return null;
			}
		}

		private void LoadImage(string rootPath, Image image, int imageID)
		{
			if (_assetCache.ImageCache[imageID] == null)
			{
				if (image.Uri != null)
				{
					// Is base64 uri ?
					var uri = image.Uri;

					Regex regex = new Regex(Base64StringInitializer);
					Match match = regex.Match(uri);
					if (match.Success)
					{
						var base64Data = uri.Substring(match.Length);
						var textureData = Convert.FromBase64String(base64Data);

						_assetManager.registerImageFromData(textureData, imageID);
					}
					else if(File.Exists(Path.Combine(rootPath, uri))) // File is a real file
					{
						string imagePath = Path.Combine(rootPath, uri);
						_assetManager.copyAndRegisterImageInProject(imagePath, imageID);
					}
					else
					{
						Debug.Log("Image not found / Unknown image buffer");
					}
				}
				else
				{
					var bufferView = image.BufferView.Value;
					var buffer = bufferView.Buffer.Value;
					var data = new byte[bufferView.ByteLength];

					var bufferContents = _assetCache.BufferCache[bufferView.Buffer.Id];
					System.Buffer.BlockCopy(bufferContents, bufferView.ByteOffset, data, 0, data.Length);
					_assetManager.registerImageFromData(data, imageID);
				}
			}
		}

		private IEnumerator SetupTextures()
		{
			for(int i = 0; i < _root.Textures.Count; ++i)
			{
				SetupTexture(_root.Textures[i], i);
				setProgress(IMPORT_STEP.TEXTURE, (i + 1), _root.Textures.Count);
				yield return null;
			}
		}

		private void SetupTexture(GLTF.Schema.Texture def, int textureIndex)
		{
			Texture2D source = _assetManager.getOrCreateTexture(def.Source.Id, textureIndex);
			// Default values
			var desiredFilterMode = FilterMode.Bilinear;
			var desiredWrapMode = UnityEngine.TextureWrapMode.Repeat;

			if (def.Sampler != null)
			{
				var sampler = def.Sampler.Value;
				switch (sampler.MinFilter)
				{
					case MinFilterMode.Nearest:
						desiredFilterMode = FilterMode.Point;
						break;
					case MinFilterMode.Linear:
					default:
						desiredFilterMode = FilterMode.Bilinear;
						break;
				}

				switch (sampler.WrapS)
				{
					case GLTF.Schema.WrapMode.ClampToEdge:
						desiredWrapMode = UnityEngine.TextureWrapMode.Clamp;
						break;
					case GLTF.Schema.WrapMode.Repeat:
					default:
						desiredWrapMode = UnityEngine.TextureWrapMode.Repeat;
						break;
				}
			}

			source.filterMode = desiredFilterMode;
			source.wrapMode = desiredWrapMode;
			_assetManager.registerTexture(source);
		}

        private IEnumerator LoadAudioClips()
        {
            var extensions = _root.Extensions;
            var extension = (Sein_audioClipsExtension)extensions["Sein_audioClips"];
            var clips = extension.clips;
            _assetCache.InitAudioClips(clips.Count);

            for (int i = 0; i < clips.Count; ++i)
            {
                var clip = clips[i];
                LoadAudioClip(_gltfDirectoryPath, clip, i);
                setProgress(IMPORT_STEP.AUDIO, (i + 1), clips.Count);
                yield return null;
            }
        }

        private void LoadAudioClip(string rootPath, GLTF.Schema.SeinAudioClip clip, int clipID)
        {
            if (_assetCache.AudioClipCache[clipID] == null)
            {
                if (clip.uri != null)
                {
                    // Is base64 uri ?
                    var uri = clip.uri;

                    //Regex regex = new Regex(Base64StringInitializer);
                    //Match match = regex.Match(uri);
                    //if (match.Success)
                    //{
                    //    var base64Data = uri.Substring(match.Length);
                    //    var clipData = Convert.FromBase64String(base64Data);

                    //    _assetManager.registerImageFromData(clipData, clip, clipID);
                    //}
                    //else 
                    if (File.Exists(Path.Combine(rootPath, uri))) // File is a real file
                    {
                        clip.uri = Path.Combine(rootPath, uri);
                        _assetCache.AudioClipCache[clipID] = _assetManager.copyAndRegisterAudioClipInProject(clip, clipID);
                    }
                    else
                    {
                        Debug.LogWarning("Audio clip not found");
                    }
                }
            }
        }

        private IEnumerator LoadMaterials()
		{
			for(int i = 0; i < _root.Materials.Count; ++i)
			{
				CreateUnityMaterial(_root.Materials[i], i);
				setProgress(IMPORT_STEP.MATERIAL, (i + 1), _root.Materials.Count);
				yield return null;
			}
		}

		protected virtual void CreateUnityMaterial(GLTF.Schema.Material def, int materialIndex)
		{
            Extension specularGlossinessExtension = null;
			bool isSpecularPBR = def.Extensions != null && def.Extensions.TryGetValue("KHR_materials_pbrSpecularGlossiness", out specularGlossinessExtension);

            Shader shader = Shader.Find("Sein/PBR");

			var material = new UnityEngine.Material(shader);
			material.hideFlags = HideFlags.DontUnloadUnusedAsset; // Avoid material to be deleted while being built
			material.name = def.Name;

            if (isSpecularPBR)
            {
                material.SetInt("workflow", (int)SeinPBRShaderGUI.Workflow.Specular);
            }
            else
            {
                material.SetInt("workflow", (int)SeinPBRShaderGUI.Workflow.Metal);
            }

            //Transparency
            if (def.AlphaMode == AlphaMode.MASK)
			{
				GLTFUtils.SetupMaterialWithBlendMode(material, GLTFUtils.BlendMode.Cutout);
				material.SetFloat("_Mode", (int)SeinPBRShaderGUI.BlendMode.Cutout);
				material.SetFloat("_Cutoff", (float)def.AlphaCutoff);
			}
			else if (def.AlphaMode == AlphaMode.BLEND)
			{
				GLTFUtils.SetupMaterialWithBlendMode(material, GLTFUtils.BlendMode.Transparent);
				material.SetFloat("_Mode", (int)SeinPBRShaderGUI.BlendMode.Transparent);
			}
            else
            {
                material.SetFloat("_Mode", (int)SeinPBRShaderGUI.BlendMode.Opaque);
            }

            if (def.NormalTexture != null)
			{
				var texture = def.NormalTexture.Index.Id;
				Texture2D normalTexture = getTexture(texture) as Texture2D;

				//Automatically set it to normal map
				TextureImporter im = AssetImporter.GetAtPath(AssetDatabase.GetAssetPath(normalTexture)) as TextureImporter;
				im.textureType = TextureImporterType.NormalMap;
                if (im.sRGBTexture)
                {
                    im.sRGBTexture = false;
                }
                im.SaveAndReimport();
                material.SetTexture("_normalMap", getTexture(texture));
                material.SetFloat("_normalScale", (float)def.NormalTexture.Scale);
            }

			if (def.EmissiveTexture != null)
			{
				//material.EnableKeyword("EMISSION_MAP_ON");
				var texture = def.EmissiveTexture.Index.Id;
				material.SetTexture("_emissionMap", getTexture(texture));
                material.SetInt("_emissionUV", def.EmissiveTexture.TexCoord);
			}

            bool isLinear = PlayerSettings.colorSpace == ColorSpace.Linear;

            // PBR channels
            if (specularGlossinessExtension != null)
			{
				KHR_materials_pbrSpecularGlossinessExtension pbr = (KHR_materials_pbrSpecularGlossinessExtension)specularGlossinessExtension;
				material.SetColor("_baseColor", isLinear ? pbr.DiffuseFactor.ToUnityColor().gamma : pbr.DiffuseFactor.ToUnityColor());
				if (pbr.DiffuseTexture != null)
				{
					var texture = pbr.DiffuseTexture.Index.Id;
					material.SetTexture("_baseColorMap", getTexture(texture));
				}

				if (pbr.SpecularGlossinessTexture != null)
				{
					var textureID = pbr.SpecularGlossinessTexture.Index.Id;
                    var texture = getTexture(textureID);
                    ChangeSRGB(ref texture, true);
                    material.SetTexture("_specularGlossinessMap", texture);
					material.SetFloat("_glossMapScale", (float)pbr.GlossinessFactor);
					material.SetFloat("_glossiness", (float)pbr.GlossinessFactor);
				}
				else
				{
					material.SetFloat("_glossiness", (float)pbr.GlossinessFactor);
				}

				Vector3 specularVec3 = pbr.SpecularFactor.ToUnityVector3();
                var spec = new Color(specularVec3.x, specularVec3.y, specularVec3.z, 1.0f);
                material.SetColor("_specular", isLinear ? spec.gamma : spec);

				if (def.OcclusionTexture != null)
				{
                    var textureID = pbr.SpecularGlossinessTexture.Index.Id;
                    var texture = getTexture(textureID);
                    material.SetFloat("_occlusionStrength", (float)def.OcclusionTexture.Strength);
                    ChangeSRGB(ref texture, false);
                    material.SetTexture("_occlusionMap", texture);
				}
			}
			else if (def.PbrMetallicRoughness != null)
			{
				var pbr = def.PbrMetallicRoughness;

				material.SetColor("_baseColor", isLinear ? pbr.BaseColorFactor.ToUnityColor().gamma : pbr.BaseColorFactor.ToUnityColor());
				if (pbr.BaseColorTexture != null)
				{
					var textureID = pbr.BaseColorTexture.Index.Id;
                    var texture = getTexture(textureID);
                    ChangeSRGB(ref texture, true);
                    material.SetTexture("_baseColorMap", texture);
				}

				material.SetFloat("_metallic", (float)pbr.MetallicFactor);
				material.SetFloat("_roughness", (float)pbr.RoughnessFactor);

				if (pbr.MetallicRoughnessTexture != null)
				{
					var texture = pbr.MetallicRoughnessTexture.Index.Id;
					Texture2D metalRoughnessTexture = getTexture(texture) as Texture2D;
                    Texture2D occlusionTexture = null;
                    if (def.OcclusionTexture != null)
                    {
                        if (def.OcclusionTexture.Index.Id == pbr.MetallicRoughnessTexture.Index.Id)
                        {
                            occlusionTexture = metalRoughnessTexture;
                        }
                        else
                        {
                            occlusionTexture = getTexture(def.OcclusionTexture.Index.Id) as Texture2D;
                        }
                    }

                    Texture2D ormTexture = combineMetalRoughOcclusionTexture(metalRoughnessTexture, occlusionTexture);
					material.SetTexture("_metallicMap", ormTexture);
                    material.SetTexture("_roughnessMap", ormTexture);

                    if (def.OcclusionTexture != null)
					{
						material.SetFloat("_occlusionStrength", (float)def.OcclusionTexture.Strength);
						material.SetTexture("_occlusionMap", ormTexture);
					}
				}
			}

			material.SetColor("_emission", isLinear ? def.EmissiveFactor.ToUnityColor().gamma : def.EmissiveFactor.ToUnityColor());
			material = _assetManager.saveMaterial(material, materialIndex);
			_assetManager._parsedMaterials.Add(material);
			material.hideFlags = HideFlags.None;
		}

		public UnityEngine.Texture2D combineMetalRoughOcclusionTexture(Texture2D metalRoughnessTexture, Texture2D occlusionTexture)
		{
			string metalRoughnessTexturePath = AssetDatabase.GetAssetPath(metalRoughnessTexture);
            string occlusionTexturePath = AssetDatabase.GetAssetPath(occlusionTexture);
            if (!_assetsToRemove.Contains(metalRoughnessTexturePath))
			{
				_assetsToRemove.Add(metalRoughnessTexturePath);
			}
            if (!_assetsToRemove.Contains(occlusionTexturePath))
            {
                _assetsToRemove.Add(occlusionTexturePath);
            }

            int width = metalRoughnessTexture.width;
			int height = metalRoughnessTexture.height;

			Color[] orm = new Color[width * height];
            Color[] metalRoughnessColors = new Color[width * height];
            Color[] occlusionColors = new Color[width * height];

            if (width != occlusionTexture.width || height != occlusionTexture.height)
            {
                TextureScale.Bilinear(occlusionTexture, width, height);
            }

            GLTFUtils.getPixelsFromTexture(ref metalRoughnessTexture, out metalRoughnessColors);
            GLTFUtils.getPixelsFromTexture(ref occlusionTexture, out occlusionColors);

            for (int i = 0; i < height; ++i)
			{
				for (int j = 0; j < width; ++j)
				{
					float occ = occlusionColors[i * width + j].r;
					float rough = metalRoughnessColors[i * width + j].g;
					float met = metalRoughnessColors[i * width + j].b;

                    orm[i * width + j] = new Color(occ, rough, met, 1.0f);
				}
			}

			Texture2D ormTexture = new Texture2D(width, height, TextureFormat.RGB24, true);
            ormTexture.name = Path.GetFileNameWithoutExtension(metalRoughnessTexturePath);
            ormTexture.SetPixels(orm);
            ormTexture.Apply();
            ormTexture = _assetManager.saveTexture(ormTexture);

            // Delete original texture
            AssetDatabase.Refresh();

            ChangeSRGB(ref ormTexture, false);

            return ormTexture;
		}

        public void ChangeSRGB(ref UnityEngine.Texture2D tex, bool isSRGB)
        {
            TextureImporter im = AssetImporter.GetAtPath(AssetDatabase.GetAssetPath(tex)) as TextureImporter;
            if (im.sRGBTexture == isSRGB)
            {
                return;
            }

            im.sRGBTexture = isSRGB;
            im.SaveAndReimport();
        }

        private Texture2D getTexture(int index)
		{
			return _assetManager.getTexture(index);
		}

		private UnityEngine.Material getMaterial(int index)
		{
			return _assetManager.getMaterial(index);
		}

		private IEnumerator LoadMeshes()
		{
			for(int i = 0; i < _root.Meshes.Count; ++i)
			{
				CreateMeshObject(_root.Meshes[i], i);
				setProgress(IMPORT_STEP.MESH, (i + 1), _root.Meshes.Count);
				yield return null;
			}
		}

        protected virtual void CreateMeshObject(GLTF.Schema.Mesh mesh, int meshId)
        {
            var mainMesh = new UnityEngine.Mesh();
            var attrs = new MeshAttrsTemp();
            mainMesh.subMeshCount = mesh.Primitives.Count;
            var meshTable = new Dictionary<int, List<MeshPrimitive>>();
            for (int i = 0; i < mesh.Primitives.Count; ++i)
            {
                var primitive = mesh.Primitives[i];
                var posBufferId = primitive.Attributes[SemanticProperties.POSITION].Value.BufferView.Id;

                if (!meshTable.ContainsKey(posBufferId))
                {
                    meshTable.Add(posBufferId, new List<MeshPrimitive>());
                }

                meshTable[posBufferId].Add(primitive);
            }

            var meshBaseIndexTable = new Dictionary<MeshPrimitive, int>();
            int baseIndex = 0;
            foreach (var pair in meshTable)
            {
                var i = 0;
                foreach (var primitive in pair.Value)
                {
                    meshBaseIndexTable.Add(primitive, baseIndex);
                    i += primitive.Attributes[SemanticProperties.POSITION].Value.Count;
                }
                baseIndex += i;
            }

            int index = 0;
            foreach (var pair in meshBaseIndexTable)
            {
                var primitive = pair.Key;
                var meshBaseIndex = pair.Value;
                CreateMeshPrimitive(mainMesh, ref attrs, mesh, primitive, mesh.Name, meshId, index, meshBaseIndex); // Converted to mesh
                index += 1;
            }

            if (mainMesh.uv2 == null && _generateLightMapUvs)
            {
                Unwrapping.GenerateSecondaryUVSet(mainMesh);
            }

            if (attrs.vertices.Count > 0)
            {
                mainMesh.vertices = attrs.vertices.ToArray();
            }

            if (attrs.normals.Count > 0)
            {
                mainMesh.normals = attrs.normals.ToArray();
            }

            if (attrs.uv.Count > 0)
            {
                mainMesh.uv = attrs.uv.ToArray();
            }

            if (attrs.uv2.Count > 0)
            {
                mainMesh.uv2 = attrs.uv2.ToArray();
            }

            if (attrs.uv3.Count > 0)
            {
                mainMesh.uv3 = attrs.uv3.ToArray();
            }

            if (attrs.uv4.Count > 0)
            {
                mainMesh.uv4 = attrs.uv4.ToArray();
            }

            if (attrs.colors.Count > 0)
            {
                mainMesh.colors = attrs.colors.ToArray();
            }

            if (attrs.tangents.Count > 0)
            {
                mainMesh.tangents = attrs.tangents.ToArray();
            }

            for (int i = 0; i < attrs.triangles.Count; i += 1)
            {
                mainMesh.SetTriangles(attrs.triangles[i], i);
            }

            if (attrs.boneWeights.Count > 0)
            {
                mainMesh.boneWeights = attrs.boneWeights.ToArray();
            }

            if (attrs.bindposes.Count > 0)
            {
                mainMesh.bindposes = attrs.bindposes.ToArray();
            }

            if (attrs.morphNames.Count > 0)
            {
                for (int i = 0; i < attrs.morphNames.Count; i += 1)
                {
                    mainMesh.AddBlendShapeFrame(attrs.morphNames[i], 1.0f, attrs.morphVertices[i].ToArray(), attrs.morphNormals[i].ToArray(), attrs.morphTangents[i].ToArray());
                }
            }

            mainMesh.RecalculateBounds();
            mainMesh.RecalculateTangents();
            mainMesh = _assetManager.saveMesh(mainMesh, mesh.Name + "-" + meshId);

            _assetManager.addPrimitiveMeshData(meshId, mainMesh, attrs.materials);
        }

		protected virtual void CreateMeshPrimitive(UnityEngine.Mesh mainMesh, ref MeshAttrsTemp attrs, GLTF.Schema.Mesh m, MeshPrimitive primitive, string meshName, int meshID, int primitiveIndex, int baseIndex)
		{
			var meshAttributes = BuildMeshAttributes(primitive, meshID, primitiveIndex);
			var vertexCount = primitive.Attributes[SemanticProperties.POSITION].Value.Count;

            if (primitive.Attributes.ContainsKey(SemanticProperties.POSITION))
            {
                attrs.vertices.AddRange(meshAttributes[SemanticProperties.POSITION].AccessorContent.AsVertices.ToUnityVector3());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.NORMAL))
            {
                attrs.normals.AddRange(meshAttributes[SemanticProperties.NORMAL].AccessorContent.AsNormals.ToUnityVector3());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.TexCoord(0)))
            {
                attrs.uv.AddRange(meshAttributes[SemanticProperties.TexCoord(0)].AccessorContent.AsTexcoords.ToUnityVector2());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.TexCoord(1)))
            {
                attrs.uv2.AddRange(meshAttributes[SemanticProperties.TexCoord(1)].AccessorContent.AsTexcoords.ToUnityVector2());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.TexCoord(2)))
            {
                attrs.uv3.AddRange(meshAttributes[SemanticProperties.TexCoord(2)].AccessorContent.AsTexcoords.ToUnityVector2());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.TexCoord(3)))
            {
                attrs.uv3.AddRange(meshAttributes[SemanticProperties.TexCoord(3)].AccessorContent.AsTexcoords.ToUnityVector2());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.Color(0)))
            {
                attrs.colors.AddRange(meshAttributes[SemanticProperties.Color(0)].AccessorContent.AsColors.ToUnityColor());
            }

            if (primitive.Attributes.ContainsKey(SemanticProperties.TANGENT))
            {
                attrs.tangents.AddRange(meshAttributes[SemanticProperties.TANGENT].AccessorContent.AsTangents.ToUnityVector4());
            }

            int[] indices = null;
            if (primitive.Indices != null)
            {
                indices = meshAttributes[SemanticProperties.INDICES].AccessorContent.AsTriangles;
            }
            else
            {
                indices = MeshPrimitive.GenerateTriangles(vertexCount);
            }

            if (baseIndex > 0)
            {
                for (int i = 0; i < indices.Length; i += 1)
                {
                    indices[i] += baseIndex;
                }
            }

            attrs.triangles.Add(indices);

            if (primitive.Attributes.ContainsKey(SemanticProperties.JOINT) && primitive.Attributes.ContainsKey(SemanticProperties.WEIGHT))
            {
            	Vector4[] bones = new Vector4[1];
            	Vector4[] weights = new Vector4[1];

            	LoadSkinnedMeshAttributes(meshID, primitiveIndex, ref bones, ref weights);
            	if(bones.Length != vertexCount || weights.Length != vertexCount)
            	{
            		Debug.LogError("Not enough skinning data (bones:" + bones.Length + " weights:" + weights.Length + "  verts:" + vertexCount + ")");
            		return;
            	}

            	BoneWeight[] bws = new BoneWeight[vertexCount];
            	int maxBonesIndex = 0;
            	for (int i = 0; i < bws.Length; ++i)
            	{
            		// Unity seems expects the the sum of weights to be 1.
            		float[] normalizedWeights =  GLTFUtils.normalizeBoneWeights(weights[i]);

            		bws[i].boneIndex0 = (int)bones[i].x;
            		bws[i].weight0 = normalizedWeights[0];

            		bws[i].boneIndex1 = (int)bones[i].y;
            		bws[i].weight1 = normalizedWeights[1];

            		bws[i].boneIndex2 = (int)bones[i].z;
            		bws[i].weight2 = normalizedWeights[2];

            		bws[i].boneIndex3 = (int)bones[i].w;
            		bws[i].weight3 = normalizedWeights[3];

            		maxBonesIndex = (int)Mathf.Max(maxBonesIndex, bones[i].x, bones[i].y, bones[i].z, bones[i].w);
            	}

                attrs.boneWeights.AddRange(bws);

                // initialize inverseBindMatrix array with identity matrix in order to output a valid mesh object
                Matrix4x4[] bindposes = new Matrix4x4[maxBonesIndex + 1];
            	for(int j=0; j <= maxBonesIndex; ++j)
            	{
            		bindposes[j] = Matrix4x4.TRS(Vector3.zero, Quaternion.identity, Vector3.one);
            	}
                attrs.bindposes.AddRange(bindposes);
            }

            if(primitive.Targets != null && primitive.Targets.Count > 0)
            {
            	for (int b = 0; b < primitive.Targets.Count; ++b)
            	{
                    if (primitiveIndex == 0)
                    {
                        attrs.morphVertices.Add(new List<Vector3>());
                        attrs.morphNormals.Add(new List<Vector3>());
                        attrs.morphTangents.Add(new List<Vector3>());
                    }

                    Vector3[] deltaVertices = new Vector3[primitive.Targets[b]["POSITION"].Value.Count];
            		Vector3[] deltaNormals = new Vector3[primitive.Targets[b]["POSITION"].Value.Count];
            		Vector3[] deltaTangents = new Vector3[primitive.Targets[b]["POSITION"].Value.Count];

            		if(primitive.Targets[b].ContainsKey("POSITION"))
            		{
            			NumericArray num = new NumericArray();
            			deltaVertices = primitive.Targets[b]["POSITION"].Value.AsVector3Array(ref num, _assetCache.BufferCache[0], false).ToUnityVector3(true);
                    }
            		if (primitive.Targets[b].ContainsKey("NORMAL"))
            		{
            			NumericArray num = new NumericArray();
            			deltaNormals = primitive.Targets[b]["NORMAL"].Value.AsVector3Array(ref num, _assetCache.BufferCache[0], true).ToUnityVector3(true);
                    }

                    //if (primitive.Targets[b].ContainsKey("TANGENT"))
                    //{
                    //    NumericArray num = new NumericArray();
                    //    deltaTangents = primitive.Targets[b]["TANGENT"].Value.AsVector3Array(ref num, _assetCache.BufferCache[0], true).ToUnityVector3(true);
                    //}

                    string blendShapeName;

                     if (m.Extras != null && m.Extras.Value<JArray>("targetNames") != null)
                     {
                         blendShapeName = (string)m.Extras.Value<JArray>("targetNames")[b];
                     }
                     else
                     {
                         blendShapeName = GLTFUtils.buildBlendShapeName(meshID, b);
                     }

                     if (primitiveIndex == 0) {
                        attrs.morphNames.Add(blendShapeName);
                    }

                    attrs.morphVertices[b].AddRange(deltaVertices);
                    attrs.morphNormals[b].AddRange(deltaNormals);
                    attrs.morphTangents[b].AddRange(deltaTangents);
                }
            }

            UnityEngine.Material material = primitive.Material != null && primitive.Material.Id >= 0 ? getMaterial(primitive.Material.Id) : defaultMaterial;
            attrs.materials.Add(material);
        }

		protected virtual Dictionary<string, AttributeAccessor> BuildMeshAttributes(MeshPrimitive primitive, int meshID, int primitiveIndex)
		{
			Dictionary<string, AttributeAccessor> attributeAccessors = new Dictionary<string, AttributeAccessor>(primitive.Attributes.Count + 1);
			foreach (var attributePair in primitive.Attributes)
			{
				AttributeAccessor AttributeAccessor = new AttributeAccessor()
				{
					AccessorId = attributePair.Value,
					Buffer = _assetCache.BufferCache[attributePair.Value.Value.BufferView.Value.Buffer.Id]
				};

				attributeAccessors[attributePair.Key] = AttributeAccessor;
			}

			if (primitive.Indices != null)
			{
				AttributeAccessor indexBuilder = new AttributeAccessor()
				{
					AccessorId = primitive.Indices,
					Buffer = _assetCache.BufferCache[primitive.Indices.Value.BufferView.Value.Buffer.Id]
				};

				attributeAccessors[SemanticProperties.INDICES] = indexBuilder;
			}

			GLTFHelpers.BuildMeshAttributes(ref attributeAccessors);
			return attributeAccessors;
		}

		private IEnumerator LoadScene(int sceneIndex = -1)
		{
			Scene scene;
			_nbParsedNodes = 0;

			if (sceneIndex >= 0 && sceneIndex < _root.Scenes.Count)
			{
				scene = _root.Scenes[sceneIndex];
			}
			else
			{
				scene = _root.GetDefaultScene();
			}

			if (scene == null)
			{
				throw new Exception("No default scene in gltf file.");
			}

            if (scene.Nodes.Count == 1)
            {
                var node = scene.Nodes[0];
                var name = GLTFUtils.cleanName(_currentSampleName);
                _sceneObject = CreateNode(node.Value, node.Id);
                _sceneObject.name = name;
            }
            else
            {
                _sceneObject = createGameObject(_currentSampleName);
                foreach (var node in scene.Nodes)
                {
                    var nodeObj = CreateNode(node.Value, node.Id);
                    nodeObj.transform.SetParent(_sceneObject.transform, false);
                }
            }

			yield return null;
		}

        private IEnumerator LoadSkinnedMeshes()
        {
            int i = 0;
            foreach (var pair in _skinObjectsStore)
            {
                setProgress(IMPORT_STEP.SKINNEDMESH, i, _skinObjectsStore.Count);

                var node = pair.Key;
                var go = pair.Value;

                BuildSkinnedMesh(go, node.Skin.Value, node.Mesh.Id);
                _skinIndexToGameObjects[node.Skin.Id].Add(go.GetComponent<SkinnedMeshRenderer>());

                i += 1;
            }

            yield return null;
        }


        private IEnumerator LoadAnimations()
		{
            List<AnimationClip> clips = new List<AnimationClip>();
            var count = _root.Animations.Count;

            for (int i = 0; i < count; i++)
			{
				AnimationClip clip = new AnimationClip();
				clip.wrapMode = UnityEngine.WrapMode.Loop;
				LoadAnimation(_root.Animations[i], i, clip);
				setProgress(IMPORT_STEP.ANIMATION, (i + 1), _root.Animations.Count);
				_assetManager.saveAnimationClip(clip);
                clips.Add(clip);

                if (i == count - 1)
                {
                    _assetManager.createAnimatorAsset(clips);
                }
                 yield return null;
			}
        }

		private void LoadAnimation(GLTF.Schema.Animation gltfAnimation, int index, AnimationClip clip)
		{
            if (gltfAnimation.Name != null)
            {
                gltfAnimation.Name = gltfAnimation.Name.Replace('|', '-').Replace('.', '-');
            }

            clip.name = gltfAnimation.Name != null && gltfAnimation.Name.Length > 0 ? gltfAnimation.Name : "GLTFAnimation_" + index;
			for(int i=0; i < gltfAnimation.Channels.Count; ++i)
			{
				AnimationChannel channel = gltfAnimation.Channels[i];
				addGLTFChannelDataToClip(gltfAnimation.Channels[i], clip);
			}

			clip.EnsureQuaternionContinuity();
		}

		private void addGLTFChannelDataToClip(GLTF.Schema.AnimationChannel channel, AnimationClip clip)
		{
			int animatedNodeIndex = channel.Target.Node.Id;
			if (!_importedObjects.ContainsKey(animatedNodeIndex))
			{
				Debug.Log("Node '" + animatedNodeIndex + "' found for animation, aborting.");
			}

			Transform animatedNode = _importedObjects[animatedNodeIndex].transform;
			string nodePath = AnimationUtility.CalculateTransformPath(animatedNode, _sceneObject.transform);

			bool isStepInterpolation = channel.Sampler.Value.Interpolation != InterpolationType.LINEAR;

			byte[] timeBufferData = _assetCache.BufferCache[channel.Sampler.Value.Output.Value.BufferView.Value.Buffer.Id];
			float[] times = GLTFHelpers.ParseKeyframeTimes(channel.Sampler.Value.Input.Value, timeBufferData);

			if (channel.Target.Path == GLTFAnimationChannelPath.translation || channel.Target.Path == GLTFAnimationChannelPath.scale)
			{
				byte[] bufferData = _assetCache.BufferCache[channel.Sampler.Value.Output.Value.BufferView.Value.Buffer.Id];
				GLTF.Math.Vector3[] keyValues = GLTFHelpers.ParseVector3Keyframes(channel.Sampler.Value.Output.Value, bufferData);
				if (keyValues == null)
					return;

				Vector3[] values = keyValues.ToUnityVector3();
				AnimationCurve[] vector3Curves = GLTFUtils.createCurvesFromArrays(times, values, isStepInterpolation, channel.Target.Path == GLTFAnimationChannelPath.translation);

				if (channel.Target.Path == GLTFAnimationChannelPath.translation)
					GLTFUtils.addTranslationCurvesToClip(vector3Curves, nodePath, ref clip);
				else
					GLTFUtils.addScaleCurvesToClip(vector3Curves, nodePath, ref clip);
			}
			else if (channel.Target.Path == GLTFAnimationChannelPath.rotation)
			{
				byte[] bufferData = _assetCache.BufferCache[channel.Sampler.Value.Output.Value.BufferView.Value.Buffer.Id];
				Vector4[] values = GLTFHelpers.ParseRotationKeyframes(channel.Sampler.Value.Output.Value, bufferData).ToUnityVector4();
				AnimationCurve[] rotationCurves = GLTFUtils.createCurvesFromArrays(times, values, isStepInterpolation);

				GLTFUtils.addRotationCurvesToClip(rotationCurves, nodePath, ref clip);
			}
			else if(channel.Target.Path == GLTFAnimationChannelPath.weights)
			{
				List<string> morphTargets = new List<string>();
				int meshIndex = _root.Nodes[animatedNodeIndex].Mesh.Id;
				for(int i=0; i<  _root.Meshes[meshIndex].Primitives[0].Targets.Count; ++i)
				{
					morphTargets.Add(GLTFUtils.buildBlendShapeName(meshIndex, i));
				}

				byte[] bufferData = _assetCache.BufferCache[channel.Sampler.Value.Output.Value.BufferView.Value.Buffer.Id];
				float[] values = GLTFHelpers.ParseKeyframeTimes(channel.Sampler.Value.Output.Value, bufferData);
				AnimationCurve[] morphCurves = GLTFUtils.buildMorphAnimationCurves(times, values, morphTargets.Count);

				GLTFUtils.addMorphAnimationCurvesToClip(morphCurves, nodePath, morphTargets.ToArray(), ref clip);
			}
			else
			{
				Debug.Log("Unsupported animation channel target: " + channel.Target.Path);
			}
		}

		private void setProgress(IMPORT_STEP step, int current, int total)
		{
			if (_progressCallback != null)
				_progressCallback(step, current, total);
		}

		private IEnumerator LoadSkins()
		{
			setProgress(IMPORT_STEP.SKIN, 0, _root.Skins.Count);
			for (int i = 0; i < _root.Skins.Count; ++i)
			{
				LoadSkin(_root.Skins[i], i);
				setProgress(IMPORT_STEP.SKIN, (i + 1), _root.Skins.Count);
				yield return null;
			}
		}

		private void LoadSkin(GLTF.Schema.Skin skin, int index)
		{
            if (!_skinIndexToGameObjects.ContainsKey(index))
            {
                return;
            }

            Transform[] boneList = new Transform[skin.Joints.Count];
			for (int i = 0; i < skin.Joints.Count; ++i)
			{
				boneList[i] = _importedObjects[skin.Joints[i].Id].transform;
			}

			foreach (SkinnedMeshRenderer skinMesh in _skinIndexToGameObjects[index])
			{
				skinMesh.bones = boneList;
			}
		}

		private void BuildSkinnedMesh(GameObject nodeObj, GLTF.Schema.Skin skin, int meshIndex)
		{
			if(skin.InverseBindMatrices.Value.Count == 0)
				return;

			SkinnedMeshRenderer skinMesh = nodeObj.AddComponent<SkinnedMeshRenderer>();
			skinMesh.sharedMesh = _assetManager.getMesh(meshIndex);
			skinMesh.sharedMaterials = _assetManager.getMaterials(meshIndex);

			byte[] bufferData = _assetCache.BufferCache[skin.InverseBindMatrices.Value.BufferView.Value.Buffer.Id];
			NumericArray content = new NumericArray();
			List<Matrix4x4> bindPoseMatrices = new List<Matrix4x4>();
			GLTF.Math.Matrix4x4[] inverseBindMatrices = skin.InverseBindMatrices.Value.AsMatrixArray(ref content, bufferData);
			foreach (GLTF.Math.Matrix4x4 mat in inverseBindMatrices)
			{
				bindPoseMatrices.Add(mat.ToUnityMatrix().switchHandedness());
			}

			skinMesh.sharedMesh.bindposes = bindPoseMatrices.ToArray();
			if(skin.Skeleton != null && _importedObjects.ContainsKey(skin.Skeleton.Id))
				skinMesh.rootBone = _importedObjects[skin.Skeleton.Id].transform;
		}

		protected virtual void LoadSkinnedMeshAttributes(int meshIndex, int primitiveIndex, ref Vector4[] boneIndexes, ref Vector4[] weights)
		{
			GLTF.Schema.MeshPrimitive prim = _root.Meshes[meshIndex].Primitives[primitiveIndex];
			if (!prim.Attributes.ContainsKey(SemanticProperties.JOINT) || !prim.Attributes.ContainsKey(SemanticProperties.WEIGHT))
				return;

			parseAttribute(ref prim, SemanticProperties.JOINT, ref boneIndexes);
			parseAttribute(ref prim, SemanticProperties.WEIGHT, ref weights);
			foreach(Vector4 wei in weights)
			{
				wei.Normalize();
			}
		}

		private void parseAttribute(ref GLTF.Schema.MeshPrimitive prim, string property, ref Vector4[] values)
		{
			byte[] bufferData = _assetCache.BufferCache[prim.Attributes[property].Value.BufferView.Value.Buffer.Id];
			NumericArray num = new NumericArray();
			GLTF.Math.Vector4[] gltfValues = prim.Attributes[property].Value.AsVector4Array(ref num, bufferData);
			values = new Vector4[gltfValues.Length];

			for (int i = 0; i < gltfValues.Length; ++i)
			{
				values[i] = gltfValues[i].ToUnityVector4();
			}
		}

		protected virtual GameObject CreateNode(Node node, int index)
		{
			var nodeObj = createGameObject(node.Name != null ? node.Name : "SeinNode");

			_nbParsedNodes++;
			setProgress(IMPORT_STEP.NODE, _nbParsedNodes, _root.Nodes.Count);
			Vector3 position;
			Quaternion rotation;
			Vector3 scale;
			node.GetUnityTRSProperties(out position, out rotation, out scale);
			nodeObj.transform.localPosition = position;
			nodeObj.transform.localRotation = rotation;
			nodeObj.transform.localScale = scale;

			bool isSkinned = node.Skin != null && isValidSkin(node.Skin.Id);
			bool hasMorphOnly = node.Skin == null && node.Mesh != null && node.Mesh.Value.Weights != null && node.Mesh.Value.Weights.Count != 0;
			if (node.Mesh != null)
			{
				if (isSkinned) // Mesh is skinned (it can also have morph)
				{
					if (!_skinIndexToGameObjects.ContainsKey(node.Skin.Id))
						_skinIndexToGameObjects[node.Skin.Id] = new List<SkinnedMeshRenderer>();
                    
                    _skinObjectsStore.Add(node, nodeObj);
				}
				else if (hasMorphOnly)
				{
					SkinnedMeshRenderer smr = nodeObj.AddComponent<SkinnedMeshRenderer>();
					smr.sharedMesh = _assetManager.getMesh(node.Mesh.Id);
                    smr.materials = _assetManager.getMaterials(node.Mesh.Id);
                }
				else
				{
					// If several primitive, create several nodes and add them as child of this current Node
					MeshFilter meshFilter = nodeObj.AddComponent<MeshFilter>();
					meshFilter.sharedMesh = _assetManager.getMesh(node.Mesh.Id);

					MeshRenderer meshRenderer = nodeObj.AddComponent<MeshRenderer>();
                    meshRenderer.materials = _assetManager.getMaterials(node.Mesh.Id);
                }
            }

            processSeinComponents(nodeObj, node);

			if (node.Children != null)
			{
				foreach (var child in node.Children)
				{
					var childObj = CreateNode(child.Value, child.Id);
					childObj.transform.SetParent(nodeObj.transform, false);
				}
			}

			_importedObjects.Add(index, nodeObj);
			return nodeObj;
		}

		private GameObject createGameObject(string name)
		{
			name = GLTFUtils.cleanName(name);
			return _assetManager.createGameObject(name);
		}

        private void processSeinComponents(GameObject go, Node node)
        {
            if (node.Extensions == null)
            {
                return;
            }

            if (node.Extensions.ContainsKey("Sein_node"))
            {
                var n = (Sein_nodeExtension)node.Extensions["Sein_node"];
                var seinNode = go.AddComponent<SeinNode>();
                seinNode.selfType = n.selfType;
                seinNode.className = n.className;
                seinNode.tag = n.tag;
                seinNode.layer = n.layer;
                seinNode.persistent = n.persistent;
                seinNode.emitComponentsDestroy = n.emitComponentsDestroy;
                seinNode.updateOnEverTick = n.updateOnEverTick;
                seinNode.isStatic = n.isStatic;
                seinNode.skipThisNode = n.skipThisNode;
            }

            if (node.Extensions.ContainsKey("Sein_audioSource"))
            {
                var source = (Sein_audioSourceExtension)node.Extensions["Sein_audioSource"];
                var audioSource = go.AddComponent<SeinAudioSource>();
                audioSource.defaultClip = source.defaultClip;
                audioSource.needAutoPlay = source.needAutoPlay;
                audioSource.isSpaceAudio = source.isSpaceAudio;
                audioSource.autoPlayOptions = source.autoPlayOptions;
                audioSource.spaceOptions = source.spaceOptions;
                audioSource.clips = new SeinAudioOneClip[source.clips.Count];
                for (int i = 0; i < source.clips.Count; i += 1)
                {
                    var clip = new SeinAudioOneClip();
                    clip.name = source.clips[i].Key;
                    clip.clip = _assetCache.AudioClipCache[source.clips[i].Value];
                    audioSource.clips[i] = clip;
                }
            }

            if (node.Extensions.ContainsKey("Sein_audioListener"))
            {
                var source = (Sein_audioListenerExtension)node.Extensions["Sein_audioListener"];
                var audioSource = go.AddComponent<SeinAudioListener>();
                audioSource.rotatable = source.rotatable;
            }

            if (node.Extensions.ContainsKey("Sein_animator"))
            {
                var ani = (Sein_animatorListenerExtension)node.Extensions["Sein_animator"];
                var animator = go.AddComponent<SeinAnimator>();
                animator.modelAnimations = ani.modelAnimations;
                animator.defaultAnimation = ani.defaultAnimation;
            }

            if (node.Extensions.ContainsKey("Sein_physicBody"))
            {
                var physicBody = (Sein_physicBodyExtension)node.Extensions["Sein_physicBody"];
                var rigidBody = go.AddComponent<SeinRigidBody>();
                rigidBody.mass = physicBody.rigidBody.mass;
                rigidBody.restitution = physicBody.rigidBody.restitution;
                rigidBody.friction = physicBody.rigidBody.friction;
                rigidBody.unControl = physicBody.rigidBody.unControl;
                rigidBody.physicStatic = physicBody.rigidBody.physicStatic;
                rigidBody.sleeping = physicBody.rigidBody.sleeping;

                foreach (var c in physicBody.colliders)
                {
                    if (c is SphereCollider)
                    {
                        var collider = go.AddComponent<SphereCollider>();
                        collider.center = ((SphereCollider)c).center;
                        collider.radius = ((SphereCollider)c).radius;
                        collider.isTrigger = c.isTrigger;
                    }
                    else if (c is BoxCollider)
                    {
                        var collider = go.AddComponent<BoxCollider>();
                        collider.center = ((BoxCollider)c).center;
                        collider.size = ((BoxCollider)c).size;
                        collider.isTrigger = c.isTrigger;
                    }
                }

                UnityEngine.Object.DestroyImmediate(physicBody.tmpGo);
            }
        }

        private bool isValidSkin(int skinIndex)
		{
			if (skinIndex >= _root.Skins.Count)
				return false;

			Skin glTFSkin = _root.Skins[skinIndex];

			return glTFSkin.Joints.Count > 0 && glTFSkin.Joints.Count == glTFSkin.InverseBindMatrices.Value.Count;
		}

		private void finishImport()
		{
			GameObject prefab = _assetManager.savePrefab(_sceneObject, _projectDirectoryPath, _addToCurrentScene);
			if (_finishCallback != null)
				_finishCallback();

			Clear();

			if (_addToCurrentScene == true)
			{
				// Select and focus imported object
				_sceneObject = PrefabUtility.InstantiatePrefab(prefab) as GameObject;
				GameObject[] obj = new GameObject[1];
				obj[0] = _sceneObject;
				Selection.objects = obj;
#if UNITY_2017
				EditorApplication.ExecuteMenuItem("Edit/Frame Selected");
#endif
			}
		}

		/// <summary>
		/// Call this to abort current import
		/// </summary>
		public void abortImport()
		{
			if (!_isDone)
			{
				_userStopped = true;
			}
		}

		/// <summary>
		/// Cleans all generated files and structures
		/// </summary>
		///
		public void softClean()
		{
			if (_assetManager != null)
				_assetManager.softClean();

			_taskManager.clear();
			Resources.UnloadUnusedAssets();
		}

		public void Clear()
		{
			if (_assetManager != null)
				_assetManager.softClean();

			_taskManager.clear();
			Resources.UnloadUnusedAssets();
		}

		private void cleanObjects()
		{
			foreach (GameObject ob in _importedObjects.Values)
			{
				GameObject.DestroyImmediate(ob);
			}
			GameObject.DestroyImmediate(_sceneObject);
			_sceneObject = null;
			_assetManager.softClean();
		}

		public void OnDestroy()
		{
			Clear();
		}
	}
}

class TaskManager
{
	List<IEnumerator> _tasks;
	IEnumerator _current = null;

	public TaskManager()
	{
		_tasks = new List<IEnumerator>();
	}

	public void addTask(IEnumerator task)
	{
		_tasks.Add(task);
	}

	public void clear()
	{
		_tasks.Clear();
	}

	public bool play()
	{
		if(_tasks.Count > 0)
		{
			if (_current == null || !_current.MoveNext())
			{
				_current = _tasks[0];
				_tasks.RemoveAt(0);
			}
		}

		if (_current != null)
			_current.MoveNext();

		if (_current != null && !_current.MoveNext() && _tasks.Count == 0)
			return false;

		return true;
	}
}