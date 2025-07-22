// Loading
window.addEventListener('load', () => {
    const loader = document.getElementById('loader-wrapper');
    loader.style.opacity = '0';
    setTimeout(() => {
        loader.style.display = 'none';
    }, 750);
});

// Validação formulario
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');

    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    const erroNome = document.getElementById('erro-nome');
    const erroTelefone = document.getElementById('erro-telefone');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');

    const regexNome = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Máscara telefone
    telefone.addEventListener('input', () => {
        let valor = telefone.value.replace(/\D/g, '');
        if (valor.length > 11) valor = valor.slice(0, 11);

        if (valor.length > 6) {
            telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2, 7)}-${valor.slice(7)}`;
        } else if (valor.length > 2) {
            telefone.value = `(${valor.slice(0, 2)}) ${valor.slice(2)}`;
        } else if (valor.length > 0) {
            telefone.value = `(${valor}`;
        }
        validarCampo(telefone, regexTelefone, erroTelefone, 'Formato válido: (11) 91234-5678');
    });

    // Função para validar campos individualmente
    function validarCampo(campo, regex, campoErro, mensagemErro) {
        if (!regex.test(campo.value.trim())) {
            campoErro.textContent = mensagemErro;
            campo.classList.add('erro-borda');
            return false;
        } else {
            campoErro.textContent = '';
            campo.classList.remove('erro-borda');
            return true;
        }
    }

    // Evento ao digitar para todos os campos
    nome.addEventListener('input', () => {
        validarCampo(nome, regexNome, erroNome, 'Digite um nome válido (somente letras).');
    });

    email.addEventListener('input', () => {
        validarCampo(email, regexEmail, erroEmail, 'E-mail inválido.');
    });

    mensagem.addEventListener('input', () => {
        if (mensagem.value.trim().length < 5) {
            erroMensagem.textContent = 'Digite pelo menos 5 caracteres.';
            mensagem.classList.add('erro-borda');
        } else {
            erroMensagem.textContent = '';
            mensagem.classList.remove('erro-borda');
        }
    });

    // Validação completa ao enviar
    form.addEventListener('submit', (e) => {
        let valido = true;

        if (!validarCampo(nome, regexNome, erroNome, 'Digite um nome válido (somente letras).')) valido = false;
        if (!validarCampo(telefone, regexTelefone, erroTelefone, 'Formato válido: (11) 91234-5678')) valido = false;
        if (!validarCampo(email, regexEmail, erroEmail, 'E-mail inválido.')) valido = false;

        if (mensagem.value.trim().length < 5) {
            erroMensagem.textContent = 'Digite pelo menos 5 caracteres.';
            mensagem.classList.add('erro-borda');
            valido = false;
        }

        if (!valido) e.preventDefault();
    });
});


const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const imagens = [
        'img/img-hero.jpg',
        'img/slide1.jpg',
        'img/slide2.jpg',
        'img/slide3.jpg',
    ];

    let indice = 0;

    setInterval(() => {
        indice = (indice + 1) % imagens.length;

        const estiloAntes = document.createElement('style');
        estiloAntes.id = 'bg-dinamico';
        estiloAntes.innerHTML = `
            #hero::before {
                background-image: url('${imagens[indice]}');
            }
        `;

        // Remove o anterior se já existir
        const antigoEstilo = document.getElementById('bg-dinamico');
        if (antigoEstilo) {
            antigoEstilo.remove();
        }

        document.head.appendChild(estiloAntes);
    }, 3000);
});

// Menu mobile
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');

function toggleMenu() {
    menu.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}

// Menu do app

const menu_app = document.getElementById("menu-app");
const close_menu_app = document.getElementById("close-menu-app");

function toggleMenuApp() {
    menu_app.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}