document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll(".category-buttons button");
    const categories = document.querySelectorAll(".category");

    categoryButtons.forEach(button => {
        button.addEventListener("click", function() {
            // Remover a classe ativa de todos os botões
            categoryButtons.forEach(b => b.classList.remove("active"));

            // Adicionar a classe ativa ao botão clicado
            this.classList.add("active");

            // Mostrar a categoria correspondente
            categories.forEach(category => {
                if (category.getAttribute("data-category") === this.getAttribute("data-category")) {
                    category.style.display = "block"; // Mostrar a categoria
                } else {
                    category.style.display = "none"; // Esconder outras categorias
                }
            });
        });
    });
});
