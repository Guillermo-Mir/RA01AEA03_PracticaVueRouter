<script setup>
import { inject } from 'vue';

const props = defineProps({
    product: { type: Object, required: true }
});

const afegirCarret = inject('afegirCarret');

const afegir = () => {
    afegirCarret(props.product);
}
</script>

<template>
  <div class="product-card">
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p class="price">{{ product.price }}€</p>
    </div>
    <button @click="afegir" class="boto-afegir">Afegir al carret</button>
  </div>
</template>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
}

.product-info h3 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #1a1a1a;
  margin-bottom: 0.5rem;
}

.product-info .price {
  font-size: 1rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 1rem;
}

.boto-afegir {
  padding: 0.5rem 1rem;
  background-color: #007BFF;
  color: #fff;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.boto-afegir:hover {
  background-color: #0056b3;
}
</style>
