// =============================
// HENRIK STORE - CONFIGURAÇÃO
// =============================

// WhatsApp da loja
// Formato: 55 + DDD + número, sem espaços ou símbolos.
const WHATSAPP_NUMBER = "5531998929423";


// =============================
// CATÁLOGO DE PRODUTOS
// =============================

const products = [

  // =====================================================
  // PELÍCULAS
  // =====================================================

  {id:1,name:"Película Transformação — iPhone 13 Pro Max",category:"Películas",price:24.90,stock:1,icon:"◇"},

  {id:2,name:"Película Transformação — iPhone 14 Pro / 15 Pro",category:"Películas",price:24.90,stock:3,icon:"◇"},

  {id:3,name:"Película Transformação — iPhone 14 Pro Max / 15 Pro Max",category:"Películas",price:24.90,stock:2,icon:"◇"},

  {id:4,name:"Película Traseira Cerâmica — iPhone 15",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:5,name:"Película Traseira Cerâmica — iPhone 15 Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:6,name:"Película Traseira Cerâmica — iPhone 16",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:7,name:"Película Traseira Cerâmica — iPhone 16 Pro Max",category:"Películas",price:9.90,stock:3,icon:"◇"},

  {id:8,name:"Película Traseira Cerâmica — iPhone 17",category:"Películas",price:9.90,stock:4,icon:"◇"},

  {id:9,name:"Película Traseira Cerâmica — iPhone 17 Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:10,name:"Película Câmera de Vidro — iPhone 13 Pro / Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:11,name:"Película Câmera de Vidro — iPhone 14 Pro / Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:12,name:"Película Câmera de Vidro — iPhone 15 Pro / Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:13,name:"Película Câmera de Vidro — iPhone 16 / 17",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:14,name:"Película Câmera de Vidro — iPhone 17 Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:15,name:"Película Privacidade Cerâmica — iPhone 13 Pro Max",category:"Películas",price:14.90,stock:2,icon:"◈"},

  {id:16,name:"Película Privacidade Cerâmica — iPhone 14 Pro Max",category:"Películas",price:14.90,stock:2,icon:"◈"},

  {id:17,name:"Película Privacidade Cerâmica — iPhone 15",category:"Películas",price:14.90,stock:2,icon:"◈"},

  {id:18,name:"Película Privacidade Cerâmica — iPhone 15 Pro Max",category:"Películas",price:14.90,stock:2,icon:"◈"},

  {id:19,name:"Película Privacidade Cerâmica — iPhone 16",category:"Películas",price:14.90,stock:3,icon:"◈"},

  {id:20,name:"Película Privacidade Cerâmica — iPhone 16 Pro Max",category:"Películas",price:14.90,stock:3,icon:"◈"},

  {id:21,name:"Película Privacidade Cerâmica — iPhone 17",category:"Películas",price:14.90,stock:2,icon:"◈"},

  {id:22,name:"Película Privacidade Cerâmica — iPhone 17 Pro Max",category:"Películas",price:14.90,stock:2,icon:"◈"},

  {id:23,name:"Película Xiaomi — Poco X8 Pro Max",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:24,name:"Película Xiaomi — Redmi 10C / 12C / A3 / Poco C55 / C40",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:25,name:"Película Xiaomi — Redmi Note 10/10S/11/11S/12S/Poco M5s/M4 Pro",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:26,name:"Película Vidro — Poco M7",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:27,name:"Película Vidro — Poco X7 Pro",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:28,name:"Película Vidro — Poco X8 Pro",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:29,name:"Película Vidro — Redmi A5",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:30,name:"Película Vidro — Redmi Note 13",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:31,name:"Película Vidro — Redmi Note 14",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:32,name:"Película Vidro — Moto G55",category:"Películas",price:9.90,stock:2,icon:"◇"},

  {id:33,name:"Película Vidro — Moto G75",category:"Películas",price:9.90,stock:2,icon:"◇"},


  // =====================================================
  // CAPINHAS
  // =====================================================

  {id:34,name:"Capinha Antishock — diversos modelos",category:"Capinhas",price:9.90,stock:100,icon:"▣"},

  {id:35,name:"Capinha MagSafe — iPhone 13 Pro Max",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:36,name:"Capinha MagSafe — iPhone 14",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:37,name:"Capinha MagSafe — iPhone 14 Pro Max",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:38,name:"Capinha MagSafe — iPhone 15",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:39,name:"Capinha MagSafe — iPhone 15 Pro Max",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:40,name:"Capinha MagSafe — iPhone 16",category:"Capinhas",price:21.90,stock:3,icon:"▣"},

  {id:41,name:"Capinha MagSafe — iPhone 16 Pro Max",category:"Capinhas",price:21.90,stock:3,icon:"▣"},

  {id:42,name:"Capinha MagSafe — iPhone 17",category:"Capinhas",price:24.90,stock:3,icon:"▣"},

  {id:43,name:"Capinha MagSafe — iPhone 17 Pro Max",category:"Capinhas",price:24.90,stock:3,icon:"▣"},

  {id:44,name:"Capinha MagSafe — iPhone 18 Pro Max",category:"Capinhas",price:29.90,stock:2,icon:"▣"},

  {id:45,name:"Capinha Silicone — iPhone 13",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:46,name:"Capinha Silicone — iPhone 13 Pro Max",category:"Capinhas",price:19.90,stock:2,icon:"▣"},

  {id:47,name:"Capinha Silicone — iPhone 14",category:"Capinhas",price:19.90,stock:2,icon:"▣"},

  {id:48,name:"Capinha Silicone — iPhone 14 Pro Max",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:49,name:"Capinha Silicone — iPhone 15",category:"Capinhas",price:19.90,stock:3,icon:"▣"},

  {id:50,name:"Capinha Silicone — iPhone 15 Pro Max",category:"Capinhas",price:19.90,stock:2,icon:"▣"},

  {id:51,name:"Capinha Silicone — iPhone 16",category:"Capinhas",price:21.90,stock:3,icon:"▣"},

  {id:52,name:"Capinha Silicone — iPhone 16 Pro Max",category:"Capinhas",price:21.90,stock:2,icon:"▣"},

  {id:53,name:"Capinha Silicone — iPhone 17",category:"Capinhas",price:24.90,stock:2,icon:"▣"},

  {id:54,name:"Capinha Silicone — iPhone 17 Pro Max",category:"Capinhas",price:24.90,stock:3,icon:"▣"},

  {id:55,name:"Capinha Silicone Laranja — iPhone 17 Pro Max",category:"Capinhas",price:29.90,stock:3,icon:"▣"},

  {id:56,name:"Capinha Silicone — Galaxy A26",category:"Capinhas",price:14.90,stock:2,icon:"▣"},

  {id:57,name:"Capinha Silicone — Galaxy A56",category:"Capinhas",price:14.90,stock:2,icon:"▣"},

  {id:58,name:"Capinha Silicone — Galaxy S25",category:"Capinhas",price:17.90,stock:2,icon:"▣"}

];


// =============================
// CARRINHO
// =============================

let cart = JSON.parse(localStorage.getItem("henrikCart") || "[]");
let currentCategory = "Todos";


// =============================
// FORMATAÇÃO DE PREÇO
// =============================

const money = value =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });


