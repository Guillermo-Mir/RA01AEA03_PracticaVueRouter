<script setup></script>

<template>
  <header class="header">
    <h1 class="site-title">FoodExplorer</h1>
    <nav class="nav">
      <RouterLink class="nav-link" to="/">Inici</RouterLink>
      <RouterLink class="nav-link" to="/Recipes">Receptes</RouterLink>
    </nav>
    <hr class="divider" />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* Contenidor principal */
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;
  gap: 1rem;
}

/* Títol del lloc */
.site-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

/* Navegació */
.nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  font-weight: 500;
  color: #555;
  transition: color 0.2s;
}

.nav-link:hover {
  color: #ff6b6b;
}

/* Separador */
.divider {
  width: 60%;
  border: 0;
  border-top: 1px solid #eee;
  margin-top: 1rem;
}
</style>
