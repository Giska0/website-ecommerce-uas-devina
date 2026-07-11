const productTable = document.getElementById("productTable");

const editForm = document.getElementById("editForm");
const editName = document.getElementById("editName");
const editPrice = document.getElementById("editPrice");
const editStock = document.getElementById("editStock");
const saveBtn = document.getElementById("saveBtn");
const closeBtn = document.querySelector(".close-btn");
const deleteModal = document.getElementById("deleteModal");
const cancelDelete = document.getElementById("cancelDelete");
const confirmDelete = document.getElementById("confirmDelete");
const addModal = document.getElementById("addModal");
const addProductBtn = document.getElementById("addProductBtn");
const closeAdd = document.querySelector(".close-add");

const addBtn = document.getElementById("addBtn");

const newBrand = document.getElementById("newBrand");
const newName = document.getElementById("newName");
const newCategory = document.getElementById("newCategory");
const newPrice = document.getElementById("newPrice");
const newStock = document.getElementById("newStock");
const newImage = document.getElementById("newImage");
const newDescription = document.getElementById("newDescription");

let deleteId = null;

let selectedId = null;

displayProducts();

function displayProducts() {

    productTable.innerHTML = "";

    products.forEach((product, index) => {

        productTable.innerHTML += `

        <tr>

            <td>${index + 1}</td>

            <td>${product.name}</td>

            <td>${product.category}</td>

            <td>${formatPrice(product.price)}</td>

            <td>${product.stock}</td>

            <td>

                <button class="edit-btn"
                data-id="${product.id}">
                    Edit
                </button>

                <button class="delete-btn"
                data-id="${product.id}">
                    Delete
                </button>

            </td>

        </tr>

        `;

    });

    document.querySelectorAll(".edit-btn").forEach(button=>{

    button.addEventListener("click",function(){

        selectedId = Number(this.dataset.id);

        const product = products.find(item=>item.id===selectedId);

        editForm.style.display="flex";

        editName.value = product.name;
        editPrice.value = product.price;
        editStock.value = product.stock;

    });

});

document.querySelectorAll(".delete-btn").forEach(button=>{

    button.addEventListener("click",function(){

        deleteId = Number(this.dataset.id);

        deleteModal.style.display = "flex";

    });

});

}

saveBtn.addEventListener("click",function(){

    const product = products.find(item=>item.id===selectedId);

    product.name = editName.value;
    product.price = Number(editPrice.value);
    product.stock = Number(editStock.value);

   localStorage.setItem("products", JSON.stringify(products));

    displayProducts();

    editForm.style.display = "none";

    alert("✅ Product updated successfully!");

});

addProductBtn.addEventListener("click", function () {
    addModal.style.display = "flex";
});

closeAdd.addEventListener("click", function () {
    addModal.style.display = "none";
});

addBtn.addEventListener("click", function () {

    const nextId = products.length > 0
        ? Math.max(...products.map(item => item.id)) + 1
        : 1;

    const product = {
        id: nextId,
        brand: newBrand.value,
        name: newName.value,
        category: newCategory.value,
        price: Number(newPrice.value),
        stock: Number(newStock.value),
        rating: 5,
        image: newImage.value,
        description: newDescription.value
    };

    products.push(product);

    localStorage.setItem("products", JSON.stringify(products));

    displayProducts();

    addModal.style.display = "none";

    newBrand.value = "";
    newName.value = "";
    newCategory.value = "Skincare";
    newPrice.value = "";
    newStock.value = "";
    newImage.value = "";
    newDescription.value = "";

    alert("✅ Product added successfully!");

});

closeBtn.addEventListener("click", function(){

    editForm.style.display = "none";

});

window.addEventListener("click", function(e){

    if(e.target === editForm){

        editForm.style.display = "none";

    }

});

cancelDelete.addEventListener("click",function(){

    deleteModal.style.display="none";

});

confirmDelete.addEventListener("click",function(){

    const index = products.findIndex(item=>item.id===deleteId);

    if(index !== -1){

        products.splice(index,1);

        localStorage.setItem(
            "products",
            JSON.stringify(products)
        );

    }

    deleteModal.style.display="none";

    displayProducts();

    alert("🗑 Product deleted successfully!");

});

window.addEventListener("click",function(e){

    if(e.target===deleteModal){

        deleteModal.style.display="none";

    }

});