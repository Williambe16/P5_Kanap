let params = new URLSearchParams(document.location.search);
let id = params.get("id");
const url = `http://localhost:3000/api/products/${id}`;
fetch(url)
  .then(function(res) {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let img = document.createElement('img');
    img.src = data.imageUrl;
    img.alt = data.altTxt;
    document.querySelector('.item__img').append(img);
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let price = document.querySelector('#price');

    title.innerHTML = data.name;
    description.innerHTML = data.description;
    price.innerHTML = data.price;

    let colors = document.querySelector('#colors');
    let addToCart = document.querySelector('#addToCart');
    let quantity = document.querySelector('#quantity');
    let products = JSON.parse(localStorage.getItem('products')) || {};

    data.colors.forEach((value) => {
      let option = document.createElement('option');
      option.value = value.toLowerCase();
      option.innerHTML = value.toLowerCase();
      colors.append(option);
    });

    addToCart.addEventListener('click', (e) => {
      let hasColor = colors.value !== "";
      let hasQty = quantity.value > 0 && quantity.value < 100;

      if (hasColor && hasQty) {
        console.log(id + colors.value);
        console.log({ id, qty: quantity.value, color: colors.value });

        if (products[id + colors.value]) {
          products[id + colors.value].qty = quantity.value;
        } else {
          products[id + colors.value] = { id, qty: quantity.value, color: colors.value };
        }

        localStorage.setItem('products', JSON.stringify(products));

        let goToCart = confirm(`Votre produit a bien été enregistré dans le panier:\n${title.innerHTML} - pour une quantité de ${quantity.value}`);

        if (goToCart) location.href = "cart.html";
      } else {
        alert("Veuillez entrer une couleur et une quantité pour l'ajouter au panier");
      }
    });
  });