function validarFormulario() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('mensagem').value;

  if (!nome || !email || !mensagem) {
    alert("Todos os campos são obrigatórios.");
    return false;
  }

  return true;
}



document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });
});



// jQuery
$(document).ready(function() {
    $('.accordion-header').on('click', function() {
        $(this).next('.accordion-content').slideToggle();
    });
});






document.addEventListener('DOMContentLoaded', function(){
    const jsHoverBox = document.getElementById('jsHoverBox');

    if (jsHoverBox) {
        jsHoverBox.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#aaddff';
            this.style.color = '#ff0000'
        });

        jsHoverBox.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#777';
            this.style.color = '#ffff00';
        });
    }
});





$(document).ready(function() {
    // ... (código do acordeão) ...

    // Efeito 2: Mudança de Cor ao Passar o Mouse
    $('#jqueryHoverBox').hover(
        // Função para quando o mouse entra (mouseenter)
        function() {
            $(this).css({
                'background-color': '#e0e0e0', // Nova cor
                'color': '#000' // Mudar cor do texto
            });
        },
        // Função para quando o mouse sai (mouseleave)
        function() {
            $(this).css({
                'background-color': '#aadd', // Volta à cor original
                'color': '#fff' // Volta à cor original do texto
            });
        }
    );
});