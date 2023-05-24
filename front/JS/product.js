const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

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

