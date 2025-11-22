<script setup>
import { inject } from 'vue';

const cart = inject('cart');
const total = inject('total');
const esborrarCarret = inject('esborrarCarret');
</script>

<template>
  <div class="carret">
    <ul class="llista">
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }}€
      </li>
    </ul>

    <div class="resum-carret">
        <b><p class="total">Total: {{ total }}€</p></b>
        <button @click="esborrarCarret">🗑️ Buida carret</button>
    </div>
  </div>
</template>

<style scoped>
.carret {
  font-family: 'Inter', sans-serif;
}

.llista {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.llista li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
  color: #333;
}

.resum-carret {
  text-align: right;
}

.total {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button:hover {
  background-color: #0056b3;
}
</style>
