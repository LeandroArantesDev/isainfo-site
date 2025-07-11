document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formulario');
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    // Máscara de telefone
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
    });

    // Regex mais rigoroso
    const regexNome = /^[A-Za-zÀ-ÿ\s]{3,}$/;
    const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nomeValido = regexNome.test(nome.value.trim());
        const telefoneValido = regexTelefone.test(telefone.value.trim());
        const emailValido = regexEmail.test(email.value.trim());
        const mensagemValida = mensagem.value.trim().length >= 5;

        if (!nomeValido) {
            alert("Nome inválido. Use apenas letras e espaços.");
            nome.focus();
            return;
        }

        if (!telefoneValido) {
            alert("Telefone inválido. Use o formato (11) 99999-9999.");
            telefone.focus();
            return;
        }

        if (!emailValido) {
            alert("E-mail inválido. Verifique o formato.");
            email.focus();
            return;
        }

        if (!mensagemValida) {
            alert("Mensagem muito curta. Digite pelo menos 5 caracteres.");
            mensagem.focus();
            return;
        }

        // Enviar ou processar
        alert("Formulário validado com sucesso!");
        form.submit(); // Você pode trocar por envio via AJAX se quiser
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

// Menu mobile
const overlay = document.getElementById('overlay');
const menu = document.getElementById('menu');

function toggleMenu() {
    menu.classList.toggle('ativo');
    overlay.classList.toggle('ativo');
}