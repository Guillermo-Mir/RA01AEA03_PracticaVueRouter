<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Benvinguts a FoodExplorer</h1>
      <p class="hero-subtitle">Descobreix, explora i consulta delicioses receptes</p>
    </div>
    <div class="hero-image">
      <img 
        src="https://www.carniceriademadrid.es/wp-content/uploads/2021/07/arroz-con-chuleta-dani-garcia-e1626711536612.jpg" 
        alt="Deliciosa recepta"
      />
    </div>
  </section>
</template>

<style scoped>
/* Contenidor principal */
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
  gap: 2rem;
}

/* Text principal */
.hero-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  color: #1a1a1a;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: #555;
  margin: 0;
}

/* Imatge */
.hero-image img {
  width: 100%;
  max-width: 600px;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s;
}

.hero-image img:hover {
  transform: scale(1.03);
}
</style>
