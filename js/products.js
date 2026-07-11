const productsContainer = document.getElementById("productsContainer");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

function updateCartCount(){

    const totalItem = cart.reduce((total,item)=>{

        return total + item.quantity;

    },0);

    document.getElementById("cart-count").textContent = `(${totalItem})`;

}

function formatPrice(price) {
    return "Rp" + price.toLocaleString("id-ID");
}

function addToCart(id){

    const product = products.find(item=>item.id===id);

    const existing = cart.find(item=>item.id===id);

    if(existing){

        existing.quantity++;

    }

    else{

        cart.push({

            id:product.id,

            quantity:1

        });

    }

    localStorage.setItem("cart",JSON.stringify(cart));

    updateCartCount();

    alert("Produk berhasil ditambahkan ke Cart!💖");

}

function displayProducts(productList) {

    productsContainer.innerHTML = "";

    productList.forEach(product => {

        productsContainer.innerHTML += `
        
        <div class="product-card">

            <img src="${product.image}" alt="${product.name}">

            <p class="brand">${product.brand}</p>

            <h4>${product.name}</h4>

            <div class="rating">
                ⭐ ${product.rating}
            </div>

            <div class="price">
                ${formatPrice(product.price)}
            </div>

            <div class="stock">
                Stock : ${product.stock}
            </div>

            <div class="action">

                <button class="detail" data-id="${product.id}">
                    Detail
                </button>

                <button class="cart add-cart"data-id="${product.id}">

                    Add to Cart

                </button>

            </div>

        </div>

        `;
    });
    
    const addButtons = document.querySelectorAll(".add-cart");

    addButtons.forEach(button=>{

        button.addEventListener("click",function(){

            const id = Number(this.dataset.id);

            addToCart(id);

        });

    });

    const detailButtons = document.querySelectorAll(".detail");

    detailButtons.forEach(button=>{

        button.addEventListener("click",function(){

            const id = Number(this.dataset.id);

            openDetailModal(id);

        });

    });

}

// ==========================
// PRODUCT DETAIL MODAL
// ==========================

const detailModal = document.getElementById("detailModal");
const closeDetailModal = document.getElementById("closeDetailModal");
const detailAddToCart = document.getElementById("detailAddToCart");

function openDetailModal(id){

    const product = products.find(item=>item.id===id);

    if(!product){
        return;
    }

    document.getElementById("detailImage").src = product.image;
    document.getElementById("detailImage").alt = product.name;
    document.getElementById("detailBrand").textContent = product.brand;
    document.getElementById("detailName").textContent = product.name;
    document.getElementById("detailRating").textContent = `⭐ ${product.rating}`;
    document.getElementById("detailPrice").textContent = formatPrice(product.price);
    document.getElementById("detailStock").textContent = `Stock : ${product.stock}`;
    document.getElementById("detailDescription").textContent =
        product.description || "No description available for this product.";

    detailAddToCart.dataset.id = product.id;

    detailModal.classList.add("show");

}

closeDetailModal.addEventListener("click", function(){

    detailModal.classList.remove("show");

});

detailModal.addEventListener("click", function(e){

    if(e.target === detailModal){

        detailModal.classList.remove("show");

    }

});

detailAddToCart.addEventListener("click", function(){

    const id = Number(this.dataset.id);

    addToCart(id);

    detailModal.classList.remove("show");

});

let currentProducts = [...products];

displayProducts(currentProducts);

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const keyword = this.value.toLowerCase();

    const result = products.filter(product =>

        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword)

    );

    currentProducts = result;

    displayProducts(result);

});

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function () {

        filterButtons.forEach(btn =>

            btn.classList.remove("active")

        );

        this.classList.add("active");

        const category = this.dataset.category;

        if (category === "All") {

            currentProducts = [...products];

        }

        else {

            currentProducts = products.filter(product =>

                product.category === category

            );

        }

        displayProducts(currentProducts);

    });

});