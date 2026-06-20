/* ══════════════════════════════════
   DICAS.JS — Accordion de dicas de proteção
   Padrão: Progressive Disclosure (Accordion/Sanfona)
   Projeto: Defesa Digital · UNINTER 2026
   Público-alvo: Idosos e pessoas com baixa familiaridade digital
══════════════════════════════════ */

'use strict';

/**
 * Dados completos das dicas. Separados do HTML para facilitar
 * manutenção e possível integração futura com CMS.
 */
const DICAS_DATA = [
  {
    id: 'dica-1',
    numero: '01',
    titulo: 'A regra mais importante: pare antes de agir',
    resumo: 'Como evitar agir no impulso — a arma mais eficaz contra golpistas',
    topicos: [
      {
        pergunta: 'Por que os golpistas criam tanta urgência?',
        resposta: 'Quando estamos com pressa ou com medo, tomamos decisões sem pensar direito. Os golpistas sabem disso e usam frases como "é agora ou você perde tudo" ou "sua conta será bloqueada em 5 minutos" justamente para que você aja sem refletir. A urgência quase sempre é falsa.'
      },
      {
        pergunta: 'O que fazer quando alguém pede dinheiro com urgência?',
        resposta: 'Pare tudo. Desligue o telefone ou feche a mensagem. Espere de 5 a 10 minutos. Depois ligue você mesmo para a pessoa, usando o número que você já tem salvo — não o número que te ligou ou que te mandaram. Uma urgência real aguenta essa pausa. A urgência do golpista não existe quando você desliga.'
      },
      {
        pergunta: 'Promoções boas demais merecem desconfiança?',
        resposta: 'Sim, sempre. Se um produto vale R$ 500 e está sendo oferecido por R$ 50, pergunte-se: por que a loja estaria vendendo com prejuízo? A resposta é simples — ela não está. Preços muito abaixo do mercado são iscas para roubar seus dados de pagamento ou seu dinheiro via Pix.'
      }
    ],
    destaque: {
      titulo: 'Lembre-se sempre',
      texto: 'Desligar o telefone ou fechar uma mensagem suspeita não é grosseria. É proteção. Qualquer pessoa ou empresa legítima vai entender e esperar você ligar de volta.'
    }
  },
  {
    id: 'dica-2',
    numero: '02',
    titulo: 'Senhas e códigos: as chaves da sua vida digital',
    resumo: 'Como proteger seus acessos sem complicação',
    topicos: [
      {
        pergunta: 'O que é aquele código de 6 números que chega por SMS?',
        resposta: 'Esse código é como a chave de uma porta. Ele chega no seu celular para confirmar que é você quem está tentando entrar em alguma conta — como o WhatsApp, o banco ou o e-mail. Se alguém pedir esse código, quer entrar na sua conta no lugar de você. Não existe nenhuma situação em que uma empresa legítima peça esse código.'
      },
      {
        pergunta: 'Como guardar senhas de forma segura e simples?',
        resposta: 'Anote suas senhas em um caderno físico, guardado em casa em lugar seguro. Isso é muito mais seguro do que guardar no celular, que pode ser roubado. Use senhas diferentes para o banco e para as redes sociais. Evite datas de aniversário, nomes de filhos ou números em sequência (como 1234), pois são fáceis de adivinhar.'
      },
      {
        pergunta: 'Como ativar a verificação em duas etapas no WhatsApp?',
        resposta: 'Abra o WhatsApp. Toque nos três pontinhos no canto superior direito. Vá em "Ajustes" (ou "Configurações"). Toque em "Conta". Toque em "Verificação em duas etapas". Toque em "Ativar" e crie um PIN de 6 números que você vai lembrar. Anote esse PIN no seu caderno. Com isso, mesmo que alguém consiga o código de SMS, não conseguirá entrar na sua conta.'
      }
    ],
    destaque: {
      titulo: 'Regra de ouro das senhas',
      texto: 'Nunca compartilhe um código que chegou no seu celular por SMS com ninguém — nem com quem diz ser do banco, nem com quem diz ser do WhatsApp, nem com familiares pedindo ajuda.'
    }
  },
  {
    id: 'dica-3',
    numero: '03',
    titulo: 'O que o seu banco nunca vai fazer',
    resumo: 'Conheça os limites do banco para identificar quando é golpe',
    topicos: [
      {
        pergunta: 'Meu banco pode ligar pedindo minha senha?',
        resposta: 'Não. Nenhum banco, de nenhum tamanho, liga pedindo que você fale ou que digit sua senha para cancelar uma compra ou desbloquear seu cartão. Se isso acontecer, desligue imediatamente. Depois ligue você mesmo para o número que está impresso atrás do seu cartão.'
      },
      {
        pergunta: 'O banco pode mandar alguém buscar meu cartão em casa?',
        resposta: 'Não, isso não existe. Nenhum banco manda motoboy ou funcionário buscar cartão na casa do cliente, mesmo que digam que o cartão está "danificado", "comprometido" ou "bloqueado". Se você receber essa ligação, desligue. Corte o cartão ao meio e ligue para o banco pelo número no verso do cartão.'
      },
      {
        pergunta: 'O banco pode pedir para eu instalar um aplicativo pelo telefone?',
        resposta: 'Não. Bancos não ligam pedindo para você instalar nenhum aplicativo. Se alguém ligar dizendo ser do banco e pedir para instalar um "módulo de segurança" ou "antivírus do banco", recuse e desligue. Esses aplicativos são programas espiões que registram tudo que você digita, incluindo senhas.'
      },
      {
        pergunta: 'O banco pode pedir um Pix para proteger meu dinheiro?',
        resposta: 'Não, isso nunca acontece. Frases como "faça um Pix para uma conta segura do banco para proteger seu saldo" são sempre golpe. Bancos não pedem transferências para cancelar fraudes. Se você fizer esse Pix, o dinheiro vai direto para os criminosos e não volta.'
      }
    ],
    destaque: {
      titulo: 'A regra que resume tudo',
      texto: 'Banco não pede senha. Banco não manda buscar cartão. Banco não pede para instalar aplicativo. Banco não pede Pix. Se pedirem qualquer uma dessas coisas, desligue e ligue de volta pelo número do verso do seu cartão.'
    }
  },
  {
    id: 'dica-4',
    numero: '04',
    titulo: 'Três ajustes no celular que aumentam muito sua segurança',
    resumo: 'Configurações simples que você faz uma vez e protegem para sempre',
    topicos: [
      {
        pergunta: 'Por que usar digital ou reconhecimento de rosto para desbloquear?',
        resposta: 'Quando você usa apenas um PIN numérico para desbloquear o celular, qualquer pessoa que veja você digitando pode memorizá-lo. Com a impressão digital ou o reconhecimento de rosto, só você consegue desbloquear. Para configurar: vá em "Configurações" do celular, depois em "Segurança" ou "Tela de bloqueio", e ative a biometria.'
      },
      {
        pergunta: 'Como impedir que alguém leia meus SMS na tela bloqueada?',
        resposta: 'Quando chega um código de segurança por SMS, ele pode aparecer na tela do celular mesmo bloqueado — e qualquer pessoa que estiver perto pode ver. Para evitar isso, vá em "Configurações", depois em "Notificações" ou "Som e notificações", e desative a opção de mostrar o conteúdo das mensagens na tela bloqueada.'
      },
      {
        pergunta: 'Por que não usar o Wi-Fi de shoppings ou restaurantes para acessar o banco?',
        resposta: 'Redes Wi-Fi abertas, sem senha, podem ser monitoradas por pessoas mal-intencionadas que conseguem ver tudo o que você acessa. Para qualquer operação no banco — consulta de saldo, Pix, pagamento — use sempre os dados do seu chip de celular (o 4G ou 5G). Se estiver em casa, o Wi-Fi da sua casa com senha é seguro.'
      }
    ],
    destaque: {
      titulo: 'Uma dica para hoje',
      texto: 'Você não precisa fazer tudo de uma vez. Comece por um ajuste hoje: ative a impressão digital para desbloquear o celular. É rápido, gratuito e já torna seu aparelho muito mais seguro.'
    }
  }
];

