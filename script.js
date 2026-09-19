// ===============================
// PRODUTOS
// ===============================

const produtos = [

    {
        id: 1,
        nome: "Notebook Samsung Galaxy Book4 Intel Core i3 8GB RAM SSD 256GB 15,6 Full HD Windows 11",
        categoria: "Notebook",
        preco: 3499.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/notebook-samsung-galaxy-book4-intel-core-i3-8gb-ram-ssd-256gb-156-full-hd-windows-11-np750xgj-kg5br/magazineluiza/238407300/a0362b9d2d2dfb9bf29a875fb10fc207.jpg"
    },

    {
        id: 2,
        nome: "Notebook Dell Inspiron 15 Intel Core i5 8GB RAM 512GB SSD 15.6 Full HD Windows 11",
        categoria: "Notebook",
        preco: 4499.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/notebook-dell-inspiron-15-i15-i1300-a30p-intel-core-i5-8gb-ram-512gb-ssd-15-6-full-hd-windows-11-210-bngc/magazineluiza/240428300/c76ebca593d35e6912b954012e62c35f.jpg"
    },

    {
        id: 3,
        nome: "Notebook Lenovo IdeaPad Slim 3 Intel Core i7-13620H 16GB 512GB SSD Windows 11",
        categoria: "Notebook",
        preco: 5499.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/notebook-lenovo-ideapad-slim-3-15irh10-intel-core-i7-13620h-16gb-512gb-ssd-windows-11-15-3-83ns0000br-luna-grey/lenovooficial/83ns0000br/6870be12053cf4dbb70d22d5602297da.jpeg"
    },

    {
        id: 4,
        nome: "Notebook Gamer Acer Nitro V15 Intel Core i9 NVIDIA RTX 4060 16GB Windows 15.6",
        categoria: "Notebook",
        preco: 9499.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/notebook-gamer-acer-nitro-v-15-intel-core-i9-rtx-4060-16gb-windows-15-6/aceroficial/1415/0118a645597576df11ea6d2b1d06900a.jpeg"
    },

    {
        id: 5,
        nome: "Smartphone Motorola Edge 70 5G 256GB 24GB (8GB RAM + 16GB RAM Boost)",
        categoria: "Smartphone",
        preco: 2249.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/smartphone-motorola-edge-70-5g-256gb-24gb-8gb-ram-16gb-ram-boost-ultrafino-3-cameras-50mp-tela-1-5k-extreme-amoled-120hz/magazineluiza/241203700/9399e1076c50c6d5bd29e018a03865b4.jpg"
    },

    {
        id: 6,
        nome: "Smartphone Samsung Galaxy S25 Edge 512GB 5G RAM 12GB",
        categoria: "Smartphone",
        preco: 3999.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/smartphone-samsung-galaxy-s25-edge-512gb-5g-titanio-jetblack-galaxy-ai-camera-dupla-200mp-selfie-12mp-ram-12gb-tela-6-7/lojasmastercell/28260003p/e3f3b1b566523de192ecf76f5df34d23.jpg"
    },

    {
        id: 7,
        nome: "Apple iPhone 17 Pro 256GB Laranja-cósmico 6,3 48MP iOS 5G",
        categoria: "Smartphone",
        preco: 9349.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/apple-iphone-17-pro-256gb-laranja-cosmico-63-48mp-ios-5g/magazineluiza/240588300/6f9f55d0ab33cb3a903816497cd36187.jpg"
    },

    {
        id: 8,
        nome: "Fone de Ouvido Gamer RGB PRO USB com LED e Microfone Alta",
        categoria: "Acessório",
        preco: 99.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/fone-de-ouvido-gamer-rgb-pro-usb-com-led-e-microfone-alta-qualidade-delta/lojavittashop/delta-f7140/74797e11a083ecff26d3c063c3d45be0.jpeg"
    },

    {
        id: 9,
        nome: "Monitor 27Mouse Gamer Sem Fio Redragon Griffin, 8000 DPI, 8 Botões, Wireless, Preto - M602-KS",
        categoria: "Acessório",
        preco: 119.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/mouse-gamer-sem-fio-redragon-griffin-8000-dpi-8-botoes-wireless-preto-m602-ks/kabum/590472/14876f3ea65b781812ff9e5ce50436b6.jpeg"
    },

    {
        id: 10,
        nome: "Teclado Mecânico Gamer Husky Anchorage Full Size, RGB, Switch Gateron EF Brown, ABNT2, Preto - HTG200PTMA",
        categoria: "Acessório",
        preco: 199.90,
        icone: "https://a-static.mlcdn.com.br/420x420/teclado-mecanico-gamer-husky-anchorage-full-size-rgb-switch-gateron-ef-brown-abnt2-preto-htg200ptma/kabum/538690/c62b453d789465a5c7a89c215ad4a455.jpeg"
    },

    {
        id: 11,
        nome: "Monitor Gamer LG UltraGear 24, Full HD, 144Hz, 1ms, IPS, G-Sync, FreeSync, HDR10, Preto - 24G411A-B",
        categoria: "Acessório",
        preco: 999.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/monitor-gamer-lg-ultragear-24-full-hd-144hz-1ms-ips-g-sync-freesync-hdr10-preto-24g411a-b/kabum/986739/3c88ded099b840041c161370edce8e5b.jpeg"
    },

    {
        id: 12,
        nome: "PC Gamer – 16GB RAM | 512 SSDHD | Intel LGA 1155 | Gabinete com 4 Coolers RGB - Placa de video 4GB",
        categoria: "Acessório",
        preco: 1499.90,
        icone: "https://m.magazineluiza.com.br/a-static/420x420/computador-gamer-completo-intel-pc-cpu-ssd-16gb-ram-placa-de-video-4gb/player1gamesjogoseeletronicosltd/pc4gbvram16/001a6263d2bfd64d1fcaef06c4a78087.jpeg"
    }

];


