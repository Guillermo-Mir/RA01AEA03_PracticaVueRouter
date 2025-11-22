<script setup>
import ProductItem from './ProductItem.vue';

const props = defineProps({
    products: { type: Array, required: true }
});
</script>

<template>
  <div class="category-list">
    <ProductItem v-for="product in products" :key="product.id" :product="product"/>
  </div>
</template>

<style scoped>
.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1rem;
}
</style>
