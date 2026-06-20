/* ══════════════════════════════════
   MODAL.JS — Lógica de modais
   Projeto: Defesa Digital · UNINTER 2026
══════════════════════════════════ */

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Lazy render
  if (id === 'golpes-box' && !document.getElementById('golpes-grid').hasChildNodes()) {
    renderGolpes();
  }
  if (id === 'dicas-box' && !document.getElementById('dicas-carousel').hasChildNodes()) {
    renderDicas();
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.remove('open');
  // Só libera scroll se não houver outro modal aberto
  const anyOpen = document.querySelector('.full-modal.open, .detail-modal.open');
  if (!anyOpen) document.body.style.overflow = '';
}

function openDetailModal(golpeId) {
  const g = GOLPES[golpeId];
  if (!g) return;

  document.getElementById('detail-type').textContent  = g.type;
  document.getElementById('detail-title').textContent = g.name;
  document.getElementById('detail-desc').textContent  = g.desc;

  document.getElementById('detail-signs').innerHTML = g.signs
    .map(s => `
      <div class="detail-item detail-item--alert">
        <span class="detail-item-icon">⚠️</span>
        <span>${s}</span>
      </div>`)
    .join('');

  document.getElementById('detail-protect').innerHTML = g.protect
    .map(p => `
      <div class="detail-item detail-item--safe">
        <span class="detail-item-icon">✅</span>
        <span>${p}</span>
      </div>`)
    .join('');

  document.getElementById('golpe-detail').classList.add('open');
}

function closeDetailModal() {
  document.getElementById('golpe-detail').classList.remove('open');
}

// Fechar modais com ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    // Prioridade: fecha o modal de detalhe primeiro
    if (document.getElementById('golpe-detail').classList.contains('open')) {
      closeDetailModal();
    } else {
      document.querySelectorAll('.full-modal.open').forEach(m => {
        closeModal(m.id);
      });
    }
  }
});
