function mostrarBemVindo() {
    document.getElementById('entrada').classList.add('hidden');
    document.getElementById('bem-vindo').classList.remove('hidden');
    var nome = localStorage.getItem("nome");
    if (nome) {
        document.getElementById('usuario').textContent = nome;
    } else {
        window.location.reload(); 
    }
}

function inserirNome() {
    var nome = prompt("Digite seu nome:");
    if (nome) {
        localStorage.setItem("nome", nome);
        mostrarBemVindo();
    }
}

function sairDaConta() {
    localStorage.removeItem("nome");
    alert("Até mais!");
    document.getElementById('entrada').classList.remove('hidden');
    document.getElementById('bem-vindo').classList.add('hidden');
}

function acessar() {
    document.getElementById('entrada').classList.remove('hidden');
    document.getElementById('bem-vindo').classList.add('hidden');
}

if (localStorage.getItem("nome")) {
    mostrarBemVindo();
}