// ===============================
// VARIÁVEIS
// ===============================

let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];

let categoriaAtual = "Todos";


// ===============================
// ELEMENTOS
// ===============================

const listaProdutos =
    document.getElementById("listaProdutos");

const campoBusca =
    document.getElementById("campoBusca");

const contadorCarrinho =
    document.getElementById("contadorCarrinho");

const listaCarrinho =
    document.getElementById("listaCarrinho");

const totalCarrinho =
    document.getElementById("totalCarrinho");

const cartOverlay =
    document.getElementById("cartOverlay");

const abrirCarrinho =
    document.getElementById("abrirCarrinho");

const fecharCarrinho =
    document.getElementById("fecharCarrinho");

const menuButton =
    document.getElementById("menuButton");

const mobileNav =
    document.getElementById("mobileNav");


// ===============================
// FORMATAR MOEDA
// ===============================

function formatarPreco(valor) {

    return valor.toLocaleString(
        "pt-BR",
        {
            style: "currency",
            currency: "BRL"
        }
    );

}


// ===============================
// MOSTRAR PRODUTOS
// ===============================

function mostrarProdutos() {

    const busca =
        campoBusca.value.toLowerCase();

    const produtosFiltrados =
        produtos.filter(produto => {

            const correspondeCategoria =
                categoriaAtual === "Todos" ||
                produto.categoria === categoriaAtual;

            const correspondeBusca =
                produto.nome
                    .toLowerCase()
                    .includes(busca);

            return (
                correspondeCategoria &&
                correspondeBusca
            );

        });


    listaProdutos.innerHTML = "";


    if (produtosFiltrados.length === 0) {

        listaProdutos.innerHTML = `
            <p>
                Nenhum produto encontrado.
            </p>
        `;

        return;
    }


    produtosFiltrados.forEach(produto => {

        const card =
            document.createElement("article");

        card.classList.add("product");

        card.innerHTML = `

            <div class="product-image">
                 ${
                     produto.icone.startsWith("http")
                     ? `<img src="${produto.icone}" alt="${produto.nome}">`
                     : produto.icone
                 }
           </div>

            <div class="product-info">

                <h3>
                    ${produto.nome}
                </h3>

                <p class="product-category">
                    ${produto.categoria}
                </p>

                <p class="product-price">
                    ${formatarPreco(produto.preco)}
                </p>

                <button
                    class="add-button"
                    onclick="adicionarCarrinho(${produto.id})"
                >
                    Adicionar ao carrinho
                </button>

            </div>

        `;

        listaProdutos.appendChild(card);

    });

}


// ===============================
// ADICIONAR AO CARRINHO
// ===============================

function adicionarCarrinho(id) {

    const produto =
        produtos.find(produto => produto.id === id);


    const itemExistente =
        carrinho.find(item => item.id === id);


    if (itemExistente) {

        itemExistente.quantidade++;

    } else {

        carrinho.push({

            id: produto.id,

            nome: produto.nome,

            preco: produto.preco,

            icone: produto.icone,

            quantidade: 1

        });

    }


    salvarCarrinho();

    atualizarCarrinho();

    cartOverlay.classList.add("active");

}


// ===============================
// SALVAR CARRINHO
// ===============================

function salvarCarrinho() {

    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );

}


// ===============================
// ATUALIZAR CARRINHO
// ===============================

