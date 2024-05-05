<script setup>
const { data } = await useFetch('/api/apps', {
  transform: (_apps) => _apps.data,
});
</script>

<template>
  <div class="app">
    <router-link
      v-if="!!data"
      v-for="user in data"
      :key="user.id"
      :to="'/apps/' + user.id"
    >
      <div class="card">
        <h2>{{ user.name }}</h2>
        <p>{{ user.desc }}</p>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  grid-gap: 20px;
  font-size: 20px;
}

.app {
  display: flex;
  grid-gap: 20px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card img {
  border-radius: 50%;
}

.card h2 {
  margin-top: 8px;
  margin-bottom: 4px;
}

.card p {
  margin: 4px 0;
}
</style>
