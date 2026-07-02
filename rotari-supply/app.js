// Application Logic - Rotari-Supply

// Mock Products Database
const products = [
    // Rodamientos SKF (6201 - 6212)
    {
        id: 1,
        title: "Rodamiento Rígido de Bolas SKF 6201-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento rígido de bolas de precisión SKF con sellos de goma en ambos lados. Ideal para alternadores y motores pequeños.",
        specs: "Medidas: 12mm d / 32mm D / 10mm B"
    },
    {
        id: 2,
        title: "Rodamiento Rígido de Bolas SKF 6202-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento radial de precisión SKF lubricado de por vida con sellos herméticos. Para herramientas eléctricas y maquinaria.",
        specs: "Medidas: 15mm d / 35mm D / 11mm B"
    },
    {
        id: 3,
        title: "Rodamiento Rígido de Bolas SKF 6203-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento de bolas SKF de alta velocidad. Excelente desempeño con mínimo coeficiente de fricción.",
        specs: "Medidas: 17mm d / 40mm D / 12mm B"
    },
    {
        id: 4,
        title: "Rodamiento Rígido de Bolas SKF 6204-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento rígido SKF de amplio uso industrial. Doble sello de contacto para protección contra contaminantes.",
        specs: "Medidas: 20mm d / 47mm D / 14mm B"
    },
    {
        id: 5,
        title: "Rodamiento Rígido de Bolas SKF 6205-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento SKF para motores eléctricos de tamaño medio, bombas y maquinaria agrícola.",
        specs: "Medidas: 25mm d / 52mm D / 15mm B"
    },
    {
        id: 6,
        title: "Rodamiento Rígido de Bolas SKF 6206-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento de bolas de precisión SKF para aplicaciones industriales de alta velocidad y torque medio.",
        specs: "Medidas: 30mm d / 62mm D / 16mm B"
    },
    {
        id: 7,
        title: "Rodamiento Rígido de Bolas SKF 6207-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento radial de ranura profunda SKF. Soporta cargas radiales y cargas axiales ligeras.",
        specs: "Medidas: 35mm d / 72mm D / 17mm B"
    },
    {
        id: 8,
        title: "Rodamiento Rígido de Bolas SKF 6208-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento SKF estándar para poleas tensoras, transmisiones y maquinaria pesada de taller.",
        specs: "Medidas: 40mm d / 80mm D / 18mm B"
    },
    {
        id: 9,
        title: "Rodamiento Rígido de Bolas SKF 6209-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento de bolas SKF de gran tamaño. Diseñado para resistir altas velocidades rotacionales.",
        specs: "Medidas: 45mm d / 85mm D / 19mm B"
    },
    {
        id: 10,
        title: "Rodamiento Rígido de Bolas SKF 6210-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento rígido de precisión SKF. Excelente opción para reductores de velocidad industriales.",
        specs: "Medidas: 50mm d / 90mm D / 20mm B"
    },
    {
        id: 11,
        title: "Rodamiento Rígido de Bolas SKF 6211-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento SKF robusto para altas demandas de torque y cargas radiales en ejes principales.",
        specs: "Medidas: 55mm d / 100mm D / 21mm B"
    },
    {
        id: 12,
        title: "Rodamiento Rígido de Bolas SKF 6212-2RS",
        brand: "SKF",
        category: "rodamientos",
        description: "Rodamiento rígido de bolas SKF de rango pesado. Máxima fiabilidad bajo condiciones operativas severas.",
        specs: "Medidas: 60mm d / 110mm D / 22mm B"
    },

    // Sellos Mecánicos Sealco
    {
        id: 13,
        title: "Sello Mecánico Sealco Tipo 21 (12 mm)",
        brand: "Sealco",
        category: "sellos",
        description: "Sello de fuelle de elastómero de diseño compacto. Ideal para bombas centrífugas domésticas y de refrigeración.",
        specs: "Medidas: Eje de 12mm, Caras: Carbón / Cerámica"
    },
    {
        id: 14,
        title: "Sello Mecánico Sealco Tipo 21 (5/8\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello mecánico estándar de fuelle. Amplio uso en bombas de agua de recirculación y sistemas de riego.",
        specs: "Medidas: Eje de 5/8\" (15.8mm), Caras: Carbón / Cerámica"
    },
    {
        id: 15,
        title: "Sello Mecánico Sealco Tipo 21 (3/4\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello de elastómero Sealco de excelente flexibilidad. Para manejo de agua limpia y fluidos ligeros.",
        specs: "Medidas: Eje de 3/4\" (19mm), Caras: Carbón / Cerámica"
    },
    {
        id: 16,
        title: "Sello Mecánico Sealco Tipo 21 (7/8\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello mecánico auto-alineante de fuelle. Protege el eje contra rayaduras y fugas de presión.",
        specs: "Medidas: Eje de 7/8\" (22.2mm), Caras: Carbón / Cerámica"
    },
    {
        id: 17,
        title: "Sello Mecánico Sealco Tipo 21 (1\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello mecánico Sealco estándar industrial. Balanceado para bombas de transferencia química y agua.",
        specs: "Medidas: Eje de 1\" (25.4mm), Caras: Carbón / Silicio"
    },
    {
        id: 18,
        title: "Sello Mecánico Sealco Tipo 21 (1 1/8\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello robusto para bombas de proceso industrial. Alta capacidad de absorción de vibración.",
        specs: "Medidas: Eje de 1 1/8\" (28.5mm), Caras: Carbón / Silicio"
    },
    {
        id: 19,
        title: "Sello Mecánico Sealco Tipo 21 (1 1/4\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello mecánico para bombas centrífugas de servicio pesado. Caras endurecidas para mayor vida útil.",
        specs: "Medidas: Eje de 1 1/4\" (31.7mm), Caras: Silicio / Silicio"
    },
    {
        id: 20,
        title: "Sello Mecánico Sealco Tipo 21 (1 3/8\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello de fuelle elastómero resistente para bombas de lodos ligeros y procesamiento de agua.",
        specs: "Medidas: Eje de 1 3/8\" (34.9mm), Caras: Silicio / Silicio"
    },
    {
        id: 21,
        title: "Sello Mecánico Sealco Tipo 21 (1 1/2\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello mecánico industrial Sealco de alto rango. Resistencia térmica y química superior.",
        specs: "Medidas: Eje de 1 1/2\" (38.1mm), Caras: Silicio / Silicio"
    },
    {
        id: 22,
        title: "Sello Mecánico Sealco Tipo 21 (2\")",
        brand: "Sealco",
        category: "sellos",
        description: "Sello mecánico de gran tamaño para sistemas de bombeo principal y refinerías.",
        specs: "Medidas: Eje de 2\" (50.8mm), Caras: Carbón de Silicio / Carbón de Silicio"
    },

    // Tornillos y Arandelas
    {
        id: 23,
        title: "Tornillo Hexagonal Grado 8 UNF 1/2\" x 3\"",
        brand: "Nomenclatura Exacta",
        category: "tornillos",
        description: "Tornillo de acero de alta resistencia y tracción. Grado 8 con rosca fina UNF para ensambles estructurales.",
        specs: "Medida: 1/2\" rosca, 3\" largo bajo cabeza, Grado 8"
    },
    {
        id: 24,
        title: "Tornillo Allen Cilíndrico Acero Inoxidable M10 x 50",
        brand: "Nomenclatura Exacta",
        category: "tornillos",
        description: "Tornillo métrico de cabeza cilíndrica con hexágono interior en acero inoxidable A2/70, resistente a la corrosión.",
        specs: "Medida: M10 rosca, paso 1.5mm, 50mm largo"
    },
    {
        id: 25,
        title: "Arandela de Presión (Guasa) de Alta Tensión 5/8\"",
        brand: "Nomenclatura Exacta",
        category: "tornillos",
        description: "Arandela helicoidal de presión de acero al carbono pavonado para prevenir el aflojamiento por vibración.",
        specs: "Medida: 5/8\" diámetro interno"
    },

    // Materiales Metálicos
    {
        id: 26,
        title: "Barra de Bronce Fosforoso SAE 64 (1.5\")",
        brand: "Nomenclatura Exacta",
        category: "materiales",
        description: "Aleación de bronce fosforoso altamente resistente al desgaste y fricción. Excelente para bujes de agua salada.",
        specs: "Diámetro: 1.1/2\" redondo, Composición: Cu-Sn-Pb-P"
    },
    {
        id: 27,
        title: "Barra Cilíndrica de Cobre Electrolítico C11000",
        brand: "Nomenclatura Exacta",
        category: "materiales",
        description: "Cobre de alta pureza (99.9%) con excelente conductividad eléctrica y térmica. Ideal para contactores.",
        specs: "Diámetro: 1\" redondo, Pureza: 99.9%"
    },
    {
        id: 28,
        title: "Barra Redonda de Teflón PTFE Virgen (2\")",
        brand: "Nomenclatura Exacta",
        category: "materiales",
        description: "Politetrafluoroetileno de alta densidad. Total inercia química y mínimo coeficiente de fricción para empacaduras.",
        specs: "Diámetro: 2\" redondo, Rango: -200°C a +260°C"
    },
    {
        id: 29,
        title: "Barra de Hierro Nodular ASTM A536 Grado 65-45-12",
        brand: "Nomenclatura Exacta",
        category: "materiales",
        description: "Hierro dúctil que combina la maquinabilidad del hierro gris con la resistencia del acero para engranajes.",
        specs: "Diámetro: 3\" redondo, Grado: 65-45-12"
    }
];

