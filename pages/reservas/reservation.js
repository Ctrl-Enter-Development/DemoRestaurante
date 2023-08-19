// reservation.js

$(document).ready(function() {
  $("#navbar-container").load("/componentes/navbar/navbar.html");
});
// contato.js

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('reservation-form');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Simulando uma resposta de sucesso (você pode substituir isso pelo código de envio real)
    const isSuccess = true;

    if (isSuccess) {
      Swal.fire({
        icon: 'success',
        title: 'Reservado com Sucesso!',
        text: 'Sua reserva foi efetuada com sucesso.',
        confirmButtonText: 'OK'
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Erro!',
        text: 'Ocorreu um erro ao enviar sua reserva. Por favor, tente novamente mais tarde.',
        confirmButtonText: 'OK'
      });
    }

    // Limpar o formulário ou fazer outras ações após o envio
    contactForm.reset();
  });
});