// =============================
// SALVAR CARRINHO
// =============================

function saveCart(){
  localStorage.setItem("henrikCart", JSON.stringify(cart));
}


// =============================
// MOSTRAR PRODUTOS
// =============================

function renderProducts(){

  const query =
    document.getElementById("search").value.toLowerCase().trim();

  const list = products.filter(p =>
    (currentCategory === "Todos" ||
     p.category === currentCategory) &&
    p.name.toLowerCase().includes(query)
  );

  const grid = document.getElementById("productsGrid");

  grid.innerHTML = list.length
    ? list.map(p => `

      <article class="product">

        <div class="product-img">
          ${p.icon}
        </div>

        <div class="product-info">

          <div class="product-cat">
            ${p.category}
          </div>

          <div class="product-name">
            ${p.name}
          </div>

          <div class="product-row">

            <span class="price">
              ${money(p.price)}
            </span>

            <span class="stock">
              ${p.stock} em estoque
            </span>

          </div>

          <button
            class="add"
            onclick="addToCart(${p.id})"
          >
            ADICIONAR AO CARRINHO
          </button>

        </div>

      </article>

    `).join("")

    : `
      <p style="grid-column:1/-1;color:#777;padding:30px 0">
        Nenhum produto encontrado.
      </p>
    `;
}


// =============================
// ADICIONAR AO CARRINHO
// =============================

function addToCart(id){

  const product = products.find(p => p.id === id);

  const item = cart.find(i => i.id === id);

  if(!product) return;

  if(product.stock <= 0){
    alert("Produto sem estoque.");
    return;
  }

  if(item){

    if(item.qty < product.stock){
      item.qty++;
    } else {
      alert("Quantidade máxima disponível em estoque.");
      return;
    }

  } else {

    cart.push({
      id,
      qty: 1
    });

  }

  saveCart();
  renderCart();
  updateCount();
  openCart();
}


// =============================
// ALTERAR QUANTIDADE
// =============================

function changeQty(id, delta){

  const item = cart.find(i => i.id === id);

  const product = products.find(p => p.id === id);

  if(!item || !product) return;

  item.qty += delta;

  if(item.qty > product.stock){
    item.qty = product.stock;
  }

  if(item.qty <= 0){
    cart = cart.filter(i => i.id !== id);
  }

  saveCart();
  renderCart();
  updateCount();
}


