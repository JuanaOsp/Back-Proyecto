<!-- Login.vue -->
<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" v-model="username" class="form-control" id="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" v-model="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <p v-if="errorMessage" class="text-danger">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from '../axios';
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post('/api/login', {
          username: this.username,
          password: this.password
        });
        localStorage.setItem('userId', response.data.userId); // Guardar userId en localStorage
        this.$router.push('/verify-otp'); // Redirigir a la página de verificación OTP
      } catch (error) {
        this.errorMessage = 'Usuario o contraseña incorrectos';
      }
    }
  }
}
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh; /* Altura completa de la pantalla */
}

form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 46, 250, 0.336);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
