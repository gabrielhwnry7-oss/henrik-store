// =============================
// HENRIK STORE - CONFIGURAÇÃO
// =============================
// Troque pelo número do WhatsApp da loja.
// Formato: 55 + DDD + número, sem espaços ou símbolos.
const WHATSAPP_NUMBER = "5500000000000";

const products = [
  {id:1,name:"Capinha Premium para iPhone",category:"Capinhas",price:39.90,stock:8,icon:"⌁"},
  {id:2,name:"Capinha Anti-impacto",category:"Capinhas",price:29.90,stock:12,icon:"▣"},
  {id:3,name:"Película 3D",category:"Películas",price:19.90,stock:15,icon:"◇"},
  {id:4,name:"Película de Privacidade",category:"Películas",price:29.90,stock:7,icon:"◈"},
  {id:5,name:"Carregador Turbo",category:"Carregadores",price:59.90,stock:5,icon:"⚡"},
  {id:6,name:"Carregador para carro",category:"Carregadores",price:44.90,stock:6,icon:"◉"},
  {id:7,name:"Cabo USB-C 1 metro",category:"Cabos",price:24.90,stock:10,icon:"↔"},
  {id:8,name:"Cabo Lightning 1 metro",category:"Cabos",price:29.90,stock:9,icon:"↔"},
  {id:9,name:"Fone Bluetooth",category:"Áudio",price:79.90,stock:4,icon:"◉"},
  {id:10,name:"Fone de ouvido",category:"Áudio",price:34.90,stock:8,icon:"♫"},
  {id:11,name:"Suporte para celular",category:"Acessórios",price:39.90,stock:6,icon:"▱"},
  {id:12,name:"Adaptador USB",category:"Acessórios",price:24.90,stock:11,icon:"＋"}
];

let cart = JSON.parse(localStorage.getItem("henrikCart") || "[]");
let currentCategory = "Todos";

const money = value => value.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});

function saveCart(){ localStorage.setItem("henrikCart",JSON.stringify(cart)); }

function renderProducts(){
  const query = document.getElementById("search").value.toLowerCase().trim();
  const list = products.filter(p =>
    (currentCategory === "Todos" || p.category === currentCategory) &&
    p.name.toLowerCase().includes(query)
  );
  const grid = document.getElementById("productsGrid");
  grid.innerHTML = list.length ? list.map(p => `
    <article class="product">
      <div class="product-img">${p.icon}</div>
      <div class="product-info">
        <div class="product-cat">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-row">
          <span class="price">${money(p.price)}</span>
          <span class="stock">${p.stock} em estoque</span>
        </div>
        <button class="add" onclick="addToCart(${p.id})">ADICIONAR AO CARRINHO</button>
      </div>
    </article>`).join("") :
    `<p style="grid-column:1/-1;color:#777;padding:30px 0">Nenhum produto encontrado.</p>`;
}

function addToCart(id){
  const product = products.find(p=>p.id===id);
  const item = cart.find(i=>i.id===id);
  if(item){
    if(item.qty < product.stock) item.qty++;
  } else cart.push({id,qty:1});
  saveCart(); renderCart(); updateCount(); openCart();
}

function changeQty(id,delta){
  const item = cart.find(i=>i.id===id);
  const product = products.find(p=>p.id===id);
  if(!item) return;
  item.qty += delta;
  if(item.qty > product.stock) item.qty = product.stock;
  if(item.qty <= 0) cart = cart.filter(i=>i.id!==id);
  saveCart(); renderCart(); updateCount();
}

function removeItem(id){ cart = cart.filter(i=>i.id!==id); saveCart(); renderCart(); updateCount(); }

function renderCart(){
  const box = document.getElementById("cartItems");
  if(!cart.length){ box.innerHTML='<div class="empty">Seu carrinho está vazio.</div>'; }
  else box.innerHTML = cart.map(i=>{
    const p=products.find(x=>x.id===i.id);
    return `<div class="cart-item">
      <div><strong>${p.name}</strong><br><small>${money(p.price)} cada</small>
      <div class="qty"><button onclick="changeQty(${p.id},-1)">−</button><span>${i.qty}</span><button onclick="changeQty(${p.id},1)">+</button></div></div>
      <div style="text-align:right"><strong>${money(p.price*i.qty)}</strong><br><button class="remove" onclick="removeItem(${p.id})">remover</button></div>
    </div>`;
  }).join("");
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
  document.getElementById("cartTotal").textContent=money(total);
}

function updateCount(){ document.getElementById("cartCount").textContent=cart.reduce((s,i)=>s+i.qty,0); }

function openCart(){document.getElementById("cartOverlay").classList.remove("hidden")}
function closeCart(){document.getElementById("cartOverlay").classList.add("hidden")}

function checkout(){
  if(!cart.length){ alert("Adicione pelo menos um produto ao carrinho."); return; }
  if(WHATSAPP_NUMBER === "5500000000000"){
    alert("Antes de publicar, configure o número do WhatsApp no arquivo script.js.");
    return;
  }
  const lines=cart.map(i=>{
    const p=products.find(x=>x.id===i.id);
    return `• ${p.name} — ${i.qty}x — ${money(p.price*i.qty)}`;
  });
  const total=cart.reduce((s,i)=>s+products.find(p=>p.id===i.id).price*i.qty,0);
  const message=`Olá! Quero fazer um pedido na Henrik Store:%0A%0A${lines.join("%0A")}%0A%0A*Total: ${money(total)}*%0A%0AComo posso finalizar?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`,"_blank");
}

document.querySelectorAll(".category").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".category").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory=btn.dataset.category;
    renderProducts();
  });
});
document.getElementById("search").addEventListener("input",renderProducts);
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
document.getElementById("cartOverlay").addEventListener("click",e=>{if(e.target.id==="cartOverlay")closeCart()});
document.getElementById("checkout").addEventListener("click",checkout);
document.getElementById("clearCart").addEventListener("click",()=>{cart=[];saveCart();renderCart();updateCount()});
document.getElementById("contactWhatsApp").addEventListener("click",()=>{if(cart.length) checkout(); else openCart()});

renderProducts(); renderCart(); updateCount();