// =============================
// REMOVER PRODUTO
// =============================

function removeItem(id){

  cart = cart.filter(i => i.id !== id);

  saveCart();
  renderCart();
  updateCount();
}


// =============================
// MOSTRAR CARRINHO
// =============================

function renderCart(){

  const box = document.getElementById("cartItems");

  if(!cart.length){

    box.innerHTML =
      '<div class="empty">Seu carrinho está vazio.</div>';

  } else {

    box.innerHTML = cart.map(i => {

      const p = products.find(x => x.id === i.id);

      if(!p) return "";

      return `
        <div class="cart-item">

          <div>

            <strong>
              ${p.name}
            </strong>

            <br>

            <small>
              ${money(p.price)} cada
            </small>

            <div class="qty">

              <button
                onclick="changeQty(${p.id},-1)"
              >
                −
              </button>

              <span>
                ${i.qty}
              </span>

              <button
                onclick="changeQty(${p.id},1)"
              >
                +
              </button>

            </div>

          </div>

          <div style="text-align:right">

            <strong>
              ${money(p.price * i.qty)}
            </strong>

            <br>

            <button
              class="remove"
              onclick="removeItem(${p.id})"
            >
              remover
            </button>

          </div>

        </div>
      `;

    }).join("");

  }

  const total = cart.reduce(
    (s, i) => {

      const product = products.find(p => p.id === i.id);

      return s + (product ? product.price * i.qty : 0);

    },
    0
  );

  document.getElementById("cartTotal").textContent =
    money(total);
}


// =============================
// CONTADOR DO CARRINHO
// =============================

function updateCount(){

  document.getElementById("cartCount").textContent =
    cart.reduce((s, i) => s + i.qty, 0);

}


// =============================
// ABRIR CARRINHO
// =============================

function openCart(){

  document
    .getElementById("cartOverlay")
    .classList.remove("hidden");

}


// =============================
// FECHAR CARRINHO
// =============================

function closeCart(){

  document
    .getElementById("cartOverlay")
    .classList.add("hidden");

}


// =============================
// FINALIZAR PEDIDO NO WHATSAPP
// =============================

function checkout(){

  if(!cart.length){

    alert("Adicione pelo menos um produto ao carrinho.");

    return;
  }


  const lines = cart.map(i => {

    const p = products.find(x => x.id === i.id);

    return `• ${p.name} — ${i.qty}x — ${money(p.price * i.qty)}`;

  });


  const total = cart.reduce(
    (s, i) => {

      const product = products.find(p => p.id === i.id);

      return s + (product ? product.price * i.qty : 0);

    },
    0
  );


  const message =
    `Olá! Quero fazer um pedido na Henrik Store:%0A%0A` +
    `${lines.join("%0A")}` +
    `%0A%0A*Total: ${money(total)}*` +
    `%0A%0AComo posso finalizar?`;


  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,
    "_blank"
  );

}


// =============================
// FILTROS DE CATEGORIA
// =============================

document
  .querySelectorAll(".category")
  .forEach(btn => {

    btn.addEventListener("click", () => {

      document
        .querySelectorAll(".category")
        .forEach(b =>
          b.classList.remove("active")
        );

      btn.classList.add("active");

      currentCategory =
        btn.dataset.category;

      renderProducts();

    });

  });


// =============================
// BUSCA
// =============================

document
  .getElementById("search")
  .addEventListener("input", renderProducts);


// =============================
// ABRIR CARRINHO
// =============================

document
  .getElementById("openCart")
  .addEventListener("click", openCart);


// =============================
// FECHAR CARRINHO
// =============================

document
  .getElementById("closeCart")
  .addEventListener("click", closeCart);


// =============================
// FECHAR AO CLICAR FORA
// =============================

document
  .getElementById("cartOverlay")
  .addEventListener("click", e => {

    if(e.target.id === "cartOverlay"){
      closeCart();
    }

  });


// =============================
// FINALIZAR PEDIDO
// =============================

document
  .getElementById("checkout")
  .addEventListener("click", checkout);


// =============================
// LIMPAR CARRINHO
// =============================

document
  .getElementById("clearCart")
  .addEventListener("click", () => {

    cart = [];

    saveCart();
    renderCart();
    updateCount();

  });


// =============================
// BOTÃO WHATSAPP
// =============================

document
  .getElementById("contactWhatsApp")
  .addEventListener("click", () => {

    if(cart.length){
      checkout();
    } else {
      openCart();
    }

  });


// =============================
// INICIALIZAÇÃO
// =============================

renderProducts();
renderCart();
updateCount();
