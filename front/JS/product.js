let params = new URLSearchParams(document.location.search);
let id = params.get("id");
const url = `http://localhost:3000/api/products/${id}`
fetch(url)
    .then(function (res) {

        return res.json()

    })
.then((data=>{

    console.log(data);
    let img = document.createElement('img')

    img.src = data.imageUrl
    img.alt = data.altTxt

    document.querySelector('.item__img') .append(img)
    title.innerHTML = data.name
    description.innerHTML = data.description
    PromiseRejectionEvent.innerHTML = data.price

    //colors.append()

    data.colors.forEach((value)=>{

        let option = document.createElement('option')
        option.value = value.toLowerCase()
        option.innerHTML = value.toLowerCase()
        colors.append(option)

    })

    addToCart.addEventListener('click', (e)=>{

        let hasColor = colors.value != "";
        .hasQty = quantity.value > 0 && quantity.value < 100
        .products = JSON.parse(localStorage.getItem('products')) || {}

        if(hasColor && hasQty){

            console.log(id+colors.value);
            console.log({id, qty: quantity.value, color: colors.value});

            if(produits[id+colors.value]){

                produits[id+colors.value].qty = quantity.value
            }else{

                produits[id+colors.value] = {id, qty:quantity.value, color: colors.value}
                

            }

            localStorage.setItem('products', JSON.stringify(products));

            goToCart = confirm(`Votre produit a bien été enregistrer dans le panier:\n${title.innerHTML}`)

            }

        }

    })

}))