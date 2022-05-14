import Swal from "sweetalert2"

export const saleAlert = (id) => {
  Swal.fire({
    title: `¡Gracias por tu compra!, estamos preparando tu pedido, código de orden: ${id}`,
    width: 600,
    padding: '3em',
    color: '#000',
    background: '#fff',
    backdrop: `
        rgba(0,0,123,0.4)
      `
  })
}

export const errorAlert = (error) => {
  Swal.fire({
    icon: 'error',
    title: 'Algo salio mal',
    text: error
  })
}