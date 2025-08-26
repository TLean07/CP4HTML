document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');

    if (!productGrid) {
        return;
    }

    fetch('../data/products.json')
        .then(response => response.json())
        .then(products => {
            let productsHTML = '';

            products.forEach(product => {
                productsHTML += `
                    <div class="col">
                        <div class="card h-100 product-card">
                            <img src="${product.imagem}" class="card-img-top" alt="${product.nome}">
                            <div class="card-body text-center">
                                <h5 class="card-title">${product.nome}</h5>
                                <p class="card-text price">${product.preco}</p>
                                <a href="./produto.html?id=${product.id}" class="btn btn-primary">Ver Produto</a>
                            </div>
                        </div>
                    </div>
                `;
            });

            productGrid.innerHTML = productsHTML;
        })
        .catch(error => {
            console.error('Erro ao carregar os produtos:', error);
            productGrid.innerHTML = '<p class="text-danger text-center">Não foi possível carregar os produtos. Tente novamente mais tarde.</p>';
        });
});