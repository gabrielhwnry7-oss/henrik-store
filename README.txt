# HENRIK STORE — Site catálogo

## O que já funciona
- Catálogo responsivo para celular e computador
- Busca por produto
- Filtro por categoria
- Carrinho de compras
- Quantidade e remoção de itens
- Cálculo automático do total
- Carrinho salvo no navegador
- Geração automática do pedido para WhatsApp

## 1. Configurar o WhatsApp
Abra `script.js` e altere:
const WHATSAPP_NUMBER = "5500000000000";

Exemplo para um número brasileiro:
const WHATSAPP_NUMBER = "5531999999999";

Use somente números: 55 + DDD + telefone.

## 2. Alterar produtos
No começo do `script.js`, procure `const products = [...]`.
Cada produto possui:
id, name, category, price, stock e icon.

Você pode trocar os produtos, preços e estoque diretamente ali.

## 3. Colocar fotos reais
A versão inicial usa símbolos como imagem de demonstração.
Para usar fotos reais, depois podemos transformar cada produto em:
image: "images/nome-do-produto.jpg"
e colocar as imagens na pasta `images`.

## 4. Publicar
Esta versão é um site estático e pode ser publicada em serviços de hospedagem estática.
Depois de configurar o WhatsApp e os produtos, basta enviar `index.html`, `style.css` e `script.js`.

## Próximos upgrades recomendados
- Painel administrativo para cadastrar produtos sem mexer no código
- Upload de fotos
- Estoque real
- Produtos por modelo de celular
- Promoções/descontos
- Domínio próprio
- Analytics
- Botão de Instagram
- Página individual de produto
