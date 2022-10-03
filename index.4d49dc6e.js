const cartElement = document.querySelector(".cart-list");
function addItemInCart(event) {
    if (event.target.hasAttribute("data-cart")) {
        const product = event.target.closest(".main__item");
        const dataProduct = {
            name: product.querySelector(".product-info__name").innerText,
            price: product.querySelector(".product-info__new-price").innerText
        };
        const templateHTML = `<div class="cart-item">
    <span class="cart-item__name">${dataProduct.name}</span>
    <span class="cart-item__price">${dataProduct.price}</span>
    </div>`;
        cartElement.insertAdjacentHTML("beforeend", templateHTML);
    }
}
document.addEventListener("click", addItemInCart);

//# sourceMappingURL=index.4d49dc6e.js.map
