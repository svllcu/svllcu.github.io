let params = getQueryParams();
let productId = params['id'];
console.log("scriptPAGINAsingolaPRODOTTO");
function getQueryParams() {
    let params = {};
    window.location.search.substr(1).split('&').forEach(function (item) {
        let pair = item.split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    });
    return params;
};
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
// se ti devi complicare la vita chiamami
fetch('products.json')
    .then(response => response.json())
    .then(products => {
        let product = products.find(p => p.id == productId); 
            let productDetailContainer = document.getElementById('dettagli-prod');
            productDetailContainer.innerHTML = `
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <p>Prezzo:€ ${product.price}</p>
                <img src="${product.image}" alt="${product.name}">
            `;
    })
;
let nPrProd = id = +1;
function proxProd() {
    let patateNext = document.querySelectorAll('coso');
    patateNext.innerHTML = `
    <a href="prodotti.html?id=${nPrProd}">Prossimo Prodotto</a>
    `;
}