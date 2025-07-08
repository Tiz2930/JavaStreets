// Este archivo se debe cargar en TODAS las páginas

window.addEventListener('DOMContentLoaded', () => {
    const modo = localStorage.getItem('modo');
  
    if (modo === 'dark') {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.add('light-mode');
    }
  });