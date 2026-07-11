const products = [
    {
        id: 1,
        brand: "Skintific",
        name: "MSH Niacinamide Brightening Moisture Gel",
        price: 139000,
        category: "Skincare",
        stock: 20,
        rating: 4.9,
        image: "images/moisturizer.jpeg",
        description: "A lightweight moisturizing gel enriched with Niacinamide to help brighten skin, maintain the skin barrier, and provide long-lasting hydration. Its non-sticky formula absorbs quickly, leaving your skin feeling soft, fresh, and healthy every day.",
        bestSeller: true
    },

    {
        id: 2,
        brand: "Somethinc",
        name: "Hooman Breathable Cushion Cover",
        price: 156000,
        category: "Makeup",
        stock: 44,
        rating: 4.8,
        image: "images/cushion.jpeg",
        description: "A breathable cushion foundation with medium to full coverage that effectively conceals imperfections while delivering a natural, flawless finish. Comfortable to wear all day without feeling heavy.",
        bestSeller: true
    },

    {
        id: 3,
        brand: "Rhode",
        name: "Peptide Lip Tint",
        price: 550000,
        category: "Makeup",
        stock: 5,
        rating: 4.9,
        image: "images/lip tint.jpeg",
        description: "A nourishing lip tint infused with peptides to deeply hydrate, smooth, and soften the lips while adding a natural glossy color. Perfect for achieving healthy-looking lips with everyday comfort.",
        bestSeller: true
    },

    {
        id: 4,
        brand: "Maybelline",
        name: "Lash Sensational Sky High Mascara",
        price: 125000,
        category: "Makeup",
        stock: 17,
        rating: 4.8,
        image: "images/mascara.jpeg",
        description: "A lengthening mascara that lifts and volumizes every lash from root to tip. Its flexible brush ensures even application without clumping, creating dramatic yet lightweight lashes."
    },

    {
        id: 5,
        brand: "Skintific",
        name: "5X Ceramide Low pH Cleanser",
        price: 99000,
        category: "Skincare",
        stock: 38,
        rating: 4.8,
        image: "images/cleanser.jpeg",
        description: "A gentle facial cleanser formulated with 5X Ceramides to cleanse impurities while protecting the skin's natural moisture barrier. Suitable for daily use on all skin types, including sensitive skin."
    },

    {
        id: 6,
        brand: "Skintific",
        name: "10% Niacinamide Brightening Serum",
        price: 129000,
        category: "Skincare",
        stock: 15,
        rating: 4.9,
        image: "images/serum.jpeg",
        description: "A brightening serum containing 10% Niacinamide to reduce the appearance of dark spots, improve uneven skin tone, and enhance the skin's natural radiance with regular use."
    },

    {
        id: 7,
        brand: "Somethinc",
        name: "Holyshield Sunscreen SPF50+ PA++++",
        price: 119000,
        category: "Skincare",
        stock: 8,
        rating: 4.8,
        image: "images/sunscreen.jpeg",
        description: "A lightweight sunscreen offering broad-spectrum protection against UVA and UVB rays. Its non-greasy formula helps protect the skin from sun damage while remaining comfortable under makeup."
    },

    {
        id: 8,
        brand: "Somethinc",
        name: "Checkmatte Transferproof Lipstick",
        price: 89000,
        category: "Makeup",
        stock: 30,
        rating: 4.7,
        image: "images/lipstick.jpeg",
        description: "A transfer-proof matte lipstick with intense pigmentation and a smooth, comfortable finish. Designed to stay vibrant for hours without drying out the lips."
    },

    {
        id: 9,
        brand: "KIKO Milano",
        name: "3D Hydra Lip Gloss",
        price: 190000,
        category: "Makeup",
        stock: 10,
        rating: 4.9,
        image: "images/lip matte.jpeg",
        description: "A hydrating lip gloss that delivers a brilliant shine while keeping lips soft and moisturized. Its lightweight texture enhances the lips with a plumping effect and comfortable wear."
    },

    {
        id: 10,
        brand: "Focallure",
        name: "8-Color Eyeshadow Palette",
        price: 59000,
        category: "Makeup",
        stock: 40,
        rating: 4.7,
        image: "images/eye shadow.jpeg",
        description: "A versatile eyeshadow palette featuring eight highly pigmented shades with matte and shimmer finishes. Perfect for creating both natural daytime looks and glamorous evening makeup."
    }
];

// Ambil data lama dari Local Storage (kalau ada)
const storedProducts = JSON.parse(localStorage.getItem("products")) || [];

// Gabungkan: pakai data terbaru dari file ini,
// tapi pertahankan stock yang sudah berubah (misal habis checkout)
const mergedProducts = products.map(product => {

    const stored = storedProducts.find(item => item.id === product.id);

    if (stored) {
        return { ...product, stock: stored.stock };
    }

    return product;

});

// Produk yang ditambahin lewat Admin Panel (id-nya gak ada di daftar bawaan ini)
// tetap dipertahankan, jangan sampai ke-drop pas data.js di-reload
const adminAddedProducts = storedProducts.filter(stored =>
    !products.some(product => product.id === stored.id)
);

const finalProducts = [...mergedProducts, ...adminAddedProducts];

// Simpan hasil gabungan ke Local Storage
localStorage.setItem("products", JSON.stringify(finalProducts));

// Gunakan data gabungan ini di semua halaman
products.length = 0;
products.push(...finalProducts);

// Format harga
function formatPrice(price){
    return "Rp" + price.toLocaleString("id-ID");
}