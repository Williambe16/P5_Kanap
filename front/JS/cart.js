const cart__items = document.getElementById("cart__items"); // Récupération de l'élément cart__items
let totalOrderedItems = 0; // Variable pour stocker le nombre exact d'articles commandés
let totalPrice = 0; // Variable pour stocker le prix total
let pageColor = ''; // Variable pour stocker la couleur de la page

cartItems.forEach((item) => {
  const articleElement = document.createElement("article");
  articleElement.classList.add("cart__item");
  articleElement.setAttribute("data-id", item._id);
  articleElement.setAttribute("data-color", item.color);

  const cartItemImage = document.createElement("div");
  cartItemImage.classList.add("cart__item__img");
  const imgElement = document.createElement("img");
  imgElement.src = item.imageUrl;
  imgElement.alt = item.altTxt;
  cartItemImage.appendChild(imgElement);

  const cartItemContent = document.createElement("div");
  cartItemContent.classList.add("cart__item__content");

  const cartItemDescription = document.createElement("div");
  cartItemDescription.classList.add("cart__item__content__description");
  const h2Element = document.createElement("h2");
  h2Element.textContent = item.name;
  const pColorElement = document.createElement("p");
  pColorElement.textContent = item.color;
  const pPriceElement = document.createElement("p");
  pPriceElement.textContent = item.price;

  cartItemDescription.appendChild(h2Element);
  cartItemDescription.appendChild(pColorElement);
  cartItemDescription.appendChild(pPriceElement);

  const cartItemSettings = document.createElement("div");
  cartItemSettings.classList.add("cart__item__content__settings");

  const cartItemQuantity = document.createElement("div");
  cartItemQuantity.classList.add("cart__item__content__settings__quantity");
  const pQuantityElement = document.createElement("p");
  pQuantityElement.textContent = "Qté : ";
  const inputQuantityElement = document.createElement("input");
  inputQuantityElement.type = "number";
  inputQuantityElement.classList.add("itemQuantity");
  inputQuantityElement.name = "itemQuantity";
  inputQuantityElement.min = "1";
  inputQuantityElement.max = "100";
  inputQuantityElement.value = item.qty;

  inputQuantityElement.addEventListener("input", (event) => {
    const newQuantity = parseInt(event.target.value);
    item.qty = newQuantity;
    updateTotalQty(cartItems); // Mettre à jour la quantité totale
    totalAmount(cartItems); // Mettre à jour le montant total
  });

  cartItemQuantity.appendChild(pQuantityElement);
  cartItemQuantity.appendChild(inputQuantityElement);

  const cartItemDelete = document.createElement("div");
  cartItemDelete.classList.add("cart__item__content__settings__delete");
  const pDeleteItemElement = document.createElement("p");
  pDeleteItemElement.classList.add("deleteItem");
  pDeleteItemElement.textContent = "Supprimer";

  cartItemDelete.appendChild(pDeleteItemElement);

  cartItemSettings.appendChild(cartItemQuantity);
  cartItemSettings.appendChild(cartItemDelete);

  cartItemContent.appendChild(cartItemDescription);
  cartItemContent.appendChild(cartItemSettings);

  articleElement.appendChild(cartItemImage);
  articleElement.appendChild(cartItemContent);

  cart__items.appendChild(articleElement);

  totalOrderedItems += item.qty; // Ajouter la quantité de l'article actuel au nombre total d'articles commandés
  totalPrice += item.price * item.qty; // Calculer le prix total
});

const cartItemCount = document.getElementById("cartItemCount"); // Récupération de l'élément où afficher le nombre d'articles
if (cartItemCount) {
  cartItemCount.textContent = totalOrderedItems.toString(); // Afficher le nombre exact d'articles
}

const totalPriceElement = document.getElementById("totalPrice"); // Récupération de l'élément où afficher le prix total
if (totalPriceElement) {
  totalPriceElement.textContent = totalPrice.toFixed(2); // Afficher le prix total avec deux décimales
}

const pageColorElement = document.getElementById("pageColor"); // Récupération de l'élément où afficher la couleur de la page
if (pageColorElement) {
  pageColor = document.body.style.backgroundColor; // Récupérer la couleur de fond de la page
  pageColorElement.textContent = pageColor; // Afficher la couleur de la page
}

console.log("Nombre exact d'articles commandés : " + totalOrderedItems);
console.log("Prix total : " + totalPrice.toFixed(2));
console.log("Couleur de la page : " + pageColor);
