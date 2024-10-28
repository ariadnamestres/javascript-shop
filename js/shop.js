
const products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// Exercise 1 

let cartList = [ ]

function buy(id) {
  for ( let i = 0; i < products.length; i ++) {
   if (products[i].id === id ) {
    const existingProduct= cartList.find(item => item.id === id )

    if (existingProduct) {
      existingProduct.quantity++
      existingProduct.totalprice = existingProduct.price * existingProduct.quantity
    }
   else {
     cartList.push({ id: products[i].id , name: products[i].name, price: products[i].price, quantity: 1, totalprice: products[i].price}) 
   }
   console.log(cartList)
    applyPromotionsCart()

   printCart()
   break
  } 
} 
}

// Exercise 2
function cleanCart() {
  cartList.length = 0
  printCart()
}

// Exercise 3

function totalWithDiscount() {
  let totalWithDiscount = 0;
  for (let i = 0; i < cartList.length; i++) {
    totalWithDiscount += cartList[i].subtotalWithDiscount
  }
  return totalWithDiscount
}
// function totalWithDiscount() {
//   let totalWithDiscount = 0
//   cartList.forEach( product => {
//     totalWithDiscount += product.subtotalWithDiscount
//   }) 
//   return totalWithDiscount
// }


// functiontotalWithDiscount() {
//   return cartList.reduce((total, product) => total + product.subtotalWithDiscount, 0)
// }

//exercici 4 
function  applyPromotionsCart() {
    cartList.forEach( cardlistitem => {
      const product = products.find( p => p.id === cardlistitem.id)
      if (product.offer && cardlistitem.quantity >= product.offer.number) {
      const discount= cardlistitem.totalprice * product.offer.percent / 100
      cardlistitem.subtotalWithDiscount=  (cardlistitem.totalprice - discount)
      }  else {
       cardlistitem.subtotalWithDiscount =  cardlistitem.totalprice
      }
    })    
}


// Exercise 5
function printCart() {
    const cartElement = document.getElementById('cart_list')
    cartElement.innerHTML = ''
     cartList.forEach(product => {
      const row = document.createElement('tr')

      //  print product.name 
        const productNameCell = document.createElement('td')
        productNameCell.textContent = product.name
        row.appendChild(productNameCell)

    // print product.price
       const productPriceCell = document.createElement('td')
       productPriceCell.textContent = `${product.price}`
       row.appendChild(productPriceCell)

      // print product.quantity
        const productQuantityCell = document.createElement('td')
        productQuantityCell.textContent = product.quantity
        row.appendChild(productQuantityCell)

     // print button menys quantity

       const restButton = document.createElement('button')
       restButton.textContent = '-'
       restButton.classList.add( 'btn', 'btn-danger', 'btn-sm')
       productQuantityCell.appendChild(restButton)

        restButton.addEventListener('click', () => {
          removeFromCart(product.id) })

   
        //subtotal

        const productSubtotalCell = document.createElement('td');
        productSubtotalCell.textContent = product.totalprice
        row.appendChild(productSubtotalCell)

        //subtotal con descuento
        
        const finalPriceCell= document.createElement('td')
        finalPriceCell.textContent = product.subtotalWithDiscount
        row.appendChild(finalPriceCell)


        // enchancha las celdas a las filas

        cartElement.appendChild(row);

    
    })
 
    const totalElement = document.getElementById('total_price')
    totalElement.innerHTML = ''
    totalElement.textContent = `${totalWithDiscount().toFixed(2)}`
}

// ** Nivell II **

// Exercise 7
 function removeFromCart(id) {
  const product = cartList.find(p => p.id === id)
  product.quantity--

  if (product.quantity === 0) {
    cartList = cartList.filter(p => p.id !== id)
    } else {
      product.totalprice = product.price * product.quantity
    }
  applyPromotionsCart()
  printCart()

 }

//otra manera

// function removeFromCart(id) {
//   const productIndex = cartList.findIndex(p => p.id === id);
//   if (productIndex !== -1) {
//       cartList[productIndex].quantity--;
//       if (cartList[productIndex].quantity === 0) {
//           cartList.splice(productIndex, 1)
//       } else {
//           cartList[productIndex].totalprice = cartList[productIndex].price * cartList[productIndex].quantity;
//       }
//       applyPromotionsCart();
//       printCart();
//   }
// }




function open_modal() {
    printCart();
}