<script setup>
import { ref, computed, provide } from 'vue';
import CategoryList from './views/CategoryList.vue';
import Cart from './views/Cart.vue';

const products = ref([
  { id: 1, name: 'Auriculars Wireless', price: 50 },
  { id: 2, name: 'Smartwatch', price: 120 },
  { id: 3, name: 'Teclat Mecanic', price: 80 },
  { id: 4, name: 'Altaveu Bluetooth', price: 60 }
]);

const cart = ref([]);

const afegirCarret = (product) => {
  cart.value.push(product);
  alert(`${product.name} afegit al carret!`);
};

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0);
});

const esborrarCarret = () => {
    cart.value = [];
};

provide('cart', cart);
provide('afegirCarret', afegirCarret);
provide('total', total);
provide('esborrarCarret', esborrarCarret);
</script>

<template>
  <header class="header">
    <h1>Botiga de Gadgets</h1>
  </header>
  <main class="container">
    <div class="productes">
      <h2>Productes</h2>
      <CategoryList :products="products" />
    </div>
    <div class="carret">
      <h2>Carret</h2>
      <Cart />
    </div>
  </main>
</template>

<style scoped>
.header {
  text-align: center;
  padding: 2rem 0;
  background-color: #f5f5f5;
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
  border-bottom: 1px solid #ddd;
}

.container {
  max-width: 1200px;
  margin: 2rem auto;
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
}

.productes, .carret {
  flex: 1;
  min-width: 300px;
  background-color: #f9f9f9;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.25rem;
}
</style>
