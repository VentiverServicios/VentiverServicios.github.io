$(document).ready(function() {
    // Al hacer clic en "Más información", muestra la información
    $('#info-btn').click(function() {
      $('.info-section').slideDown("slow");  // Muestra la información
      $('.start-section').delay(600).fadeIn("slow");  // Muestra el botón de "Iniciar" después de la animación
      $(this).fadeOut("slow");  // Oculta el botón de "Más información"
    });
  });
  