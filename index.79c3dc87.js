const cartElement = document.querySelector(".cart-list");
const btnClearCart = document.querySelector(".btn-cart-clear");
const totalPriceCartElement = document.querySelector(".cart__total-price");
const data = [];
let cartCounter = +totalPriceCartElement.textContent;
function addItemInCart(event) {
    if (event.target.hasAttribute("data-cart")) {
        const product = event.target.closest(".main__item");
        const dataProduct = {
            name: product.querySelector(".product-info__name").innerText,
            price: product.querySelector(".new-price").innerText
        };
        data.push(dataProduct);
        const templateHTML = `<div class="cart-item">
    <span class="cart-item__name">${dataProduct.name}</span>
    <span class="cart-item__price">${dataProduct.price}p</span>
    </div>`;
        cartElement.insertAdjacentHTML("beforeend", templateHTML);
        cartCounter += +dataProduct.price;
        totalPriceCartElement.innerHTML = `${cartCounter}р`;
        cartDefaultStatus();
    }
}
function clearCart() {
    data.splice(0, data.length);
    cartElement.innerHTML = `<div class="cart-list__empty">Корзина пуста</div>`;
    totalPriceCartElement.innerHTML = "0";
}
btnClearCart.addEventListener("click", clearCart);
document.addEventListener("click", addItemInCart);

//# sourceMappingURL=index.79c3dc87.js.map
