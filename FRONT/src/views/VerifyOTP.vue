<template>
  <div class="otp-container">
    <form @submit.prevent="verificarOtp">
      <div class="from-group">
        <input type="text" v-model="otp" placeholder="Ingrese el OTP" required />
        <button type="submit">Verificar OTP</button>
      </div>
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
import axios from '../axios';

export default {
  data() {
    return {
      otp: '',
      error: ''
    };
  },
  methods: {
    async verificarOtp() {
      try {
        const response = await axios.post('/api/verify-otp', { otp: this.otp });
        console.log(response)
        alert(response.data);
        this.$router.push('/home'); // Redirigir al home después de verificar OTP
      } catch (error) {
        this.error = error.response.data;
      }
    }
  }
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

.otp-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 4px 2px rgba(7, 68, 235, 0.39);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  margin-bottom: 20px;
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

