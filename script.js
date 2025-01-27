const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeBtn = document.querySelector(".close");

// Abrir modal
loginBtn.addEventListener("click", () => {
    loginModal.style.display = "flex";
});

// Fechar modal
closeBtn.addEventListener("click", () => {
    loginModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});

// Simulação de login e cadastro com armazenamento local
document.getElementById("registerForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("registerEmail").value;
    const password = document.getElementById("registerPassword").value;

    localStorage.setItem(email, password);
    alert("Cadastro realizado com sucesso!");
    loginModal.style.display = "none";
});

document.getElementById("loginForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (localStorage.getItem(email) === password) {
        alert("Login realizado com sucesso!");
    } else {
        alert("E-mail ou senha inválidos!");
    }
    loginModal.style.display = "none";
});