function atualizarCarrinho() {

    listaCarrinho.innerHTML = "";


    if (carrinho.length === 0) {

        listaCarrinho.innerHTML = `
            <div class="empty-cart">
                Seu carrinho está vazio.
            </div>
        `;

    }


    carrinho.forEach(item => {

        const elemento =
            document.createElement("div");

        elemento.classList.add("cart-item");

        elemento.innerHTML = `

            <div class="cart-item-icon">
                 ${
                     item.icone.startsWith("http")
                     ? `<img src="${item.icone}" alt="${item.nome}">`
                     : item.icone
                 }
            </div>

            <div class="cart-item-info">

                <h4>
                    ${item.nome}
                </h4>

                <p class="cart-item-price">
                    ${formatarPreco(item.preco)}
                </p>

                <div class="quantity">

                    <button
                        onclick="alterarQuantidade(${item.id}, -1)"
                    >
                        -
                    </button>

                    <span>
                        ${item.quantidade}
                    </span>

                    <button
                        onclick="alterarQuantidade(${item.id}, 1)"
                    >
                        +
                    </button>

                    <button
                        class="remove-item"
                        onclick="removerCarrinho(${item.id})"
                    >
                        Remover
                    </button>

                </div>

            </div>

        `;

        listaCarrinho.appendChild(elemento);

    });


    atualizarTotal();

}

// ===============================
// ALTERAR QUANTIDADE
// ===============================

function alterarQuantidade(id, valor) {

    const item =
        carrinho.find(item => item.id === id);


    if (!item) {
        return;
    }


    item.quantidade += valor;


    if (item.quantidade <= 0) {

        carrinho =
            carrinho.filter(item => item.id !== id);

    }


    salvarCarrinho();

    atualizarCarrinho();

}


// ===============================
// REMOVER PRODUTO
// ===============================

function removerCarrinho(id) {

    carrinho =
        carrinho.filter(item => item.id !== id);


    salvarCarrinho();

    atualizarCarrinho();

}


// ===============================
// TOTAL
// ===============================

function atualizarTotal() {

    const total =
        carrinho.reduce(

            (acumulador, item) => {

                return acumulador +
                    item.preco *
                    item.quantidade;

            },

            0

        );


    totalCarrinho.textContent =
        formatarPreco(total);


    const quantidade =
        carrinho.reduce(

            (total, item) => {

                return total +
                    item.quantidade;

            },

            0

        );


    contadorCarrinho.textContent =
        quantidade;

}


// ===============================
// FILTRO DE CATEGORIA
// ===============================

const botoesCategoria =
    document.querySelectorAll(".categoria");


botoesCategoria.forEach(botao => {

    botao.addEventListener(
        "click",
        () => {

            botoesCategoria.forEach(
                botao =>
                    botao.classList.remove("active")
            );


            botao.classList.add("active");


            categoriaAtual =
                botao.dataset.categoria;


            mostrarProdutos();

        }
    );

});


// ===============================
// BUSCA
// ===============================

campoBusca.addEventListener(
    "input",
    mostrarProdutos
);


// ===============================
// ABRIR CARRINHO
// ===============================

abrirCarrinho.addEventListener(
    "click",
    () => {

        cartOverlay.classList.add("active");

    }
);


// ===============================
// FECHAR CARRINHO
// ===============================

fecharCarrinho.addEventListener(
    "click",
    () => {

        cartOverlay.classList.remove("active");

    }
);


// Fechar clicando fora do carrinho

cartOverlay.addEventListener(
    "click",
    event => {

        if (
            event.target === cartOverlay
        ) {

            cartOverlay.classList.remove(
                "active"
            );

        }

    }
);


// ===============================
// MENU MOBILE
// ===============================

menuButton.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "active"
        );

    }
);


// ===============================
// FORMULÁRIO
// ===============================

const formContato =
    document.getElementById("formContato");


formContato.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;


        alert(
            `Obrigado, ${nome}! Sua mensagem foi enviada.`
        );


        formContato.reset();

    }
);


// ===============================
// FINALIZAR COMPRA
// ===============================

const finalizarCompra =
    document.getElementById(
        "finalizarCompra"
    );


finalizarCompra.addEventListener(
    "click",
    () => {

        if (carrinho.length === 0) {

            alert(
                "Seu carrinho está vazio."
            );

            return;

        }


        alert(
            "Compra iniciada! Nesta versão demonstrativa, o pagamento ainda não está integrado."
        );

    }
);


// ===============================
// INICIALIZAÇÃO
// ===============================

mostrarProdutos();

atualizarCarrinho();
