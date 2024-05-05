<!-- pages/no-hydration.vue -->

<template>
    <div>
      <h1>No Hydration Page</h1>
      <p>This page will not be hydrated on the client-side.</p>
      <div>
          <h1>Page Type Pre-render</h1>
          <p>Date : {{ new Date() }}</p>
        </div>
    </div>
  </template>
  
  <script setup>
  // Disable SSR for this route
  const ssr = false;
</script>
  