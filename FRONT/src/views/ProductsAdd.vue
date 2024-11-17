<template>
  <div class="row mt-3">
    <div class="col-md-5 offset-md-3">
      <div class="card">
        <div class="card-header bg-dark text-white text-center">Agregar un Nuevo Producto</div>
        <div class="card-body">
          <form v-on:submit="guardar">
            <div class="d-grid col-6 mx-auto mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="auto"
                height="130"
                fill="#0251fa"
                class="bi bi-bag-check"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0"
                />
                <path
                  d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
                />
              </svg>
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="black"
                  class="bi bi-cart2"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"
                  /></svg
              ></span>
              <input
                type="text"
                v-model="name"
                id="name"
                placeholder="Ingrese Nombre De Producto"
                required
                maxlength="50"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="currentColor"
                  class="bi bi-coin"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"
                  />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path
                    d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
                  /></svg
              ></span>
              <input
                type="number"
                v-model="price"
                id="price"
                placeholder="Ingrese Valor Del Producto"
                required
                maxlength="50"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="currentColor"
                  class="bi bi-coin"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"
                  />
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path
                    d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"
                  /></svg
              ></span>
              <input
                type="number"
                v-model="number"
                id="price"
                placeholder="Ingrese la cantidad Del Producto"
                required
                maxlength="50"
                class="form-control"
              />
            </div>
            <div class="input-group mb-3">
              <span class="input-group-text"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  fill="currentColor"
                  class="bi bi-card-text"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"
                  />
                  <path
                    d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8m0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5"
                  /></svg
              ></span>
              <input
                type="text"
                v-model="description"
                id="description"
                placeholder="Ingrese Descripcion Del Producto"
                class="form-control large-input"
              />
            </div>
            <div class="d-grid col-5 mx-auto mb-3">
              <button class="btn btn-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="250"
                  height="18"
                  fill="currentColor"
                  class="bi bi-floppy-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 1.5A1.5 1.5 0 0 1 1.5 0H3v5.5A1.5 1.5 0 0 0 4.5 7h7A1.5 1.5 0 0 0 13 5.5V0h.086a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5H14v-5.5A1.5 1.5 0 0 0 12.5 9h-9A1.5 1.5 0 0 0 2 10.5V16h-.5A1.5 1.5 0 0 1 0 14.5z"
                  />
                  <path
                    d="M3 16h10v-5.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5zm9-16H4v5.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5zM9 1h2v4H9z"
                  />
                </svg>
                Registrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios' // Importa la instancia de Axios
import { showAlert } from '../SweetAlert'
export default {
  data() {
    return {
      name: '',
      price: '',
      number: '',
      description: '',
      cargando: true
    }
  },
  methods: {
    async guardar(event) {
      event.preventDefault()
      if (this.name.trim() === '') {
        showAlert('Ingrese un Nombre', 'warning', 'name')
      } else {
        const parametros = {
          name: this.name.trim(),
          price: this.price,
          number: this.number,
          description: this.description.trim()
        }
        try {
          await axios.post('/api/products', parametros)
          showAlert('Producto Registrado!', 'success')
          this.name = ''
          this.price = ''
          this.number = ''
          this.description = ''
          // Limpiar el formulario o redirigir si es necesario
        } catch (error) {
          console.error('Error al registrar el producto:', error)
          showAlert('Error al registrar el producto', 'error')
        }
      }
    }
  }
}
</script>
