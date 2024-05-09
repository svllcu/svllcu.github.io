let listProductHTML = document.querySelector('.listProduct');
let listCartHTML = document.querySelector('.listCart');
let iconCart = document.querySelector('.icon-cart');
let iconCartSpan = document.querySelector('.icon-cart span');
let body = document.querySelector('body');
let closeCart = document.querySelector('.close');
let products = [];
let cart = [];
//qua definisco le costatnti che mi serovno per collegre lHTML con gli script


//la domanda resta la stassa:chi me lo ha fatto fare, non potevo fare quaslcosa di semplice, passero a fare i monologhi
//diario di bordo perche piuttosto di continuare a scrivere JS rinuncio
//questo lo ho iniztato non mi ricordo quanti giorni fa dopo lo ho abbandonato per evitare un ricovero
//oggi so che giorno e, siamo al 7maggio poco tempo e tanti impegni ma soprattuto poca voglia e tante pregjiere
//il quesito di oggi è: perche js è cosi cattivo, mi fa quasi piangere
//giorno tre apparente, non so per quale strano motivo ma sono spariti i gentilissimi prodotti.baci

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart')
    console.log('apritiSesamo')
})
closeCart.addEventListener('click',() =>{
    body.classList.toggle('showCart')
    console.log('chiuditiSedano')
})

//https://developer.mozilla.org/en-US/docs/Web/API/fetch
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON
//https://developer.mozilla.org/en-US/docs/Web/API/Request/json




const addDataToHTML = () => {
        if(products.length > 0)
        {
            products.forEach(product => {
                let newProduct = document.createElement('div');
                newProduct.dataset.id = product.id;
                newProduct.classList.add('item');
                newProduct.innerHTML = 
                `<img src="${product.image}" alt="">
                <h2>${product.name}</h2>
                <div class="price">€${product.price}</div>
                <button class="addCart">
                    Aggiungi al Carrello
                </button>`;
                listProductHTML.appendChild(newProduct);
            });
        }
    }


listProductHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('addCart')){
        let product_id = positionClick.parentElement.dataset.id;
        console.log('bottomneCliccato');
        console.log(product_id);
        addToCart(product_id);
    }
})

const addToCart = (product_id) => {
    let positionThisProductInCart = cart.findIndex((value) => value.product_id == product_id);
    if(cart.length <= 0){
        cart = [{
            product_id: product_id,
            quantity: 1
        }];
    }else if(positionThisProductInCart < 0){
        cart.push({
            product_id: product_id,
            quantity: 1
        });
    }else{
        cart[positionThisProductInCart].quantity = cart[positionThisProductInCart].quantity + 1;
    }
    addCartToHTML();
    addCartToMemory();
    console.log(cart);
}

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

// AO SISTEMA
const addCartToHTML = () => {
    listCartHTML.innerHTML = '';
    let totalQuantity = 0;
    if(cart.length > 0){
        cart.forEach(item => {
            totalQuantity = totalQuantity +  item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.dataset.id = item.product_id;
            let positionProduct = products.findIndex((value) => value.id == item.product_id);
            let info = products[positionProduct];
            listCartHTML.appendChild(newItem);
            newItem.innerHTML = `
            <div class="image">
                    <img src="${info.image}">
                </div>
                <div class="name">
                ${info.name}
                </div>
                <div class="totalPrice">€${info.price * item.quantity}</div>
                <div class="quantity">
                    <span class="minus"><</span>
                    <span>${item.quantity}</span>
                    <span class="plus">></span>
                </div>
            `;
        })
    }
    iconCartSpan.innerText = totalQuantity;
}

const addCartToMemory = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
}

listCartHTML.addEventListener('click', (event) => {
    let positionClick = event.target;
    if(positionClick.classList.contains('minus') || positionClick.classList.contains('plus')){
        let product_id = positionClick.parentElement.parentElement.dataset.id;
        console.log(product_id);
        let type = 'minus';
        if(positionClick.classList.contains('plus')){
            type = 'plus';
        }
        changeQuantityCart(product_id, type);
    }
})
// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Il || significherebbe oppure
const changeQuantityCart = (product_id, type) => {
    let positionItemInCart = cart.findIndex((value) => value.product_id == product_id);
    if(positionItemInCart >= 0){
        let info = cart[positionItemInCart];
        switch (type) {
            case 'plus':
                cart[positionItemInCart].quantity = cart[positionItemInCart].quantity + 1;
                break;
            default:
                let changeQuantity = cart[positionItemInCart].quantity - 1;
                if (changeQuantity > 0) {
                    cart[positionItemInCart].quantity = changeQuantity;
                }else{
                    cart.splice(positionItemInCart, 1);
                }
                break;
        }
    }
    addCartToHTML();
    addCartToMemory();
}
// splice per togliere

const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        products = data;
        addDataToHTML();
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    })
}
initApp();