// Cart State
let cart = [];

// DOM Elements
const productGrid = document.getElementById("product-grid");
const searchInput = document.getElementById("product-search");
const filterBtns = document.querySelectorAll(".tab-btn");
const openCartBtn = document.getElementById("open-cart-btn");
const closeCartBtn = document.getElementById("close-cart-btn");
const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");
const cartCount = document.getElementById("cart-count");
const cartItemsList = document.getElementById("cart-items-list");
const cartEmptyMsg = document.getElementById("cart-empty-msg");
const cartFooter = document.getElementById("cart-footer");
const cartTotalQty = document.getElementById("cart-total-qty");
const sendWhatsappBtn = document.getElementById("send-whatsapp-quote");
const toast = document.getElementById("toast");

// Render Products
function renderProducts(filterCategory = "all", searchTerm = "") {
    productGrid.innerHTML = "";
    
    const filtered = products.filter(product => {
        const matchesCategory = filterCategory === "all" || product.category === filterCategory;
        const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                              product.specs.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div class="text-center" style="grid-column: 1 / -1; padding: 3rem; color: var(--text-muted);">
                <i class="fa-solid fa-circle-exclamation" style="font-size: 3rem; margin-bottom: 1rem; color: var(--primary);"></i>
                <p>No se encontraron suministros que coincidan con la búsqueda.</p>
            </div>
        `;
        return;
    }

    filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
            <div>
                <span class="product-category">${product.category}</span>
                <h3 class="product-title">${product.title}</h3>
                <span class="product-brand">${product.brand}</span>
                <p class="product-desc">${product.description}</p>
                <div class="product-meta">
                    <span><strong>Especificación:</strong> ${product.specs}</span>
                </div>
            </div>
            <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                <i class="fa-solid fa-plus"></i> Agregar a Cotización
            </button>
        `;
        productGrid.appendChild(card);
    });
}

