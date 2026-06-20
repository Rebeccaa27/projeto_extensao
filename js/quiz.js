/* ══════════════════════════════════
   QUIZ.JS — Quiz Step-by-Step
   Projeto: Defesa Digital · UNINTER 2026
══════════════════════════════════ */

let qIdx    = 0;
let correct = 0;
let answered = false;
const LETTERS = ['A', 'B', 'C', 'D'];

/* Gera iniciais a partir do nome (ex: "Maria (amiga)" → "MA") */
function getInitials(name) {
  const clean = name.replace(/\s*\(.*\)\s*/g, '').trim();
  const parts = clean.split(' ');
  if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
  return clean.slice(0, 2).toUpperCase();
}

/* ── Abre o overlay e inicia ── */
function startQuiz() {
  qIdx     = 0;
  correct  = 0;
  answered = false;

  document.getElementById('quiz-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';

  document.getElementById('quiz-result-screen').style.display = 'none';
  document.getElementById('quiz-stage').style.display         = '';
  document.getElementById('quiz-bottom').style.display        = '';

  renderQuestion(false);
}

/* ── Fecha o overlay ── */
function closeQuiz() {
  document.getElementById('quiz-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Gera o HTML da simulação de canal ── */
function renderSimulacao(q) {
  const s = q.sim;
  if (!s) return '';

  switch (q.canal) {
    case 'whatsapp':
      return `
        <div class="sim-wrap canal-whatsapp">
          <div class="sim-head">
            <div class="sim-avatar">${getInitials(s.nome)}</div>
            <div>
              <div class="sim-head-name">${s.nome}</div>
              <div class="sim-head-sub">${s.status}</div>
            </div>
          </div>
          <div class="sim-body">
            ${s.msgs.map(m => `
              <div class="sim-bubble ${m.from}">
                ${m.text.replace(/\n/g, '<br>')}
                <div class="sim-bubble-time">${m.time}</div>
              </div>`).join('')}
          </div>
        </div>`;

    case 'sms':
      return `
        <div class="sim-wrap canal-sms">
          <div class="sim-head">
            <div class="sim-avatar" style="background:#333;">SMS</div>
            <div>
              <div class="sim-head-name">${s.remetente}</div>
              <div class="sim-head-sub">Mensagem de texto</div>
            </div>
          </div>
          <div class="sim-body">
            ${s.msgs.map(m => `
              <div class="sim-sms-meta">${m.time}</div>
              <div class="sim-sms-bubble">${m.text}</div>`).join('')}
          </div>
        </div>`;

    case 'ligacao':
      return `
        <div class="sim-wrap canal-ligacao">
          <div class="sim-call-screen">
            <div class="sim-call-avatar">📞</div>
            <div class="sim-call-number">${s.numero}</div>
            <div class="sim-call-label">${s.label}</div>
            <div class="sim-call-status"><span class="sim-call-dot"></span> Chamada em andamento</div>
          </div>
          <div class="sim-call-transcript">
            ${s.transcript.map(t => `<span class="speaker">${t.speaker}</span>${t.text}`).join('')}
          </div>
        </div>`;

    case 'email':
      return `
        <div class="sim-wrap canal-email">
          <div class="sim-email-head">
            <div class="sim-email-row"><span class="label">De:</span><span class="value">${s.de}</span></div>
            <div class="sim-email-row"><span class="label">Para:</span><span class="value">${s.para}</span></div>
            <div class="sim-email-subject">${s.assunto}</div>
          </div>
          <div class="sim-email-body">
            ${s.corpo}
            <br><a class="btn-fake" href="#" onclick="return false;">Confirmar Cadastro</a>
          </div>
        </div>`;

    case 'site':
      return `
        <div class="sim-wrap canal-site">
          <div class="sim-browser-bar">
            <div class="sim-browser-dots"><span></span><span></span><span></span></div>
            <div class="sim-browser-url">🔒 ${s.url}</div>
          </div>
          <div class="sim-site-body">
            <div class="site-title">${s.titulo}</div>
            <div class="site-price">${s.precoPromo} <small>${s.precoOriginal}</small></div>
            <div class="site-desc">${s.desc}</div>
          </div>
        </div>`;

    case 'alerta':
      return `
        <div class="sim-wrap canal-alerta">
          <div class="sim-alerta-box">
            <span class="sim-alerta-icon">🚨</span>
            <span class="sim-alerta-text">${s.texto}</span>
          </div>
        </div>`;

    default:
      return '';
  }
}

/* ── Renderiza pergunta com animação ── */
function renderQuestion(animate) {
  answered = false;
  const stage = document.getElementById('quiz-stage');

  const doRender = () => {
    const q     = QUIZ_QUESTIONS[qIdx];
    const total = QUIZ_QUESTIONS.length;

    const pct = ((qIdx + 1) / total) * 100;
    document.getElementById('quiz-bar-fill').style.width  = pct + '%';
    document.getElementById('quiz-top-label').textContent = `${qIdx + 1} / ${total}`;

    document.getElementById('quiz-cat').textContent = q.cat;

    const simHtml = renderSimulacao(q);
    document.getElementById('quiz-q-text').innerHTML = `
      ${simHtml}
      <div class="sim-prompt">${q.prompt || 'O que você faz?'}</div>
    `;

    document.getElementById('quiz-options').innerHTML = q.opts.map((o, i) => `
      <button class="quiz-opt" onclick="selectOption(this, ${o.ok})">
        <span class="quiz-opt-letter">${LETTERS[i]}</span>
        <span>${o.t}</span>
      </button>`).join('');

    const fb = document.getElementById('quiz-feedback');
    fb.style.display = 'none';
    fb.className     = 'quiz-feedback';
    document.getElementById('quiz-btn-next').style.display = 'none';

    stage.classList.remove('animating-out');
    stage.classList.add('animating-in');
    stage.addEventListener('animationend', () => {
      stage.classList.remove('animating-in');
    }, { once: true });
  };

  if (animate) {
    stage.classList.add('animating-out');
    stage.addEventListener('animationend', doRender, { once: true });
  } else {
    doRender();
  }
}

/* ── Usuário escolhe uma opção ── */
function selectOption(btn, isCorrect) {
  if (answered) return;
  answered = true;

  const q = QUIZ_QUESTIONS[qIdx];

  document.querySelectorAll('.quiz-opt').forEach((b, i) => {
    b.disabled = true;
    if (q.opts[i].ok) b.classList.add('correct');
  });

  const fb = document.getElementById('quiz-feedback');

  if (isCorrect) {
    btn.classList.add('correct');
    correct++;
    fb.className = 'quiz-feedback correct';
    document.getElementById('quiz-feedback-title').textContent = '✓ Muito bem! Você acertou.';
    document.getElementById('quiz-feedback-text').textContent  = q.feedCorrect;
  } else {
    btn.classList.add('wrong');
    fb.className = 'quiz-feedback wrong';
    document.getElementById('quiz-feedback-title').textContent = '⚠ Fique atento(a)!';
    document.getElementById('quiz-feedback-text').textContent  = q.feedWrong;
  }

  fb.style.display = 'block';
  document.getElementById('quiz-btn-next').style.display = 'flex';
}

/* ── Próxima pergunta ── */
function nextQuestion() {
  if (qIdx + 1 >= QUIZ_QUESTIONS.length) {
    showResult();
  } else {
    qIdx++;
    renderQuestion(true);
  }
}

/* ── Tela de resultado ── */
function showResult() {
  document.getElementById('quiz-stage').style.display  = 'none';
  document.getElementById('quiz-bottom').style.display = 'none';

  const rs = document.getElementById('quiz-result-screen');
  rs.style.display = 'block';

  const total = QUIZ_QUESTIONS.length;
  const pct   = Math.round((correct / total) * 100);

  const circumference = 2 * Math.PI * 55;
  const offset = circumference - (circumference * (pct / 100));
  document.getElementById('ring-fill').style.strokeDashoffset = circumference;
  setTimeout(() => {
    document.getElementById('ring-fill').style.strokeDashoffset = offset;
  }, 100);

  document.getElementById('ring-pct').textContent          = pct + '%';
  document.getElementById('quiz-result-score').textContent = `${correct} de ${total} corretas`;

  let level, title, msg, color;
  if (pct >= 80) {
    level = '🏆 Guardião Digital';
    title = 'Você está muito bem protegido!';
    msg   = 'Parabéns! Você demonstra que conhece os principais golpes e sabe como se defender. Compartilhe esse conhecimento com familiares e amigos.';
    color = 'var(--success)';
  } else if (pct >= 50) {
    level = '🛡️ No Caminho Certo';
    title = 'Você já percebe os perigos!';
    msg   = 'Bom trabalho! Você já identifica vários golpes, mas os criminosos estão sempre evoluindo. Leia nossas Dicas de Proteção para ficar ainda mais seguro.';
    color = 'var(--primary)';
  } else {
    level = '📚 Aprendiz em Segurança';
    title = 'Não se preocupe, estamos aqui para ajudar!';
    msg   = 'Muitas pessoas não têm acesso a essas informações. Com calma e leitura das nossas Dicas de Proteção, você vai aprender a se defender rapidinho. Tente o quiz de novo!';
    color = 'var(--accent-dark)';
  }

  document.getElementById('quiz-result-badge').textContent       = level;
  document.getElementById('quiz-result-badge').style.background  = color;
  document.getElementById('quiz-result-title').textContent       = title;
  document.getElementById('quiz-result-msg').textContent         = msg;
  document.getElementById('ring-fill').style.stroke              = color;
}

/* ── Fecha com ESC ── */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeQuiz();
});
