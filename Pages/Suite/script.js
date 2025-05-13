// Espera o DOM ser carregado
document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão de alternância
    const switchToggle = document.querySelector('.switch-toggle');
    let darkModeToggleCount = 0;

    // Ativa o modo escuro automaticamente ao carregar a página
    document.body.classList.add('dark-mode');
    switchToggle.classList.add('switch-toggle-right');

    // Torna os links sociais visíveis ao carregar a página
    const socialLinks = document.getElementById('social-links');
    socialLinks.classList.add('visible');

    // Adiciona um evento de clique ao botão de alternância
    switchToggle.addEventListener('click', () => {
        // Alterna a classe 'dark-mode' no corpo do documento
        document.body.classList.toggle('dark-mode');
        
        // Alterna a classe 'switch-toggle-right' no botão de alternância
        switchToggle.classList.toggle('switch-toggle-right');
        
        // Adiciona animação ao botão de alternância
        switchToggle.style.transition = 'transform 0.3s, background-color 0.3s';

        // Incrementa o contador de alternâncias para o modo escuro
        if (document.body.classList.contains('dark-mode')) {
            darkModeToggleCount++;
        }

        // Adiciona o botão de login após duas alternâncias para o modo escuro
        if (darkModeToggleCount === 2) {
            const linksContainer = document.querySelector('.links');
            // Verifica se o botão de login já existe
            if (!document.querySelector('.link-item.login')) {
                const loginButton = document.createElement('div');
                loginButton.className = 'link-item login';
                loginButton.textContent = 'Login';
                loginButton.addEventListener('click', () => {
                    window.location.href = '../Login/index.html';
                });
                linksContainer.appendChild(loginButton);
            }
        }
    });
});
