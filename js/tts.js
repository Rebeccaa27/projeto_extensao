/* ================================================
   TTS.JS — Leitura por voz dinâmica
   Narra o conteúdo real de cada página:
   - index.html   → apresentação + quiz
   - golpes.html  → todos os golpes do array GOLPES
   - dicas.html   → todos os módulos do array MODULOS
   Projeto: Defesa Digital · UNINTER 2026
================================================ */

'use strict';

(function () {
  let speaking = false;
  let utterance = null;

  /* ——— Decide qual script montar ——— */
  function getPageScript() {
    const path = location.pathname;
    if (path.includes('golpes')) return buildGolpesScript();
    if (path.includes('dicas'))  return buildDicasScript();
    return buildIndexScript();
  }

  /* ——— INDEX ——— */
  function buildIndexScript() {
    return [
      'Bem-vindo ao Defesa Digital.',
      'Este site foi criado para ajudar você a se proteger de golpes na internet.',
      'Nesta página você pode iniciar o Teste de Segurança Digital,',
      'conhecer os golpes mais comuns no Brasil',
      'ou acessar as Dicas de Proteção Digital.',
      'Use os botões na tela para começar.'
    ].join(' ');
  }

  /* ——— GOLPES ——— */
  function buildGolpesScript() {
    const parts = [
      'Você está na página de Golpes Digitais.',
      'Aqui você aprende sobre os golpes mais comuns no Brasil e como se proteger.'
    ];

    const fonte = (typeof GOLPES !== 'undefined' && Array.isArray(GOLPES)) ? GOLPES : null;

    if (fonte) {
      fonte.forEach((g, i) => {
        parts.push(`Golpe número ${i + 1}: ${g.name}.`);
        parts.push(g.desc);
        if (g.signs && g.signs.length) {
          parts.push('Principais sinais de alerta:');
          g.signs.forEach(s => parts.push(s));
        }
        if (g.protect && g.protect.length) {
          parts.push('Como se proteger:');
          g.protect.forEach(p => parts.push(p));
        }
      });
    } else {
      // Fallback DOM
      document.querySelectorAll('.golpe-card').forEach((card, i) => {
        const nome = card.querySelector('.golpe-name, h3, h2');
        const desc = card.querySelector('.golpe-desc, p');
        if (nome) parts.push(`Golpe número ${i + 1}: ${nome.textContent.trim()}.`);
        if (desc) parts.push(desc.textContent.trim());
      });
    }

    parts.push('Clique em qualquer golpe para ver mais detalhes.');
    return parts.join(' ');
  }

  /* ——— DICAS ——— */
  function buildDicasScript() {
    const parts = [
      'Você está na página de Dicas de Proteção Digital.',
      'Aqui estão orientações práticas para manter você e sua família seguros na internet.'
    ];

    // Tenta usar o array MODULOS (declarado no próprio dicas.html)
    const fonte = (typeof MODULOS !== 'undefined' && Array.isArray(MODULOS)) ? MODULOS : null;

    if (fonte) {
      fonte.forEach((mod, i) => {
        parts.push(`Módulo ${i + 1}: ${mod.titulo}.`);
        parts.push(mod.intro);
        mod.topicos.forEach(t => {
          parts.push(t.pergunta);
          // Remove tags HTML das respostas antes de narrar
          const tmp = document.createElement('div');
          tmp.innerHTML = t.resposta;
          parts.push(tmp.textContent || tmp.innerText || '');
        });
        parts.push(`${mod.destaque.titulo}: ${mod.destaque.texto}`);
      });
    } else {
      // Fallback DOM
      document.querySelectorAll('.modulo-card').forEach((card, i) => {
        const titulo = card.querySelector('.modulo-titulo');
        const destaque = card.querySelector('.modulo-destaque-texto');
        if (titulo) parts.push(`Módulo ${i + 1}: ${titulo.textContent.trim()}.`);
        if (destaque) parts.push(destaque.textContent.trim());
      });
    }

    return parts.join(' ');
  }

  /* ——— Controle do botão ——— */
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

    utterance.onend = () => { speaking = false; updateBtn(btn, false); };
    utterance.onerror = () => { speaking = false; updateBtn(btn, false); };

    window.speechSynthesis.speak(utterance);
    speaking = true;
    updateBtn(btn, true);
  };

  function updateBtn(btn, isSpeaking) {
    if (!btn) return;
    if (isSpeaking) {
      btn.classList.add('speaking');
      btn.setAttribute('aria-label', 'Parar leitura');
      btn.innerHTML = `<span aria-hidden="true">⏹</span> Parar`;
    } else {
      btn.classList.remove('speaking');
      btn.setAttribute('aria-label', 'Ouvir conteúdo desta página');
      btn.innerHTML = `<span aria-hidden="true">🔊</span> Ouvir`;
    }
  }

  window.addEventListener('beforeunload', () => {
    if (speaking) window.speechSynthesis.cancel();
  });
})();