// Add to Cart
window.addToCart = function(productId) {
    const product = products.find(p => p.id === productId);
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    showToast();
};

// Update Cart Display
function updateCart() {
    // Total items badge
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.innerText = totalItems;
    cartTotalQty.innerText = totalItems;

    if (cart.length === 0) {
        cartEmptyMsg.style.display = "flex";
        cartItemsList.innerHTML = "";
        cartFooter.style.display = "none";
    } else {
        cartEmptyMsg.style.display = "none";
        cartFooter.style.display = "block";
        
        cartItemsList.innerHTML = "";
        cart.forEach(item => {
            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <span>Cant: ${item.quantity} | Marca: ${item.brand}</span>
                </div>
                <div class="cart-item-qty">
                    <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                    <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                    <button class="remove-item-btn" onclick="removeItem(${item.id})">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            `;
            cartItemsList.appendChild(itemEl);
        });
    }
}

// Change Quantity
window.changeQty = function(id, delta) {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            removeItem(id);
        } else {
            updateCart();
        }
    }
};

// Remove Item from Cart
window.removeItem = function(id) {
    cart = cart.filter(i => i.id !== id);
    updateCart();
};

// Toast notification
function showToast() {
    toast.classList.add("show");
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}

// Drawer Toggle
openCartBtn.addEventListener("click", () => {
    cartDrawer.classList.add("open");
    cartOverlay.classList.add("open");
});

const closeCart = () => {
    cartDrawer.classList.remove("open");
    cartOverlay.classList.remove("open");
};

closeCartBtn.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// WhatsApp Send
sendWhatsappBtn.addEventListener("click", () => {
    if (cart.length === 0) return;

    let message = `*Hola Luis Alvarez (Rotari-Supply), deseo cotizar los siguientes suministros desde Punto Fijo, Falcón:*\n\n`;
    cart.forEach(item => {
        message += `• *${item.quantity}x* ${item.title} (${item.brand}) - _${item.specs}_\n`;
    });
    message += `\n*Por favor, indicarme disponibilidad y costo de despacho.*`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/584121062612?text=${encoded}`, "_blank");
});

// Category and Search Filtering
let currentCategory = "all";
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.getAttribute("data-category");
        renderProducts(currentCategory, searchInput.value);
    });
});

