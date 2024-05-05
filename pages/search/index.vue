<template>
  <div class="container">
    <div>
      <h1>Product Search</h1>
      <input type="text" v-model="searchQuery" placeholder="Enter search query" />
      <ul v-if="filteredProducts?.length > 0">
        <li v-for="product in filteredProducts" :key="product.id">
          <h2>{{ product.name }}</h2>
          <p>{{ product.description }}</p>
        </li>
      </ul>
    </div>
    <div>
      <h1>Apps List</h1>
      <ClientOnly fallback-tag="span" fallback="Loading Users...">
        <Users />
      </ClientOnly>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const searchQuery = ref('');
const products = ref([]);
const filteredProducts = ref([]);

// Fetch product data function
const fetchProducts = async () => {
  try {
    const { data } = await useFetch('/api/products', {
      transform: (_apps) => _apps.data,
    });
    products.value = data.value;
    filteredProducts.value = data.value;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

// Call fetchProducts on component mount
fetchProducts();

// Define searchProducts function to filter products based on search query
const searchProducts = async () => {
  try {
    const { data } = await useFetch(`/api/products?search=${searchQuery.value}`, {
      transform: (_apps) => _apps.data,
    });
    filteredProducts.value = data.value;
  } catch (error) {
    console.error('Error fetching filtered products:', error);
  }
};

// Watch for changes in searchQuery and trigger searchProducts
import { watch } from 'vue';
watch(searchQuery, () => {
  searchProducts();
});
</script>

<style scoped>
.container {
  display: flex;
  grid-gap: 20px;
  font-size: 20px;
  justify-content: space-around;
}
</style>
