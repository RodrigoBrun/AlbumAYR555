// Esperar a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  mostrarPagina(paginaActual);
});

/* 🔢 Índice de la página actual */
let paginaActual = 0;

/* 🔍 Obtener todas las páginas */
const paginas = document.querySelectorAll('.pagina-album');

/* 🎯 Elementos de los botones */
const btnAnterior = document.getElementById('btn-anterior');
const btnSiguiente = document.getElementById('btn-siguiente');

/* 👉 Mostrar una página por índice */
function mostrarPagina(index) {
  if (index < 0 || index >= paginas.length) return;

  // Ocultar todas
  paginas.forEach(p => p.classList.remove('visible'));

  // Mostrar la actual
  paginas[index].classList.add('visible');

  // Mostrar/ocultar botones según posición
  if (btnAnterior) {
    btnAnterior.style.display = index === 0 ? 'none' : 'block';
  }

  if (btnSiguiente) {
    btnSiguiente.style.display = index === paginas.length - 1 ? 'none' : 'block';
  }
}

/* ➡ Ir a la siguiente página */
function paginaSiguiente() {
  if (paginaActual < paginas.length - 1) {
    paginaActual++;
    mostrarPagina(paginaActual);
  }
}

/* ⬅ Ir a la anterior */
function paginaAnterior() {
  if (paginaActual > 0) {
    paginaActual--;
    mostrarPagina(paginaActual);
  }
}

/* ⬇ Descargar la página actual como imagen */
function descargarPagina(id) {
  const nodo = document.getElementById(id);
  html2canvas(nodo).then(canvas => {
    const link = document.createElement('a');
    link.download = `${id}.png`;
    link.href = canvas.toDataURL();
    link.click();
  });
}
