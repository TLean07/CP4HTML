<h1 align="center">🌿 Projeto E-commerce EcoSustenta</h1>


<p align="center">
  <img src="https://img.shields.io/badge/Linguagens-HTML5-orange.svg" alt="Linguagens">
  <img src="https://img.shields.io/badge/Linguagens-CSS3-blue.svg" alt="Linguagens">
  <img src="https://img.shields.io/badge/Linguagens-JS-yellow.svg" alt="Linguagens">
  <img src="https://img.shields.io/badge/Framework-Bootstrap5-blueviolet.svg" alt="Framework">
</p>

> Projeto acadêmico de um e-commerce responsivo e dinâmico para produtos sustentáveis. A interface foi construída com HTML, CSS, Bootstrap e JavaScript, com foco em carregar o catálogo de produtos a partir de um arquivo JSON para simular uma aplicação real.

---

### 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [✨ Funcionalidades](#-funcionalidades)
- [🖼️ Demonstração Visual](#-demonstração-visual)
- [🚀 Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [📁 Estrutura de Arquivos](#-estrutura-de-arquivos)
- [🔧 Como Executar o Projeto](#-como-executar-o-projeto)
- [👨‍💻 Autores](#-autores)

---

### 📖 Sobre o Projeto

O **EcoSustenta** é um protótipo de loja virtual focada em produtos ecológicos, projetado para aplicar conceitos modernos de desenvolvimento front-end. O principal desafio foi criar uma experiência de usuário completa e dinâmica, abrangendo desde a página inicial até a finalização do contato, sem a necessidade de um back-end complexo.

O projeto demonstra o uso de JavaScript para manipular o DOM, buscando dados de um arquivo `JSON` local para popular dinamicamente as páginas de produtos. Isso permite que o catálogo da loja seja gerenciado de forma centralizada, tornando a manutenção e a escalabilidade muito mais simples. A estrutura foi toda pensada com base em componentes do **Bootstrap 5** e estilização personalizada para criar uma identidade visual única e agradável.

---

### ✨ Funcionalidades

- **Páginas Dinâmicas:** Os produtos nas páginas Home e de Categoria são carregados automaticamente a partir de um arquivo `products.json`.
- **Estrutura Completa de E-commerce:** Simula o fluxo de um usuário com 4 páginas principais: Home, Categoria (com filtros), Detalhes do Produto e Contato.
- **Código JavaScript Reutilizável:** Um único script (`product-renderer.js`) é responsável por renderizar produtos em diferentes páginas, com diferentes configurações (ex: limitar a 4 itens na home).
- **Design Totalmente Responsivo:** Utiliza o sistema de Grid do Bootstrap e CSS Grid para garantir uma experiência consistente em desktops, tablets e celulares.
- **Componentes Bootstrap:** Aplicação de Carrossel, Cards, Formulários e Navbar para um desenvolvimento ágil e uma interface coesa.
- **Interatividade:** Efeitos de `hover` e uma interface limpa que guia o usuário pela jornada de compra.

---

### 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **HTML5** | Estruturação semântica do conteúdo. |
| **CSS3** | Estilização avançada, Grid Layout e Flexbox. |
| **JavaScript (ES6+)**| Manipulação do DOM, `fetch` API para consumo de dados e lógica dinâmica. |
| **JSON** | Utilizado como um banco de dados local para armazenar o catálogo de produtos. |
| **Bootstrap 5** | Framework principal para layout responsivo, componentes e sistema de grid. |
| **Font Awesome**| Biblioteca de ícones para a interface. |
| **Google Fonts**| Importação das fontes "Poppins" e "Lato". |

---

### 📁 Estrutura de Arquivos

O projeto está organizado da seguinte forma para garantir a separação de responsabilidades:

```
CP4HTML/
├── index.html
├── README.md
└── src/
├── css/
│   └── style.css
├── data/
│   └── products.json
├── js/
│   ├── product-loader.js
│   └── product-renderer.js
└── pages/
├── categoria.html
├── contato.html
└── produto.html
```

---

### 🔧 Como Executar o Projeto

Para que o JavaScript consiga carregar o arquivo `products.json` localmente, o projeto **precisa ser executado a partir de um servidor local**. Apenas abrir o `index.html` diretamente no navegador irá gerar um erro de CORS (Cross-Origin Resource Sharing).

A forma mais fácil de fazer isso é usando a extensão **Live Server** no Visual Studio Code.

1.  **Instale o VS Code e a extensão "Live Server".**
2.  **Clone ou baixe o repositório:**
    ```bash
    git clone https://github.com/TLean07/CP4HTML.git
    ```
3.  **Abra a pasta do projeto** no VS Code.
4.  **Inicie o servidor:** Clique com o botão direito no arquivo `index.html` e selecione **"Open with Live Server"**. Ou clique no botão "Go Live" na barra de status do VS Code.
5.  O site será aberto no seu navegador padrão e funcionará corretamente.

---

### 👨‍💻 Autores

Este projeto foi desenvolvido com dedicação pela seguinte equipe:

| Nome Completo | Turma | RM |
| :--- | :---: | :---: |
| Leandro Afonso Silva Santos Junior | 1ESA | 561344 |
| Guilherme Barone Milani | 1ESA | 562114 |
| Luigi Escudero Grigoletto | 1ESA | 562505 |

---