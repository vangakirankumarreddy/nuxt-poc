<template>
     <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
    <div>
      <div v-if="product">
        <div class="card">
          <h2>{{ product.name }}</h2>
          <img :src="product.avatar" :alt="product.name" width="100" height="100" />
          <p>Created At: {{ product.createdAt }}</p>
          <div>
            <p>{{ product.desc }}</p>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>
      <div>
        <h1>Page Type Only SSR,</h1>
        <p>Date : {{ new Date() }}</p>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const product = ref(null);
  
  // Fetch data on the server side using the fetch hook
  async function fetchData() {
    try {
      const response = await fetch('https://60b0c06a1f26610017fff217.mockapi.io/api/users/products/1');
      if (response.ok) {
        const data = await response.json();
        product.value = data;
        console.log('Product data:', product.value); // Logging product data
      } else {
        throw new Error('Failed to fetch product data');
      }
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  }
  
  onMounted(fetchData); // Call fetchData on the server side
  </script>
  