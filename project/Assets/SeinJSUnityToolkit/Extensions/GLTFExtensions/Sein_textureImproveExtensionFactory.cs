﻿/**
 * @File   : Sein_textureImproveExtensionFactory.cs
 * @Author : dtysky (dtysky@outlook.com)
 * @Link   : dtysky.moe
 * @Date   : 2019/09/17 0:00:00PM
 */
using System;
using System.Collections.Generic;
using GLTF.Schema;
using Newtonsoft.Json.Linq;
using UnityEditor;
using UnityEngine;

namespace SeinJS
{
    public class Sein_textureImproveExtensionFactory : SeinExtensionFactory
    {
        public override string GetExtensionName() { return "Sein_textureImprove"; }

        public override void Serialize(ExporterEntry entry, Dictionary<string, Extension> extensions, UnityEngine.Object component = null, object options = null)
        {
            var texture = component as Texture2D;

            var extension = new Sein_textureImproveExtension();

            extension.anisotropic = texture.anisoLevel;
            // for 3d modle's textures, it always be true
            extension.isImageCanRelease = true;

            AddExtension(extensions, extension);
        }

        public override Extension Deserialize(GLTFRoot root, JProperty extensionToken)
        {
            var extension = new Sein_textureImproveExtension();

            if (extensionToken == null)
            {
                return null;
            }

            extension.isImageCanRelease = (bool)extensionToken.Value["isImageCanRelease"];
            extension.anisotropic = (int)extensionToken.Value["anisotropic"];

            return extension;
        }
    }
}