/* ── Renderização ── */

/**
 * Cria o HTML de um tópico (pergunta + resposta) dentro do accordion.
 * @param {object} topico
 * @param {number} idxModulo
 * @param {number} idxTopico
 */
function criarTopico(topico, idxModulo, idxTopico) {
  const id = `topico-${idxModulo}-${idxTopico}`;
  return `
    <div class="topico" id="${id}">
      <button
        class="topico-gatilho"
        aria-expanded="false"
        aria-controls="${id}-painel"
        onclick="alternarTopico('${id}')"
      >
        <span class="topico-pergunta">${topico.pergunta}</span>
        <span class="topico-indicador" aria-hidden="true"></span>
      </button>
      <div class="topico-painel" id="${id}-painel" role="region" aria-hidden="true">
        <div class="topico-conteudo">
          <p>${topico.resposta}</p>
        </div>
      </div>
    </div>
  `;
}

/**
 * Cria o HTML completo de um módulo de dica.
 * @param {object} dica
 * @param {number} idx
 */
function criarModulo(dica, idx) {
  const topicosHTML = dica.topicos
    .map((t, idxT) => criarTopico(t, idx, idxT))
    .join('');

  return `
    <section class="dica-modulo" id="${dica.id}">
      <div class="modulo-cabecalho">
        <div class="modulo-numero" aria-hidden="true">${dica.numero}</div>
        <div class="modulo-textos">
          <h2 class="modulo-titulo">${dica.titulo}</h2>
          <p class="modulo-resumo">${dica.resumo}</p>
        </div>
      </div>

      <div class="topicos-lista" role="list">
        ${topicosHTML}
      </div>

      <div class="modulo-destaque" role="note">
        <p class="modulo-destaque-titulo">${dica.destaque.titulo}</p>
        <p class="modulo-destaque-texto">${dica.destaque.texto}</p>
      </div>
    </section>
  `;
}

