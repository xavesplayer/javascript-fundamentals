/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*meu código (utilizando IA para estudos)*/
function copiar(id, botao) {
  const elemento = document.getElementById(id);
  const texto = elemento?.textContent?.trim() || '';

  const sucesso = () => {
    botao.innerText = 'Copiado ✓';
    setTimeout(() => {
      botao.innerText = 'Copiar';
    }, 1500);
  };

  const falha = () => {
    botao.innerText = 'Erro ao copiar';
    setTimeout(() => {
      botao.innerText = 'Copiar';
    }, 1500);
  };

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(texto)
      .then(sucesso)
      .catch(() => {
        fallbackCopy(texto, sucesso, falha);
      });
  } else {
    fallbackCopy(texto, sucesso, falha);
  }
}

function fallbackCopy(texto, sucesso, falha) {
  const tempInput = document.createElement('textarea');
  tempInput.value = texto;
  tempInput.setAttribute('readonly', '');
  tempInput.style.position = 'fixed';
  tempInput.style.left = '-9999px';
  document.body.appendChild(tempInput);
  tempInput.select();

  try {
    document.execCommand('copy');
    sucesso();
  } catch (error) {
    falha();
  } finally {
    document.body.removeChild(tempInput);
  }
}