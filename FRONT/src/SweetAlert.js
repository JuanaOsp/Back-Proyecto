import Swal from 'sweetalert2'
import axios from 'axios'

export function showAlert(titleA, iconA, foco = '') {
  if (foco != '') {
    document.getElementById(foco).focus()
  }
  Swal.fire({
    title: titleA,
    icon: iconA,
    customClass: { confirmButton: 'btn btn-primary', popup: 'animated zoonIn' },
    buttonsStyling: false
  })
}

export function confirm(urlConSlash, id, titleE, mensaje) {
  var url = urlConSlash + id
  const swalWithBoostrapButton = Swal.mixin({
    customClass: { confirmButton: 'btn btn-success me-3', cancelButton: 'btn btn-danger' }
  })

  swalWithBoostrapButton
    .fire({
      title: titleE,
      text: mensaje,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: '<i class= "fa-solid fa-check">Si Eliminar</i>',
      cancelButtonText: '<i class= "fa-solid fa-ban">Cancelar</i>'
    })
    .then((res) => {
      if (res.isConfirmed) {
        enviarSolicitud('DELETE', { _id: id }, url, 'Eliminado Con Exito')
      } else {
        showAlert('Operacion cancelada', 'info')
      }
    })
}

export function enviarSolicitud(metodo, parametros, url, mensaje) {
  axios({ method: metodo, url: url, data: parametros })
    .then(function (res) {
      var estado = res.status
      if (estado == 200) {
        showAlert(mensaje, 'success')
        window.setTimeout(function () {
          window.location.href = '/ListP'
        }, 1000)
      } else {
        showAlert('Servidor no Disponible', 'Error')
      }
    })
    .catch(function () {
      showAlert('No se recupero la respuesta', 'error')
    })
}
