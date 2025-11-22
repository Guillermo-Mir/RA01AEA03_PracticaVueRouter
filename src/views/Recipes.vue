<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';

const recipes = ref([
    {
        id: 1,
        name: 'Filet de Ganxet',
        desc: 'Tall sucós i saborós de vedella, ideal per planxa o guisats.',
        img: 'https://images.ecestaticos.com/daIKk1Zivj-HWdLwCdYiJ4fwkpw=/0x109:2118x1300/1200x1200/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fae7%2F057%2Ff66%2Fae7057f662514c104cf253f096b86680.jpg',
        ingredients: [
            '500 g de filet de Ganxet',
            'Sal i pebre al gust',
            'Oli d’oliva verge extra',
            'Mantega'
        ],
        pas: [
            'Salpebreu els filets per ambdós costats.',
            'Escalfeu una paella amb una mica d’oli i mantega.',
            'Cuineu els filets al punt desitjat, 3-4 minuts per costat aproximadament.',
            'Deixeu reposar uns minuts abans de tallar-los i servir-los.'
        ]
    },
    {
        id: 2,
        name: 'Pasta Carbonara',
        desc: 'Pasta amb salsa cremosa d’ou, formatge i cansalada.',
        img: 'https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/0346a29a89ef229b1a0ff9697184f944/Derivates/cb5051204f4a4525c8b013c16418ae2904e737b7.jpg',
        ingredients: [
            '400 g de pasta',
            '150 g de cansalada o pancetta',
            '2 ous',
            '50 g de formatge parmesà ratllat',
            'Sal i pebre al gust'
        ],
        pas: [
            'Bulliu la pasta segons les instruccions del paquet.',
            'Fregiu la cansalada fins que estigui cruixent.',
            'Barregeu els ous amb el formatge i reserveu.',
            'Escorreu la pasta i barregeu-la ràpidament amb la cansalada i la barreja d’ous.',
            'Serviu immediatament amb una mica de pebre negre.'
        ]
    },
    {
        id: 3,
        name: 'Croquetes de Galta',
        desc: 'Croquetes casolanes elaborades amb galta de vedella melosa.',
        img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6sS30iMzDhJaRvwuNc00sMQWQF2Saxl6IoLErvJViEj9Ce3a4cttLz_x42VH-0gExwtzNBW7kn4RHtL7_KdFiwk9OEUiG7uR_hlGDJT_i-1LMVpj7-IUas8ysraaJHb8ULpgj2F2F53o/s2048/FF5F35E8-E416-417B-AD80-AEEA4C648702.jpeg',
        ingredients: [
            '300 g de galta de vedella cuita i desmenuçada',
            '50 g de mantega',
            '50 g de farina',
            '500 ml de llet',
            'Sal, pebre i nou moscada',
            'Ou i pa ratllat per arrebossar'
        ],
        pas: [
            'Fusioneu la mantega i afegiu la farina per fer un roux.',
            'Afegiu la llet a poc a poc remenant fins obtenir una beixamel espessa.',
            'Incorporeu la galta de vedella desmenuçada i condimenteu amb sal, pebre i nou moscada.',
            'Deixeu refredar la massa a la nevera.',
            'Formeu les croquetes, arrebosseu-les amb ou i pa ratllat, i fregiu-les fins que estiguin daurades.'
        ]
    }
]);
</script>

<template>
  <main class="container">
    <h1 class="title">Recipes</h1>

    <ul class="recipe-list">
      <li v-for="recipe in recipes" :key="recipe.id" class="recipe-card">
        <div class="recipe-content">
          <h2 class="recipe-name">{{ recipe.name }}</h2>
          <p class="recipe-desc">{{ recipe.desc }}</p>
          <img :src="recipe.img" :alt="recipe.name" />
          <RouterLink :to="`/recipes/${recipe.id}`" class="recipe-link">
            Veure Detall →
          </RouterLink>
        </div>
      </li>
    </ul>

    <RouterView/>
  </main>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}


.title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 2rem;
}


.recipe-list {
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 1.5rem;
}


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


.recipe-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: block;
}


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
