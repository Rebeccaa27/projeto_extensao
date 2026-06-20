/* ══════════════════════════════════
   APP.JS — Inicialização e render de golpes
   Projeto: Defesa Digital · UNINTER 2026
══════════════════════════════════ */

function renderGolpes() {
  const grid = document.getElementById('golpes-grid');
  grid.innerHTML = GOLPES.map(g => `
    <div class="golpe-card" onclick="openDetailModal(${g.id})" role="button" tabindex="0"
         onkeydown="if(event.key==='Enter') openDetailModal(${g.id})">
      <div class="golpe-card-top">
        <span class="badge badge-mono">${g.type}</span>
      </div>
      <div class="golpe-card-name">${g.name}</div>
      <div class="golpe-card-desc">${g.desc}</div>
      <div class="golpe-card-cta">Entender e se Prevenir <span>→</span></div>
    </div>
  `).join('');
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  // Nada a pré-carregar — tudo lazy
  console.log('Defesa Digital · UNINTER 2026 — carregado.');
});
