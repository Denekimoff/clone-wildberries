const cartListElement = document.querySelector(".cart-list");
const productsListElement = document.querySelector(".main__cards");
async function getProducts() {
    const responce = await fetch("https://fakestoreapi.com/products");
    console.log(responce);
    const responce1 = await fetch("./js/products.json");
    const productsArray = await responce.json();
    console.log(productsArray);
    render(productsArray);
}
getProducts();
function render(array) {
    array.forEach(({ title , price , image  })=>{
        const name = title.split(" ").slice(0, 2).join(" ");
        const productHTML = `<li class="main__item">
    <div class="main__product">
      <div class="main__product-image">
      <div class="product-image__present">
        <img src="${image}" alt="mobile" />
        </div>
        <button class="product-image__modal" type="text">
        &#128269 Просмотр
        </button>
        <span class="product-image__sale">-10%</span>
        <button data-cart class="product-image__add-cart" type="button">
          +
        </button>
      </div>
      <div class="main__product-info">
        <p class="product-info__new-price product-info__item">
        <span class="new-price">${Math.trunc(price - price * 10 / 100)}</span>pуб
        </p>
        <p class="product-info__price product-info__item">
        <span class="price">${Math.trunc(price)}</span>pуб
        </p>
        <p class="product-info__name product-info__item">${name}</p>
      </div>
    </div>
  </li>`;
        productsListElement.insertAdjacentHTML("beforeend", productHTML);
    });
}

//# sourceMappingURL=index.84f4dd13.js.map
