document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    const productImage = document.getElementById('product-image');
    const productName = document.getElementById('product-name');
    const productPrice = document.getElementById('product-price');
    const productDescription = document.getElementById('product-description');
    
    if (!productId) {
        displayError();
        return;
    }

    fetch('../data/products.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);

            if (product) {
                document.title = `${product.nome} - EcoSustenta`;
                
                productImage.src = product.imagem;
                productImage.alt = product.nome;
                productName.textContent = product.nome;
                productPrice.textContent = product.preco;
                productDescription.textContent = product.descricao;
            } else {
                displayError();
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
            displayError();
        });
});

function displayError() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = `
        <div class="col-12 text-center">
            <h2 class="text-danger">Oops! Produto não encontrado.</h2>
            <p>Parece que o produto que você está procurando não existe.</p>
            <a href="categoria.html" class="btn btn-primary mt-3">Ver todos os produtos</a>
        </div>
    `;
}