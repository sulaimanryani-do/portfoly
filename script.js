const botonsFiltre = document.querySelectorAll('.filtre');
const targetes = document.querySelectorAll('#llista .fitxa');
const comptador = document.getElementById('comptador');

function filtrar(tipus) {
  let visibles = 0;

  targetes.forEach(targeta => {
    const categories = (targeta.dataset.category || '').split(' ');
    const encaixa = tipus === 'tots' || categories.includes(tipus);

    targeta.hidden = !encaixa;
    if (encaixa) visibles++;
  });

  comptador.textContent =
    visibles === 0 ? 'Cap projecte en aquesta categoria.'
    : visibles === 1 ? '1 projecte'
    : visibles + ' projectes';
}

botonsFiltre.forEach(boto => {
  boto.addEventListener('click', () => {
    botonsFiltre.forEach(b => b.setAttribute('aria-pressed', String(b === boto)));
    filtrar(boto.dataset.filter);
  });
});

filtrar('tots');

const botoAmunt = document.getElementById('amunt');

window.addEventListener('scroll', () => {
  botoAmunt.hidden = window.scrollY < 600;
}, { passive: true });

botoAmunt.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('any').textContent = new Date().getFullYear();
