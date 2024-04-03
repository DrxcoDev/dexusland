document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón
    var btnMostrarAlerta = document.getElementById("mostrarkk");
    
    // Agregar event listener al botón
    btnMostrarAlerta.addEventListener("click", function() {
      showCustomAlert();
    });
  });
  
  // Función para mostrar la alerta personalizada
  function showCustomAlert() {
    document.getElementById("custom-alert").style.display = "block";
  }
  
  // Función para cerrar la alerta personalizada
  function closeAlert() {
    document.getElementById("custom-alert").style.display = "none";
}

function redirectToPage() {
    // Obtener el valor del campo de entrada de texto
    var inputValue = document.getElementById("inputText").value;
    
    // Redirigir a la página correspondiente según el valor
    switch(inputValue) {
      case "Rangos" || "rangos":
        window.location.href = "https://dexusland.tebex.io/category/rangos-1";
        break;
      case "Economia":
        window.location.href = "https://dexusland.tebex.io/category/economia";
        break;
      default:
        window.location.href = "otraPagina.html";
    }
}
  
  