searchInput.addEventListener("input", (e) => {
    renderProducts(currentCategory, e.target.value);
});

// Accordion (Materials Guide) Toggle
const accordionHeaders = document.querySelectorAll(".accordion-header");
accordionHeaders.forEach(header => {
    header.addEventListener("click", () => {
        const item = header.parentElement;
        const isActive = item.classList.contains("active");
        
        // Close all accordion items
        document.querySelectorAll(".accordion-item").forEach(i => {
            i.classList.remove("active");
            i.querySelector(".accordion-content").style.maxHeight = null;
        });

        if (!isActive) {
            item.classList.add("active");
            const content = item.querySelector(".accordion-content");
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});

// Interactive Comments System
const commentForm = document.getElementById("comment-form");
const commentsList = document.getElementById("comments-list");
const starRating = document.getElementById("star-rating");
const ratingInput = document.getElementById("comment-rating");

// Prepopulated Demo Comments
const initialComments = [
    {
        name: "Servicios Metalúrgicos Paraguaná C.A.",
        rating: 5,
        text: "Los rodamientos SKF llegaron a tiempo en Punto Fijo. Excelente calidad y la atención de Luis Alvarez de primera."
    },
    {
        name: "Taller Torno y Fresa Carirubana",
        rating: 5,
        text: "Compramos bronce SAE 64 para unos bujes marinos y la nomenclatura fue exacta. Altamente recomendados."
    },
    {
        name: "Ing. Pedro Blanco",
        rating: 4,
        text: "Excelente servicio en tornillos métricos de acero inoxidable y sellos mecánicos Sealco. Todo perfecto."
    }
];

function getComments() {
    const saved = localStorage.getItem("rotari_comments_v2");
    if (!saved) {
        localStorage.setItem("rotari_comments_v2", JSON.stringify(initialComments));
        return initialComments;
    }
    return JSON.parse(saved);
}

function renderComments() {
    const list = getComments();
    commentsList.innerHTML = "";
    list.forEach(c => {
        const stars = Array(5).fill(0).map((_, idx) => 
            `<i class="${idx < c.rating ? 'fa-solid' : 'fa-regular'} fa-star"></i>`
        ).join("");

        const el = document.createElement("div");
        el.className = "comment-card";
        el.innerHTML = `
            <div class="comment-header">
                <span class="comment-user">${c.name}</span>
                <span class="comment-stars">${stars}</span>
            </div>
            <p class="comment-message">"${c.text}"</p>
        `;
        commentsList.appendChild(el);
    });
}

// Star Rating Interactive Widget
const stars = starRating.querySelectorAll("i");
stars.forEach(star => {
    star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        ratingInput.value = rating;
        
        stars.forEach(s => {
            const r = parseInt(s.getAttribute("data-rating"));
            if (r <= rating) {
                s.classList.replace("fa-regular", "fa-solid");
                s.classList.add("active");
            } else {
                s.classList.replace("fa-solid", "fa-regular");
                s.classList.remove("active");
            }
        });
    });

    star.addEventListener("mouseover", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        stars.forEach(s => {
            const r = parseInt(s.getAttribute("data-rating"));
            if (r <= rating) {
                s.classList.add("hover");
            }
        });
    });

    star.addEventListener("mouseout", () => {
        stars.forEach(s => s.classList.remove("hover"));
    });
});

// Set default 5 stars active visually on load
stars.forEach(s => {
    s.classList.replace("fa-regular", "fa-solid");
    s.classList.add("active");
});

// Submit New Comment
commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("comment-name").value.trim();
    const text = document.getElementById("comment-text").value.trim();
    const rating = parseInt(ratingInput.value);

    if (!name || !text) return;

    const list = getComments();
    list.unshift({ name, rating, text });
    localStorage.setItem("rotari_comments_v2", JSON.stringify(list));
    
    // Clear and Reset
    commentForm.reset();
    ratingInput.value = 5;
    stars.forEach(s => {
        s.classList.replace("fa-regular", "fa-solid");
        s.classList.add("active");
    });

    renderComments();
});

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderComments();
});
