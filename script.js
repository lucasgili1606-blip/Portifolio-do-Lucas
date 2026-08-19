/* =========================================================
   MENU MOBILE
   ========================================================= */
const navToggle = document.getElementById('navToggle');
const mobileMenu = document.getElementById('mobileMenu');
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

/* =========================================================
   FILTRO DE PORTFÓLIO
   ========================================================= */
const filterBtns = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.p-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    items.forEach(item => {
      const match = filter === 'all' || item.dataset.cat === filter;
      item.classList.toggle('hide', !match);
    });
  });
});

/* =========================================================
   MODAL DE PORTFÓLIO
   ========================================================= */
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

items.forEach(item => {
  item.addEventListener('click', () => {
    const type = item.dataset.type;
    const src = item.dataset.src;
    const title = item.dataset.title;
    const desc = item.dataset.desc;

    if (type === 'video') {
      modalContent.innerHTML = `
        <video controls poster="${item.querySelector('img').src}" ${src ? `src="${src}"` : ''}></video>
        <div class="modal-info"><h3 style="font-family:'Montserrat',sans-serif;margin-bottom:6px;">${title}</h3><p style="color:var(--muted);font-size:14px;">${desc}</p></div>
      `;
    } else {
      modalContent.innerHTML = `
        <img src="${src}" alt="${title}">
        <div class="modal-info"><h3 style="font-family:'Montserrat',sans-serif;margin-bottom:6px;">${title}</h3><p style="color:var(--muted);font-size:14px;">${desc}</p></div>
      `;
    }
    modal.classList.add('open');
  });
});

function closeModal(){ modal.classList.remove('open'); modalContent.innerHTML=''; }
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

/* =========================================================
   FORMULÁRIO DE ORÇAMENTO
   ========================================================= */
const quoteForm = document.getElementById('quoteForm');
const formMsg = document.getElementById('formMsg');

quoteForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Este envio é apenas front-end. Para receber os dados de verdade,
  // conecte este formulário a um serviço como Formspree, EmailJS,
  // Google Forms ou seu próprio backend.
  const name = document.getElementById('f-name').value;
  formMsg.textContent = `Obrigado, ${name}! Recebemos seu pedido e vamos te chamar no WhatsApp em breve.`;
  formMsg.classList.add('show', 'ok');
  quoteForm.reset();
});
