﻿/**
 * @File   : Sein_skyboxExtensionFactory.cs
 * @Author : dtysky (dtysky@outlook.com)
 * @Link   : dtysky.moe
 * @Date   : 2019/11/19 0:00:00AM
 */
using System;
using Newtonsoft.Json.Linq;
using System.Collections.Generic;
using GLTF.Schema;
using UnityEngine;
using UnityEditor;
using System.IO;
using System.Collections;

namespace SeinJS
{
    public class Sein_skyboxExtensionFactory : SeinExtensionFactory
    {
        public override string GetExtensionName() { return "Sein_skybox"; }
        public override List<EExtensionType> GetExtensionTypes() { return new List<EExtensionType> { EExtensionType.Camera }; }

        public override void Serialize(ExporterEntry entry, Dictionary<string, Extension> extensions, UnityEngine.Object component = null, object options = null)
        {
            Sein_skyboxExtension extension = new Sein_skyboxExtension();
            var camera = component as UnityEngine.Camera;

            if (camera.clearFlags == CameraClearFlags.SolidColor)
            {
                extension.type = ESkyboxType.Color;
                extension.color = Utils.ExportColor(camera.backgroundColor);
            }
            else if (camera.clearFlags == CameraClearFlags.Skybox)
            {
                var mat = RenderSettings.skybox;

                if (mat == null)
                {
                    Debug.LogWarning("Use skybox as camera clear flag, but skybox is not defined, ignore... Check 'http://seinjs.com/cn/tutorial/artist/reflection'");
                    return;
                }

                extension.color = Utils.ExportColor(mat.GetColor("_Tint"));
                extension.rotation = mat.GetFloat("_Rotation") / 180 * (float)Math.PI;
                extension.exposure = mat.GetFloat("_Exposure") / 180 * (float)Math.PI;

                if (mat.shader.name == "Skybox/Cubemap")
                {
                    extension.type = ESkyboxType.Cube;
                    extension.textureId = entry.SaveCubeTextureHDR(mat.GetTexture("_Tex") as Cubemap, ExporterSettings.Lighting.reflectionType, ExporterSettings.Lighting.reflectionSize).Id;
                }
                else if (mat.shader.name == "Skybox/6 Sided")
                {
                    extension.type = ESkyboxType.Cube;
                    extension.textureId = entry.SaveCubeTextureHDR(
                        new Texture2D[] {
                            mat.GetTexture("_RightTex") as Texture2D,
                            mat.GetTexture("_LeftTex") as Texture2D,
                            mat.GetTexture("_UpTex") as Texture2D,
                            mat.GetTexture("_DownTex") as Texture2D,
                            mat.GetTexture("_FrontTex") as Texture2D,
                            mat.GetTexture("_BackTex") as Texture2D
                        },
                        ExporterSettings.Lighting.reflectionType, ExporterSettings.Lighting.reflectionSize
                    ).Id;
                }
                else if (mat.shader.name == "Skybox/Panoramic")
                {
                    extension.type = ESkyboxType.Panoramic;
                    extension.textureId = entry.SaveTextureHDR(mat.GetTexture("_MainTex") as Texture2D, ExporterSettings.Lighting.reflectionType, ExporterSettings.Lighting.reflectionSize).Id;
                    extension.degrees = Math.Abs(mat.GetFloat("_ImageType")) < 0.01 ? 360 : 180;
                }
                else
                {
                    Utils.ThrowExcption("Only support 'Skybox/Cubemap', 'Skybox/6 Side', 'Skybox/Panormic'");
                }
            }
            else
            {
                Utils.ThrowExcption("Only support camera clearFlag 'Solid' and 'Skybox' now!");
            }

            AddExtension(extensions, extension);
        }

        public override Extension Deserialize(GLTFRoot root, JProperty extensionToken)
        {
            return null;
        }

        public override void Import(EditorImporter importer, Extension extension)
        {

        }
    }
}