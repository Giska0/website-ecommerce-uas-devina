function updateCartCount() {

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const totalItem = cart.reduce((total, item) => {

        return total + item.quantity;

    }, 0);

    const cartCount = document.getElementById("cart-count");

    if (cartCount) {
        cartCount.textContent = `(${totalItem})`;
    }

}

updateCartCount();

// ==========================
// BEST SELLER (dinamis dari data.js)
// ==========================

const bestSellerContainer = document.getElementById("bestSellerContainer");

if (bestSellerContainer && typeof products !== "undefined") {

    const bestSellers = products.filter(product => product.bestSeller);

    bestSellerContainer.innerHTML = bestSellers.map(product => `

        <div class="card">

            <span class="badge">
                BEST SELLER
            </span>

            <img src="${product.image}" alt="${product.name}">

            <h4>${product.brand} ${product.name}</h4>

            <div class="rating">
                ⭐⭐⭐⭐⭐ ${product.rating}
            </div>

            <h5>${formatPrice(product.price)}</h5>

        </div>

    `).join("");

}

const popup = document.getElementById("voucherPopup");

// Voucher popup cuma jalan di halaman yang punya elemen ini (Homepage)
if (popup) {

    const closeBtn = document.getElementById("closeVoucher");
    const copyBtn = document.getElementById("copyVoucher");

    if (!sessionStorage.getItem("voucherShown")) {

        popup.style.display = "flex";

    } else {

        popup.style.display = "none";

    }

    closeBtn.onclick = function () {

        popup.style.display = "none";

        sessionStorage.setItem("voucherShown", "true");

    };

    copyBtn.onclick = function () {

        navigator.clipboard.writeText("GYSEFIRST");

        copyBtn.innerText = "Copied!";

        localStorage.setItem("voucherCode", "GYSEFIRST");

        setTimeout(() => {

            copyBtn.innerText = "Copy";

        }, 1500);

    };

}