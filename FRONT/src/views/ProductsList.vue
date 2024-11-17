<!-- Home.vue -->
<template>
  <div class="row">
    <div class="col-lg-8 offset-lg-2">
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>#</th>

              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Descripcion</th>
              <th></th>
            </tr>
          </thead>
          <tbody class="table-group-divider" id="contenido">
            <tr v-if="cargando">
              <td colspan="6"><h3>Cargando...</h3></td>
            </tr>
            <tr v-else v-for="(product, i) in productos" :key="product._id">
              <td v-text="i + 1"></td>

              <td v-text="product.name"></td>
              <td v-text="product.price"></td>
              <td v-text="product.number"></td>
              <td v-text="product.description"></td>
              <td>
                <router-link :to="{ path: 'viewP/' + product._id }" class="btn btn-info">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="20"
                    fill="currentColor"
                    class="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                    <path
                      d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"
                    />
                  </svg>
                </router-link>
                &nbsp;
                <router-link :to="{ path: 'editP/' + product._id }" class="btn btn-warning">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                    />
                    <path
                      fill-rule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                    />
                  </svg>
                </router-link>
                &nbsp;
                <button class="btn btn-danger" @click="eliminar(product._id, product.name)">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-trash3-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from '../axios'
import { confirm } from '../SweetAlert'
export default {
  data() {
    return {
      productos: null,
      cargando: true
    }
  },
  mounted() {
    if (!localStorage.getItem('userId')) {
      this.$router.push('/login')
    } else {
      this.getProducts()
    }
  },
  methods: {
    getProducts() {
      this.cargando = true
      axios.get('/api/products').then((res) => {
        this.productos = res.data
        this.cargando = false
      })
    },
    eliminar(id, name) {
      confirm(
        'http://localhost:3010/api/products/',
        id,
        'Eliminar Producto',
        'Desea Eliminar: ' + name
      ).then((result) => {
        if (result.isConfirmed) {
          console.log('Eliminando...')
          axios
            .delete(`/api/products/${id}`)
            .then(() => {
              confirm('Producto Eliminado con Exito!', 'success')
              this.$router.push('/')
            })
            .catch((error) => {
              // Mostrar mensaje de error
              confirm('Error al eliminar el producto', 'error')
              console.error(error)
            })
        }
      })
    }
  }
}
</script>

<style scoped></style>
