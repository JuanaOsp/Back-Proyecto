<template>
  <div class="home-container">
    <div class="hero-banner">
      <h1 class="banner-title">Descubre Nuestros Mejores Productos</h1>
      <p class="banner-subtitle">Encuentra todo lo que necesitas al mejor precio</p>
      <button class="banner-button" @click="goToProducts">Ver Productos</button>
    </div>
    <div class="featured-products">
      <h2 class="section-title">Que Tenemos Para Ofrecerte!</h2>
      <div class="product-grid">
        <div class="product-card" v-for="product in featuredProducts" :key="product.id">
          <img :src="product.image" :alt="product.name" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <button class="btn-details" @click="viewProduct(product.id)">Ver Detalles</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const featuredProducts = ref([
  {
    id: 1,
    name: 'Tecnologia',
    image: 'https://isenacode.com/wp-content/uploads/2024/10/Portada-mis-dispositivos--758x569.jpg'
  },
  {
    id: 2,
    name: 'Ropa',
    image: 'https://sopotey.com/blog/wp-content/uploads/2024/04/ropa-de-marca-original.jpg'
  },
  {
    id: 3,
    name: 'Alimentos',
    image: 'https://concepto.de/wp-content/uploads/2015/03/alimentos-e1549655525168-800x400.jpg'
  },
  {
    id: 4,
    name: 'Variedades',
    image:
      'https://www.thinkbright.mx/static/297090227e598dcab3d4438923f92439/ecb2f/7_477d003f56.jpg'
  }
])

const goToProducts = () => {
  router.push('/ListP')
}
const viewProduct = () => {
  router.push(`/ViewP/:id`)
}
</script>

<style scoped>
.home-container {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero-banner {
  background-color: #c2c2c2;
  background-size: cover;
  background-position: center;
  color: #fff;
  text-align: center;
  padding: 60px 20px;
  border-radius: 2px;
}

.banner-title {
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: bold;
}

.banner-subtitle {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.banner-button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #ff5733;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.banner-button:hover {
  background-color: #c44427;
}

/* Sección de Productos Destacados */
.featured-products {
  margin-top: 40px;
  padding: 20px;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #555;
}

/* Diseño del Grid de Productos */
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 0 20px;
}

.product-card {
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-image {
  width: 100%;
  height: 150px;
  object-fit: cover;
}

.product-info {
  padding: 15px;
  text-align: center;
}

.product-name {
  font-size: 1.1rem;
  font-weight: bold;
  margin: 10px 0;
}

.product-price {
  font-size: 1rem;
  color: #ff5733;
  margin-bottom: 10px;
}

.btn-details {
  padding: 8px 15px;
  font-size: 0.9rem;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-details:hover {
  background-color: #0056b3;
}
</style>
