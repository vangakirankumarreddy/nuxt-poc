<template>
  <div>
    <div class="navigation">
      <NuxtLink to="/">Home</NuxtLink>
    </div>
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
        <h1>Page Type Only Static SSR, stored hard-code product</h1>
        <p>Date : {{ new Date() }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const product = ref({
  "createdAt": "2024-05-05T03:44:03.845Z",
  "name": "Arturo Durgan",
  "avatar": "https://via.placeholder.com/350x150",
  "desc": "Liaison",
  "id": "1"
});

</script>