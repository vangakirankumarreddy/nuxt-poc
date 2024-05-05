<template>
  <div>
    <h1>Pre Render with Hyderation Support</h1>

    <header>
      <nav>
        <div class="navigation">
        </div>
        <div>
          <h1>Page Type Pre-render</h1>
          <p>Date : {{ new Date() }}</p>
        </div>
      </nav>
    </header>
  </div>
</template>
``
<style scoped>
.navigation {
  display: flex;
  grid-gap: 20px;
  font-size: 20px;
}
</style>
