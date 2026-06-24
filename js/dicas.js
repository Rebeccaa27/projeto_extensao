'use strict';

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
    destaque: 'Desligar o telefone ou fechar uma mensagem suspeita não é grosseria. É proteção. Qualquer pessoa ou empresa legítima vai entender e esperar você ligar de volta.'
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
    destaque: 'Nunca compartilhe um código que chegou no seu celular por SMS com ninguém — nem com quem diz ser do banco, nem com quem diz ser do WhatsApp, nem com familiares pedindo ajuda.'
  },
  {
    id: 'dica-3',
    numero: '03',
    titulo: 'O que o seu banco nunca vai fazer',
    resumo: 'Conheça os limites do banco para identificar quando é golpe',
    topicos: [
      {
        pergunta: 'Meu banco pode ligar pedindo minha senha?',
        resposta: 'Não. Nenhum banco, de nenhum tamanho, liga pedindo que você fale ou que digite sua senha para cancelar uma compra ou desbloquear seu cartão. Se isso acontecer, desligue imediatamente. Depois ligue você mesmo para o número que está impresso atrás do seu cartão.'
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
    destaque: 'Banco não pede senha. Banco não manda buscar cartão. Banco não pede para instalar aplicativo. Banco não pede Pix. Se pedirem qualquer uma dessas coisas, desligue e ligue de volta pelo número do verso do seu cartão.'
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
    destaque: 'Você não precisa fazer tudo de uma vez. Comece por um ajuste hoje: ative a impressão digital para desbloquear o celular. É rápido, gratuito e já torna seu aparelho muito mais seguro.'
  }
];

/* ── Criação dos tópicos internos ── */
function criarTopico(topico, idxMod, idxTop) {
  const id = `topico-${idxMod}-${idxTop}`;
  return `
    <div class="topico" id="${id}">
      <button
        class="topico-gatilho"
        aria-expanded="false"
        onclick="alternarTopico('${id}')"
      >
        <span class="topico-texto">${topico.pergunta}</span>
        <span class="topico-seta" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </span>
      </button>
      <div class="topico-painel" id="${id}-painel">
        <div class="topico-painel-inner">
          <div class="topico-conteudo">
            <p>${topico.resposta}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── Criação de cada card de módulo ── */
function criarModulo(dica, idx) {
  const topicosHTML = dica.topicos
    .map((t, i) => criarTopico(t, idx, i))
    .join('');

  return `
    <div class="modulo-card" id="${dica.id}">
      <button
        class="modulo-gatilho"
        aria-expanded="false"
        onclick="alternarModulo('${dica.id}')"
      >
        <div class="modulo-gatilho-esquerda">
          <div class="modulo-numero" aria-hidden="true">${dica.numero}</div>
          <div class="modulo-textos">
            <div class="modulo-titulo">${dica.titulo}</div>
            <div class="modulo-resumo">${dica.resumo}</div>
          </div>
        </div>
        <div class="modulo-seta" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
      </button>
      <div class="modulo-painel">
        <div class="modulo-painel-inner">
          <div class="modulo-body">
            <div class="topicos-lista">${topicosHTML}</div>
            <div style="margin: 0 24px 24px; padding: 18px 22px; background: #fffbeb; border: 1.5px solid #fcd34d; border-left: 4px solid #f59e0b; border-radius: 10px;">
              <p style="font-weight: 700; color: #78350f; margin-bottom: 6px;">💡 Lembre-se</p>
              <p style="color: #78350f; font-size: 1rem; line-height: 1.7;">${dica.destaque}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

/* ── Renderização ── */
function renderizarDicas() {
  const container = document.getElementById('modulos-lista');
  if (!container) return;
  container.innerHTML = DICAS_DATA.map((d, i) => criarModulo(d, i)).join('');
}

/* ── Accordion de módulos ── */
function alternarModulo(id) {
  const card = document.getElementById(id);
  if (!card) return;
  const gatilho = card.querySelector('.modulo-gatilho');
  const aberto = card.classList.contains('aberto');

  // Fecha todos
  document.querySelectorAll('.modulo-card.aberto').forEach(c => {
    c.classList.remove('aberto');
    c.querySelector('.modulo-gatilho').setAttribute('aria-expanded', 'false');
  });

  // Abre este (se estava fechado)
  if (!aberto) {
    card.classList.add('aberto');
    gatilho.setAttribute('aria-expanded', 'true');
  }
}

/* ── Accordion de tópicos ── */
function alternarTopico(id) {
  const topico = document.getElementById(id);
  if (!topico) return;
  const gatilho = topico.querySelector('.topico-gatilho');
  const aberto = topico.classList.contains('aberto');

  // Fecha todos os tópicos do mesmo módulo
  const modulo = topico.closest('.modulo-card');
  modulo.querySelectorAll('.topico.aberto').forEach(t => {
    t.classList.remove('aberto');
    t.querySelector('.topico-gatilho').setAttribute('aria-expanded', 'false');
  });

  if (!aberto) {
    topico.classList.add('aberto');
    gatilho.setAttribute('aria-expanded', 'true');
  }
}

/* ── Inicialização ── */
document.addEventListener('DOMContentLoaded', () => {
  renderizarDicas();
});
