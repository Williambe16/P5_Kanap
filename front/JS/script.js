const url = "http://localhost:3000/api/products/";
const elementsContainer = document.getElementById("items");
console.log('Coucou');

const getArticles = () => {
  console.log('Coucou');
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(elementsContainer);
      console.log(data);
      for (const product of data) {
        console.log(product);
        const article = document.createElement("article");
        const link = document.createElement("a");
        const img = document.createElement("img");
        const h3 = document.createElement("h3");
        const p = document.createElement("p");

        img.src = product.imageUrl;
        img.alt = product.name;
        h3.textContent = product.name;
        p.textContent = product.description;

        link.href = `./product.html?id=${product.id}`;
        link.appendChild(article);
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(p);
        elementsContainer.appendChild(link);
      }
    })
    .catch(function (error) {
      console.log(error);
    });
};

getArticles();
