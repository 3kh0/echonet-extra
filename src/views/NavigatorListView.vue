<script setup>
import { onMounted } from "vue";

function enumProp(obj, prefix = "") {
  let result = "";
  let proto = obj;

  while (proto !== null) {
    const descriptors = Object.getOwnPropertyDescriptors(proto);

    Object.keys(descriptors)
      .sort()
      .forEach((key) => {
        try {
          const descriptor = descriptors[key];
          const fullKey = prefix ? `${prefix}.${key}` : key;
          if (descriptor.get || descriptor.set) {
            const value = obj[key]; // invoke
            result += `${fullKey}: ${value}\n`;
          } else if (typeof descriptor.value === "object" && descriptor.value !== null) {
            result += `${fullKey}: [object ${descriptor.value.constructor.name}]\n`;
            result += enumProp(descriptor.value, fullKey);
          } else if (typeof descriptor.value === "function") {
            result += `${fullKey}: [Function]\n`;
          } else {
            result += `${fullKey}: ${descriptor.value}\n`;
          }
        } catch (e) {
          console.error(`Error getting value for ${key}:`, e);
          result += `${key}: [Error geting value]\n`;
        }
      });

    proto = Object.getPrototypeOf(proto);
  }

  return result;
}

onMounted(() => {
  const result = document.getElementById("result");
  if (!result) {
    console.error("Result not found");
    return;
  }

  let navInfo = "";

  // Use Object.getOwnPropertyDescriptors to get all properties, including non-enumerable ones
  const descriptors = Object.getOwnPropertyDescriptors(navigator);

  if (Object.keys(descriptors).length === 0) {
    navInfo = "No properties found on navigator object";
  } else {
    navInfo = enumProp(navigator);
  }

  result.textContent = navInfo;
});
</script>

<template>
  <div>
    <h2 class="text-3xl mb-4">Navigator Object</h2>
    <div class="bg-gray-800 p-6 rounded-lg shadow-md relative">
      <pre id="result" class="font-mono text-sm">Fetching data...</pre>
    </div>
  </div>
</template>
