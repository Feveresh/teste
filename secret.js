    document.addEventListener('keydown', function(event) {
      if (event.ctrlKey && event.key === 'p') { // Detecta Ctrl + P
        event.preventDefault();  // Impede a ação padrão do navegador (abrir o menu de impressão)
        const imagem = document.getElementById('logo');
        imagem.style.display = 'block'; // Exibe a imagem
      }
    });