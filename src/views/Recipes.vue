<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const recipes = ref([
  { id: 1, name: 'Filete de Aguja', desc: 'Corte jugoso y sabroso de ternera, ideal para plancha o guisos.', img: '' },
  { id: 2, name: 'Pasta Carbonara', desc: 'Pasta con salsa cremosa de huevo, queso y panceta.', img: '' },
  { id: 3, name: 'Croquetas de Carrillera', desc: 'Croquetas caseras elaboradas con carrillera de ternera melosa.', img: '' }
]);
</script>

<template>
  <main class="container">
    <h1 class="title">Recipes</h1>

    <ul class="recipe-list">
      <li v-for="recep in recipes" :key="recep.id" class="recipe-card">
        <div class="recipe-content">
          <h2 class="recipe-name">{{ recep.name }}</h2>
          <p class="recipe-desc">{{ recep.desc }}</p>
          <img :src="recipe.img" :alt="recipe.name" />
          <RouterLink :to="`/recipes/${recep.id}`" class="recipe-link">
            Veure Detall →
          </RouterLink>
        </div>
      </li>
    </ul>

   <!--Solucion1--> 
   <!--RouterView :key="$route.fullPath" /--> 

   <!--Solucion2--> 
   <RouterView/>
  </main>
</template>

<style scoped>
/* Contenidor central */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}

/* Títol principal */
.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}

/* Llista de receptes */
.recipe-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

/* Targeta de cada recepta */
.recipe-card {
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  transition: transform 0.2s, box-shadow 0.2s;
}

.recipe-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}

/* Contingut dins la targeta */
.recipe-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.recipe-desc {
  font-size: 1rem;
  color: #555;
  margin-bottom: 1rem;
}

/* Enllaç al detall */
.recipe-link {
  font-weight: 500;
  color: #007BFF;
  text-decoration: none;
  transition: color 0.2s;
}

.recipe-link:hover {
  color: #0056b3;
}
</style>
