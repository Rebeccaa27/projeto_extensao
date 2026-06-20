/* ══════════════════════════════════
   TTS.JS — Leitura por voz dinâmica
   Narra o conteúdo real da página atual
   Projeto: Defesa Digital · UNINTER 2026
══════════════════════════════════ */

'use strict';

(function () {
  let speaking = false;
  let utterance = null;

  /* ── Detecta qual página estamos ── */
  function getPageScript() {
    const path = location.pathname;

    if (path.includes('golpes')) return buildGolpesScript();
    if (path.includes('dicas'))  return buildDicasScript();
    return buildIndexScript();
  }

  /* ── INDEX ── */
  function buildIndexScript() {
    return [
      'Bem-vindo ao Defesa Digital.',
      'Este site foi criado para ajudar você a se proteger de golpes na internet.',
      'Na página inicial, você pode fazer o Teste de Segurança,',
      'conhecer os golpes mais comuns no Brasil,',
      'ou acessar as Dicas de Proteção Digital.',
      'Para começar, use os botões na tela.'
    ].join(' ');
  }

  /* ── GOLPES ── */
  function buildGolpesScript() {
    const parts = [
      'Você está na página de Golpes Digitais.',
      'Aqui você vai aprender sobre os golpes mais comuns no Brasil e como se proteger.'
    ];

    // Tenta ler os dados GOLPES se o data.js estiver carregado
    if (typeof GOLPES !== 'undefined' && Array.isArray(GOLPES)) {
      GOLPES.forEach((g, i) => {
        parts.push(`Golpe ${i + 1}: ${g.name}.`);
        parts.push(g.desc);
        parts.push('Principais sinais de alerta:');
        g.signs.forEach(s => parts.push(s));
        parts.push('Como se proteger:');
        g.protect.forEach(p => parts.push(p));
      });
    } else {
      // Fallback: lê o que estiver visível no DOM
      document.querySelectorAll('.golpe-name').forEach(el => {
        parts.push(el.textContent.trim() + '.');
      });
      document.querySelectorAll('.golpe-desc').forEach(el => {
        parts.push(el.textContent.trim());
      });
    }

    parts.push('Para saber mais sobre cada golpe, clique nele na lista.');
    return parts.join(' ');
  }

  /* ── DICAS ── */
  function buildDicasScript() {
    const parts = [
      'Você está na página de Dicas de Proteção Digital.',
      'Aqui estão orientações práticas para manter você e sua família seguros na internet.'
    ];

    // Tenta ler DICAS_DATA se o dicas.js estiver carregado
    if (typeof DICAS_DATA !== 'undefined' && Array.isArray(DICAS_DATA)) {
      DICAS_DATA.forEach((d, i) => {
        parts.push(`Dica ${i + 1}: ${d.titulo}.`);
        parts.push(d.resumo + '.');
        d.topicos.forEach(t => {
          parts.push(t.pergunta);
          parts.push(t.resposta);
        });
        parts.push(d.destaque.titulo + ': ' + d.destaque.texto);
      });
    } else {
      // Fallback DOM
      document.querySelectorAll('.modulo-titulo').forEach(el => {
        parts.push(el.textContent.trim() + '.');
      });
      document.querySelectorAll('.modulo-destaque-texto').forEach(el => {
        parts.push(el.textContent.trim());
      });
    }

    return parts.join(' ');
  }

  /* ── Controle do botão ── */
  window.toggleTTS = function () {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não suporta leitura por voz.');
      return;
    }

    const btn = document.getElementById('tts-btn');

    if (speaking) {
      window.speechSynthesis.cancel();
      speaking = false;
      updateBtn(btn, false);
      return;
    }

    const text = getPageScript();
    utterance = new SpeechSynthesisUtterance(text);
    utterance.lang  = 'pt-BR';
    utterance.rate  = 0.88;
    utterance.pitch = 1;

    utterance.onend = function () {
      speaking = false;
      updateBtn(btn, false);
    };
    utterance.onerror = function () {
      speaking = false;
      updateBtn(btn, false);
    };

    window.speechSynthesis.speak(utterance);
    speaking = true;
    updateBtn(btn, true);
  };

  function updateBtn(btn, isSpeaking) {
    if (!btn) return;
    if (isSpeaking) {
      btn.classList.add('speaking');
      btn.innerHTML = '<span>⏹</span> Parar';
      btn.setAttribute('aria-label', 'Parar leitura');
    } else {
      btn.classList.remove('speaking');
      btn.innerHTML = '<span>🔊</span> Ouvir';
      btn.setAttribute('aria-label', 'Ouvir conteúdo da página');
    }
  }

  // Para a leitura se o usuário navegar para fora
  window.addEventListener('beforeunload', () => {
    if (speaking) window.speechSynthesis.cancel();
  });
})();
