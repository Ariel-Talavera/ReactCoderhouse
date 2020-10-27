import React, { useContext} from 'react';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../css/icons.css';
import { CartContext } from '../cartContext';
import Swal from 'sweetalert2'
import { getFirestore } from '../../firebase';

function CartTable() {
  const [cart, setCart] = useContext(CartContext);
  //Agrupamos los elementos repetidos
  let card_groups = cart.reduce((r, a) => {
    r[a.cardId] = [...r[a.cardId] || [], a];
    return r;
  }, {});
  //Formamos un array de índices
  let cart_ids = []
  cart.map((elem) => {
    if (!cart_ids.includes(elem.cardId)) {
      cart_ids.push(elem.cardId)
    }
  })
  //Total de compra
  let cart_total = 0
  cart_ids.map(element => {
    cart_total = cart_total + card_groups[element][0].amazon_price * card_groups[element].length
  })

  const deleteAllItems = () => {
    Swal.fire({
      title: 'Atención!',
      text: 'Desea eliminar todas las cartas del carrito?',
      icon: 'info',
      showCancelButton: true,
      showLoaderOnConfirm: true,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if(result.isConfirmed) {
        setCart(currentCart => [])
      }
    })
  }
  
  const sendOrder = async () => {
    await Swal.fire({
      title: 'Finalizar pedido',
      html:
        '<span>Gracias por elegirnos! A continuación te pedimos unos datos personales para gestionar la compra</span><br><br>' +
        'Nombre y apellido<input required id="swal-input1" class="swal2-input">' +
        'Telefono/celular<input required id="swal-input2" class="swal2-input">'+
        'Email<input required id="swal-input3" class="swal2-input">' +
        'Ingrese nuevamente su email<input required id="swal-input4" class="swal2-input">',
      confirmButtonText: 'Enviar',
      focusConfirm: false,
      preConfirm: () => {
        return new Promise(function (resolve) {
          // Validate input
          if (document.getElementById('swal-input1').value === '' || document.getElementById('swal-input2').value === '' || document.getElementById('swal-input3').value === '' || document.getElementById('swal-input4').value === '') {
            Swal.showValidationMessage("Debe completar todos los campos");
            Swal.enableButtons()
          } else {
            if (document.getElementById('swal-input3').value !== document.getElementById('swal-input4').value) {
              Swal.showValidationMessage("Los emails ingresados no coinciden");
              Swal.enableButtons()
            } else {
              Swal.resetValidationMessage();
              resolve([
                  document.getElementById('swal-input1').value,
                  document.getElementById('swal-input2').value,
                  document.getElementById('swal-input3').value
              ]);
            }
          }
        })
      }
    }).then(function(result){
      let items = []
      cart_ids.forEach(element => {
        items.push({'id': element, 'quantity': card_groups[element].length})
      });
      const docData = {
        buyer: {
          name: result.value[0],
          phone: result.value[1],
          email: result.value[2]
        },
        date: new Date().getTime(),
        items: items,
        total: parseFloat(cart_total).toFixed(2)
      }
      const db = getFirestore()
      db.collection("orders").add(docData).then(function(docRef) {
        Swal.fire({
          icon: 'success',
          title: 'Hecho!',
          text: 'La orden fue solicitada exitosamente. Nos comunicaremos con usted a la brevedad. <br> Su ID de pedido es ' + docRef.id
        })
      }).catch(function(error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un error procesando el pedido, intente nuevamente'
        })
      });
    })
  }

  return (
    <div className='table-container'>
      <table className='cart-table'>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Carta</th>
            <th>Precio</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
        {cart_ids.map(element =>
          <tr>
            <td>{card_groups[element].length}</td>
            <td>{card_groups[element][0].name}</td>
            <td>${parseFloat(card_groups[element][0].amazon_price * card_groups[element].length).toFixed(2)}</td>
            <td><span className="fa fa-trash"></span></td>
          </tr>
        )}
        <tr>
          <td>Total</td>
          <td>{cart.length} cartas</td>
          <td>${parseFloat(cart_total).toFixed(2)}</td>
          <td><span onClick={deleteAllItems} className="fa fa-trash"></span></td>
        </tr>
        </tbody>
      </table>
      <div className='send-order'>
        <span className="send-order-span" onClick={sendOrder}>Terminar compra</span>
      </div>
    </div>
  )
}

export default CartTable;