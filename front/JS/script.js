
const url = "http://localhost:3000/api/products/"
const elementsContainer = document.getElementById("items")
console.log('Coucou')
const getArticles = () => {
  console.log('Coucou')
    fetch(url)
    .then(function (res) {

        return res.json()

    })

    .then(function (data){
      console.log(elementsContainer)
      console.log(data)
        for(product of data) {
          console.log(product)
          elementsContainer.innerHTML += `<a href="./product.html?id=42">
            <article>
              <img src="${product.imageUrl}" alt="Lorem ipsum dolor sit amet, Kanap name1">
              <h3 class="productName">Kanap name1</h3>
              <p class="productDescription">Dis enim malesuada risus sapien gravida nulla nisl arcu. Dis enim malesuada risus sapien gravida nulla nisl arcu.</p>
            </article>
          </a>`

        }

    })

}
getArticles()