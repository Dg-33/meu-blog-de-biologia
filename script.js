// Seleção de elementos do DOM
const modal = document.getElementById("modal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");

// Abrir o modal de login
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
});

// Fechar o modal ao clicar no "X"
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora dele
window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Interceptar o envio do formulário de login
loginForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // Prevenir o comportamento padrão do envio do formulário

    // Capturar os valores do formulário
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Enviar os dados para o backend usando fetch
        const response = await fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        // Tratar a resposta
        if (response.ok) {
            const message = await response.text();
            alert(message); // Exibir uma mensagem de sucesso
            modal.style.display = "none"; // Fechar o modal
        } else {
            const errorMessage = await response.text();
            alert(`Erro: ${errorMessage}`); // Exibir mensagem de erro
        }
    } catch (error) {
        console.error("Erro no login:", error);
        alert("Erro ao conectar ao servidor. Tente novamente mais tarde.");
    }
});
// Script para Gerenciar Comentários
document.getElementById("commentsForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita recarregar a página

    // Capturar os valores dos campos
    const name = document.getElementById("name").value;
    const comment = document.getElementById("comment").value;

    // Criar o elemento do comentário
    const commentSection = document.getElementById("commentsDisplay");
    const commentDiv = document.createElement("div");
    commentDiv.innerHTML = `
        <strong>${name}:</strong>
        <p>${comment}</p>
        <hr>
    `;
    commentSection.appendChild(commentDiv);

    // Limpar os campos
    document.getElementById("commentsForm").reset();
});

