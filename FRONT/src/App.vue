<template>
  <div id="app">
    <Navbar v-if="$route.name !== 'Login' && $route.name !== 'VerifyOTP'" /> <!-- El Navbar solo se muestra si la ruta no es Login -->
    <router-view />
  </div>
</template>

<script setup>
import Navbar from './components/NavBar.vue'
</script>

<style scoped>

</style>