document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const messageElement = document.getElementById('message');
  
    // Definir la fecha objetivo (19 de abril del 2024 a las 16:00)
    const targetDate = new Date('2024-07-27T13:30:00');
  
    function updateCountdown() {
      const currentDate = new Date();
      const timeDifference = targetDate - currentDate;
  
      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `<div class="num"><span class="special-font">${days}</span> <br> días</div><div class="num"><span class="special-font">${hours}</span> <br> hrs</div><div class="num"><span class="special-font">${minutes}</span> <br> min</div><div class="num"> <span class="special-font">${seconds}</span> <br> seg</div>`;
  
        // Ocultar el mensaje si está visible
        messageElement.style.display = 'none';
      } else {
        // Mostrar el mensaje y detener el contador
        countdownElement.innerHTML = '';
        messageElement.style.display = 'block';
        messageElement.textContent = '¡Hoy son mis XV, acompañame!';
      }
    }
  
    // Actualizar el contador cada segundo
    setInterval(updateCountdown, 1000);
  
    // Mostrar el contador por primera vez
    updateCountdown();
  });
  