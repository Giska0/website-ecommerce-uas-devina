const cartItems = document.getElementById("cartItems");
const totalPrice = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function formatPrice(price){
    return "Rp" + price.toLocaleString("id-ID");
}

function displayCart(){

    cartItems.innerHTML = "";

    let total = 0;

    const summaryBar = document.querySelector(".summary-bar");

    if(cart.length === 0){

        cartItems.innerHTML = `
            <div class="cart-empty">
                <div class="icon">🛒</div>
                <h3>Your cart is empty</h3>
                <p>Let's find your favorite beauty products!</p>
                <a href="products.html">Shop Now</a>
            </div>
        `;

        totalPrice.textContent = "Rp0";

        if(summaryBar){
            summaryBar.style.display = "none";
        }

        return;
    }

    if(summaryBar){
        summaryBar.style.display = "flex";
    }

    cart.forEach(item=>{

        const product = products.find(p=>p.id===item.id);

        if(!product){
            return;
        }

        const subtotal = product.price * item.quantity;

        total += subtotal;

        cartItems.innerHTML += `

        <div class="cart-card">

            <img src="${product.image}" alt="${product.name}">

            <div class="cart-info">

                <h3 title="${product.name}">${product.name}</h3>

                <p class="brand">${product.brand}</p>

                <p class="unit-price">${formatPrice(product.price)}</p>

            </div>

            <div class="cart-actions">

                <div class="quantity">

                    <button class="minus" data-id="${product.id}">−</button>

                    <span>${item.quantity}</span>

                    <button class="plus" data-id="${product.id}">+</button>

                </div>

                <p class="subtotal">${formatPrice(subtotal)}</p>

                <button class="remove" data-id="${product.id}">
                    Remove
                </button>

            </div>

        </div>

        `;

    });

    totalPrice.textContent = formatPrice(total);

}

displayCart();

document.addEventListener("click", function (e) {

    const id = Number(e.target.dataset.id);

    // PLUS
    if (e.target.classList.contains("plus")) {

        const item = cart.find(item => item.id === id);

        item.quantity++;

    }

    // MINUS
    else if (e.target.classList.contains("minus")) {

        const item = cart.find(item => item.id === id);

        if(item.quantity > 1){

            item.quantity--;

        }

    }

    // REMOVE
    else if (e.target.classList.contains("remove")) {

        cart = cart.filter(item => item.id !== id);

    }

    else{

        return;

    }

    localStorage.setItem("cart", JSON.stringify(cart));

    displayCart();

});

document.getElementById("checkoutBtn").addEventListener("click", function () {
    window.location.href = "checkout.html";
});