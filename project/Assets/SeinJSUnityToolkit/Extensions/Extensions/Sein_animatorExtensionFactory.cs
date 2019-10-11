﻿using System;
using Newtonsoft.Json.Linq;
using GLTF.Math;
using Newtonsoft.Json;
using GLTF.Extensions;
using System.Collections.Generic;
using GLTF.Schema;
using UnityEngine;

namespace SeinJS
{
    public class Sein_animatorExtensionFactory : SeinExtensionFactory
    {
        public new static string EXTENSION_NAME = "Sein_animator";
        public new static List<Type> BINDED_COMPONENTS = new List<Type> { typeof(SeinAnimator) };

        public override void Serialize(ExporterEntry entry, Dictionary<string, Extension> extensions, Component component = null)
        {
            var animator = component as SeinAnimator;
            var extension = new Sein_animatorExtension();

            extension.prefix = animator.prefix;
            extension.defaultAnimation = animator.defaultAnimation;
            extension.modelAnimations = animator.modelAnimations;

            AddExtension(extensions, extension);
        }

        public override Extension Deserialize(GLTFRoot root, JProperty extensionToken)
        {
            var extension = new Sein_animatorExtension();

            if (extensionToken != null)
            {
                extension.defaultAnimation = (string)extensionToken.Value["defaultAnimation"];
                extension.modelAnimations = extensionToken.Value["modelAnimations"].ToObject<string[]>();
                extension.prefix = (string)extensionToken.Value["prefix"];
            }

            return extension;
        }
    }
}
