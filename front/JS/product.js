const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');
const { URLSearchParams } = require('url');
const { title } = require('process');

router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/order', productCtrl.orderProducts);

module.exports = router;

const articleItem = () =>

    fetch(url)
    .then(function(res) {

        return res.json()

    })

    for(a in response.colors) {

        console.log(a);
        console.log(resp.colors[a]);

        colors.innerHTML += `<option value="${a}">${a}</option>`

    }

    const addToCart = document.getElementById('addToCart')

    addToCart.addEventListener ('click', function (){

        const colors = document.getElementById('colors') .value;
        const quantity = document.getElementById('quantity') .value;
        const localstorage = JSON.parse(localStorage.cart || "{}")

        console.log(colors)
        console.log(quantity)

        if(colors == "" || quantity < 0 || quantity>100){

            alert('quantity')

        }

        else {

            if (localstorage [theid + " " + colors])
            {alert ('alerte condition')}
            else{

                localstorage[theid + " " + colors] = quantity;
                localstorage.cart = JSON.stringify(localstorage)
                alert('alerte BIS')

            }

        }

        const panierString = JSON.stringify(panier);

    })

    let params = new URLSearchParams(document.location.search)
    let id = params.get("id");
    const url = `http://localhost:3000/api/products/${id}`
    fetch(url)

        .then(function (res){

            return res.json


        })

        .then((data=>{

            console.log(data);
            let img = docuement.createElement('img')

            img.src = data.imageUrl
            img.alert = data.altTxt

            document.querySelector('.item__img').append(img)
            title.innerHTML = data.name
            description.innerHTML = data.description
            price.innerHTML = data.price

            // colors.append()

            data.colors.forEacch(value)=>{

                let option = document.createElement('option')
                option.value = value.toLowerCase()
                option.innerHTML = value.toLowerCase()
                colors.append(option)

            }

        }))