/**
 * Renderiza todos os módulos na página.
 */
function renderizarDicas() {
  const container = document.getElementById('dicas-container');
  if (!container) return;

  container.innerHTML = DICAS_DATA
    .map((d, i) => criarModulo(d, i))
    .join('<hr class="modulo-separador" aria-hidden="true">');
}

/* ── Lógica do Accordion ── */

/**
 * Abre ou fecha um tópico pelo seu ID.
 * Fecha todos os outros tópicos do mesmo módulo (comportamento accordion).
 * @param {string} id - ID do elemento .topico
 */
function alternarTopico(id) {
  const topico  = document.getElementById(id);
  if (!topico) return;

  const painel   = document.getElementById(id + '-painel');
  const gatilho  = topico.querySelector('.topico-gatilho');
  const estaAberto = gatilho.getAttribute('aria-expanded') === 'true';

  // Fecha todos os tópicos do mesmo módulo pai
  const modulo = topico.closest('.dica-modulo');
  modulo.querySelectorAll('.topico').forEach(t => fecharTopico(t));

  // Se estava fechado, abre
  if (!estaAberto) {
    abrirTopico(topico, painel, gatilho);
  }
}

function abrirTopico(topico, painel, gatilho) {
  gatilho.setAttribute('aria-expanded', 'true');
  painel.setAttribute('aria-hidden', 'false');

  // Slide down: altura real para animar
  painel.style.maxHeight = painel.scrollHeight + 'px';
  topico.classList.add('aberto');
}

function fecharTopico(topico) {
  const painel  = topico.querySelector('.topico-painel');
  const gatilho = topico.querySelector('.topico-gatilho');
  if (!painel || !gatilho) return;

  gatilho.setAttribute('aria-expanded', 'false');
  painel.setAttribute('aria-hidden', 'true');
  painel.style.maxHeight = '0';
  topico.classList.remove('aberto');
}

/* ── Checklist ── */

function alternarItem(el) {
  el.classList.toggle('marcado');
  el.setAttribute(
    'aria-checked',
    el.classList.contains('marcado') ? 'true' : 'false'
  );
  atualizarProgresso();
}

function atualizarProgresso() {
  const total    = document.querySelectorAll('.checklist-item').length;
  const marcados = document.querySelectorAll('.checklist-item.marcado').length;
  const pct      = total > 0 ? Math.round((marcados / total) * 100) : 0;

  document.getElementById('progresso-barra').style.width = pct + '%';
  document.getElementById('progresso-texto').textContent = `${marcados} de ${total} itens concluídos`;
}

/* ── Inicialização ── */

document.addEventListener('DOMContentLoaded', () => {
  renderizarDicas();
  atualizarProgresso();
});
