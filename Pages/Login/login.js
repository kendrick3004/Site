document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const loginButton = document.querySelector('button[type="submit"]');
    let submitCount = parseInt(localStorage.getItem('submitCount')) || 0;
    let isBlocked = localStorage.getItem('isBlocked') === 'true';

    const resetBlockState = () => {
        localStorage.setItem('isBlocked', 'false');
        localStorage.setItem('submitCount', '0');
        loginButton.disabled = false;
        errorMessage.textContent = 'Tente novamente';
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
        submitCount = 0; // Reseta o contador local também
    };

    if (isBlocked) {
        loginButton.disabled = true;
        errorMessage.textContent = 'Você foi bloqueado por excesso de tentativas. Tente novamente em 10 segundos.';
        setTimeout(resetBlockState, 10000);
    }

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (isBlocked) {
            errorMessage.textContent = 'Você foi bloqueado por excesso de tentativas. Tente novamente em 10 segundos.';
            return; // Impede o envio do formulário se estiver bloqueado
        }

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUsername = 'Root';
        const storedPassword = 'sudo';

        if (username === storedUsername && password === storedPassword) {
            submitCount = 0;
            localStorage.setItem('submitCount', submitCount);
            window.location.href = '../Betatec';
        } else {
            submitCount++;
            localStorage.setItem('submitCount', submitCount);

            if (submitCount === 1) {
                errorMessage.textContent = 'Será bloqueado após 2 tentativas';
            } else if (submitCount === 2) {
                errorMessage.textContent = 'Será bloqueado em 1 tentativa';
            } else if (submitCount === 3) {
                errorMessage.textContent = 'Você foi bloqueado por excesso de tentativas. Tente novamente em 10 segundos.';
                localStorage.setItem('isBlocked', 'true');
                loginButton.disabled = true;
                setTimeout(resetBlockState, 10000);
            }
        }
    });
});
