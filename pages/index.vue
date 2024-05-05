<template>
  <div>
    <h1>Home</h1>

    <header>
      <nav>
        <div class="navigation">
          <NuxtLink to="/apps">Apps</NuxtLink>
          <NuxtLink to="/products">Products</NuxtLink>
          <NuxtLink to="/universal">universal</NuxtLink>
          <NuxtLink to="/onlyssr">ONLY SSR</NuxtLink>
          <NuxtLink to="/onlyStaticssr">onlyStaticssr</NuxtLink>
          <NuxtLink to="/prerender">prerender</NuxtLink>
          <NuxtLink to="/prePrenderNoHyderation">prePrenderNoHyderation</NuxtLink>
        </div>
        <div>
          <h1>Page Type Pre-render</h1>
          <p>Date : {{ new Date() }}</p>
        </div>
      </nav>
    </header>
  </div>
</template>

<style scoped>
.navigation {
  display: flex;
  grid-gap: 20px;
  font-size: 20px;
}
</style>
