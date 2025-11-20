<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const recipes = ref([
    {
        id: 1,
        name: 'Filet de Ganxet',
        desc: 'Tall sucós i saborós de vedella, ideal per planxa o guisats.',
        img: '',
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
        img: '',
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
        name: 'Croquetes de Galta de Vedella',
        desc: 'Croquetes casolanes elaborades amb galta de vedella melosa.',
        img: '',
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

const route = useRoute()
const recipe = ref(null)
const recipeID = parseInt(route.params.id)

const carregarrecipe = (id) => {
    const newID = parseInt(id)
    recipe.value = recipes.value.find(f => f.id === newID) || null
}

carregarrecipe(route.params.id)

watch(
    () => route.params.id,
    (newID) => carregarrecipe(newID)
)
</script>

<template>
    <div class="recipe-container" v-if="recipe">
        <h1 class="recipe-title">{{ recipe.name }}</h1>
        <p class="recipe-desc"><strong>Descripció:</strong> {{ recipe.desc }}</p>

        <section class="recipe-section">
            <h2>Ingredients</h2>
            <ul>
                <li v-for="(ing, ingredient) in recipe.ingredients" :key="ingredient">{{ ing }}</li>
            </ul>
        </section>

        <section class="recipe-section">
            <h2>Passos</h2>
            <ol>
                <li v-for="(step, steps) in recipe.pas" :key="steps">{{ step }}</li>
            </ol>
        </section>

        <div class="recipe-img">
            <img :src="recipe.img" :alt="recipe.name" />
        </div>
    </div>
</template>

<style scoped>
.recipe-container {
    max-width: 700px;
    margin: 2rem auto;
    padding: 1rem 2rem;
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
}

.recipe-title {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
}

.recipe-desc {
    text-align: center;
    color: #555;
    margin-bottom: 2rem;
}

.recipe-section {
    margin-bottom: 2rem;
}

.recipe-section h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 0.25rem;
}

ul,
ol {
    padding-left: 1.5rem;
    color: #333;
}

li {
    margin-bottom: 0.5rem;
}

.recipe-img {
    text-align: center;
    margin-top: 2rem;
}

.recipe-img img {
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
</style>
