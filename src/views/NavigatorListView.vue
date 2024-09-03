<script setup>
import { onMounted } from 'vue';

function enumerateProperties(obj, prefix = '') {
  let result = '';
  const keys = Object.getOwnPropertyNames(obj).sort();

  keys.forEach(key => {
    try {
      const value = obj[key];
      const fullKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === 'object' && value !== null) {
        result += `${fullKey}: [object ${value.constructor.name}]\n`;
        result += enumerateProperties(value, fullKey);
      } else if (typeof value === 'function') {
        result += `${fullKey}: [Function]\n`;
      } else {
        result += `${fullKey}: ${value}\n`;
      }
    } catch (e) {
      console.error(`Error retrieving value for ${key}:`, e);
      result += `${key}: [Error retrieving value]\n`;
    }
  });

  return result;
}

onMounted(() => {
  console.log('onMounted');
  
  const resultElement = document.getElementById("result");
  if (!resultElement) {
    console.error('Result not found');
    return;
  }
  
  console.log('Result element found:', resultElement);
  
  console.log('Navigator object:', navigator); // Log the entire navigator object
  
  let navigatorInfo = '';

  // Use Object.getOwnPropertyNames to get all properties, including non-enumerable ones
  const ownPropertyNames = Object.getOwnPropertyNames(navigator);
  console.log('Own property names:', ownPropertyNames);

  // Use for...in to get enumerable properties
  const enumerableProperties = [];
  for (const key in navigator) {
    enumerableProperties.push(key);
  }
  console.log('Enumerable properties:', enumerableProperties);

  // Combine both sets of properties and remove duplicates
  const allProperties = Array.from(new Set([...ownPropertyNames, ...enumerableProperties])).sort();
  console.log('All properties:', allProperties);

  if (allProperties.length === 0) {
    navigatorInfo = 'No properties found on navigator object.';
  } else {
    navigatorInfo = enumerateProperties(navigator);
  }

  console.log('Navigator info:', navigatorInfo);
  resultElement.textContent = navigatorInfo;
});
</script>

<template>
  <div>
    <h2 class="text-3xl mb-4">Navigator Object Lister</h2>
    <div class="bg-gray-800 p-6 rounded-lg shadow-md relative">
      <pre id="result" class="mb-2 font-mono text-sm">Fetching data...</pre>
    </div>
  </div>
</template>