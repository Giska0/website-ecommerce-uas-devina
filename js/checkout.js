function formatPrice(price){
    return "Rp" + price.toLocaleString("id-ID");
}

const form = document.getElementById("checkoutForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Kurangi stok sesuai isi cart
    cart.forEach(cartItem => {

        const product = products.find(item => item.id === cartItem.id);

        if (product) {
            product.stock -= cartItem.quantity;

            // Biar stok tidak minus
            if (product.stock < 0) {
                product.stock = 0;
            }
        }

    });

    // Simpan stok terbaru
    localStorage.setItem("products", JSON.stringify(products));

    // Kosongkan cart
    localStorage.removeItem("cart");

    alert("🎉 Order berhasil dibuat!");

    window.location.href = "success.html";

});

const paymentMethod = document.getElementById("paymentMethod");
const paymentDetail = document.getElementById("paymentDetail");

const cart = JSON.parse(localStorage.getItem("cart")) || [];
let subtotal = 0;
cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if(product){
        subtotal += product.price * item.quantity;
    }
});
let shipping = 15000;
let adminFee = 0;

document.getElementById("subtotalPrice").textContent =
    formatPrice(subtotal);
document.getElementById("shippingPrice").textContent =
    formatPrice(shipping);
document.getElementById("adminPrice").textContent =
    formatPrice(adminFee);
document.getElementById("totalPrice").textContent =
    formatPrice(subtotal + shipping + adminFee);

paymentMethod.addEventListener("change", function () {

    // ==========================
    // QRIS
    // ==========================
    if (this.value === "qris") {

        paymentDetail.innerHTML = `
        <div class="payment-card">
            <h3>QRIS Payment</h3>

            <img src="images/qris.jpeg" class="qris-image">

            <div class="payment-info">
                <p><strong>Merchant :</strong> GYSE</p>
                <p><strong>Payment :</strong> QRIS</p>
            </div>

            <div class="payment-note">
                Scan this QR Code using your mobile banking or e-wallet application.
                <br><br>
                <strong>Please complete your payment within 15 minutes.</strong>
            </div>
        </div>
        `;

    }

    // ==========================
    // E-WALLET
    // ==========================
    else if (this.value === "ewallet") {

        paymentDetail.innerHTML = `
        <div class="payment-card">

            <h3>Select E-Wallet</h3>

            <select id="ewalletOption">
                <option value="">Choose E-Wallet</option>
                <option value="DANA">DANA</option>
                <option value="GoPay">GoPay</option>
                <option value="ShopeePay">ShopeePay</option>
                <option value="OVO">OVO</option>
            </select>

            <div id="ewalletInfo"></div>

        </div>
        `;

        document.getElementById("ewalletOption").addEventListener("change", function () {

            if (this.value !== "") {

                document.getElementById("ewalletInfo").innerHTML = `
                <div class="payment-info">

                    <p><strong>E-Wallet :</strong> ${this.value}</p>

                    <p><strong>Virtual Account :</strong></p>

                    <h3>8957202507158888</h3>

                    <button
                    type="button"
                    class="copy-btn"
                    data-copy="8957202507158888">
                    Copy
                    </button>

                    <p><strong>Account Name :</strong> GISKA</p>

                </div>
                `;

            }

        });

    }

    // ==========================
    // TRANSFER BANK
    // ==========================
    else if (this.value === "bank") {

        paymentDetail.innerHTML = `
        <div class="payment-card">

            <h3>Select Bank</h3>

            <select id="bankOption">

                <option value="">Choose Bank</option>
                <option value="BCA">Bank BCA</option>
                <option value="BRI">Bank BRI</option>
                <option value="BNI">Bank BNI</option>
                <option value="Mandiri">Bank Mandiri</option>

            </select>

            <div id="bankInfo"></div>

        </div>
        `;

        document.getElementById("bankOption").addEventListener("change", function () {

            let rekening = "";

            if (this.value === "BCA") {
                rekening = "1234567890";
            }

            else if (this.value === "BRI") {
                rekening = "2345678901";
            }

            else if (this.value === "BNI") {
                rekening = "3456789012";
            }

            else if (this.value === "Mandiri") {
                rekening = "4567890123";
            }

            if (this.value !== "") {

                document.getElementById("bankInfo").innerHTML = `
                <div class="payment-info">

                    <p><strong>Bank :</strong> ${this.value}</p>

                    <p><strong>Account Number :</strong></p>

                    <h3>${rekening}</h3>

                    <button
                    type="button"
                    class="copy-btn"
                    data-copy="${rekening}">
                    Copy
                    </button>
                    
                    <p><strong>Account Name :</strong> GISKA</p>

                </div>
                `;

            }

        });

    }

    // ==========================
    // COD
    // ==========================
    else if (this.value === "cod") {

        paymentDetail.innerHTML = `
        <div class="payment-card">

            <h3>Cash On Delivery</h3>

            <div class="payment-note">

                Pay directly to our courier when your order arrives.

                <br><br>

                Please prepare the exact amount to make the delivery process faster.

                <br><br>

                <strong>Thank you for shopping with GYSE.</strong>

            </div>

        </div>
        `;

    }

    // ==========================
    // DEFAULT
    // ==========================
    else {

        paymentDetail.innerHTML = "";

    }

});

document.addEventListener("click",function(e){

    if(e.target.classList.contains("copy-btn")){

        navigator.clipboard.writeText(
            e.target.dataset.copy
        );

        e.target.innerText="Copied!";

        setTimeout(()=>{
            e.target.innerText="Copy";
        },1500);

        // Admin fee cuma berlaku untuk Transfer Bank & E-Wallet
        if(paymentMethod.value==="bank" || paymentMethod.value==="ewallet"){
            adminFee = 2500;
        }
        else{
            adminFee = 0;
        }

        document.getElementById("adminPrice").textContent =
            formatPrice(adminFee);
        document.getElementById("totalPrice").textContent =
            formatPrice(subtotal + shipping + adminFee);

    }

});

const applyVoucher = document.getElementById("applyVoucher");
applyVoucher.addEventListener("click", function(){
    const code =
    document.getElementById("voucherCode")
    .value
    .trim()
    .toUpperCase();
    const message =
    document.getElementById("voucherMessage");
    if(code==="GYSEFIRST"){
        shipping = 0;
        document.getElementById("shippingPrice")
        .textContent="FREE";
        document.getElementById("totalPrice")
        .textContent=
        formatPrice(subtotal + adminFee);
        message.innerHTML="✅ Voucher Applied!";
        message.style.color="green";
    }
    else{
        message.innerHTML="❌ Invalid Voucher";
        message.style.color="red";
    }
});