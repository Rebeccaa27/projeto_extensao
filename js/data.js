/* ══════════════════════════════════
   DATA.JS — Dados da aplicação
   Projeto: Defesa Digital · UNINTER 2026
══════════════════════════════════ */

const GOLPES = [
  {
    id: 0,
    type: 'Clonagem',
    name: 'Golpe do Falso WhatsApp',
    desc: 'O golpista finge ser alguém que você conhece (usando foto e nome) ou rouba sua conta para pedir dinheiro emprestado ou Pix urgente para seus amigos e familiares.',
    signs: [
      'Mensagem de um número diferente dizendo que "trocou de celular".',
      'A pessoa diz que é uma emergência e pede que você não ligue, apenas mande a mensagem.',
      'A conta de destino do Pix está no nome de uma pessoa desconhecida.'
    ],
    protect: [
      'Ative a "Confirmação em Duas Etapas" nas configurações do seu WhatsApp.',
      'Sempre ligue (chamada de voz) para o número antigo da pessoa para confirmar a história.',
      'Nunca compartilhe códigos que chegam por SMS no seu celular com ninguém.'
    ]
  },
  {
    id: 1,
    type: 'Sites Falsos',
    name: 'Mensagens Falsas (Correios e Bancos)',
    desc: 'Os criminosos enviam mensagens por SMS ou e-mail que parecem muito com as de empresas famosas, dizendo que você tem uma taxa pendente, pontos expirando ou conta bloqueada.',
    signs: [
      'Mensagem dizendo que sua encomenda internacional está presa e precisa pagar taxa.',
      'Links que têm nomes estranhos ou erros de digitação (ex: banco-seguranca.net).',
      'Páginas que, assim que você clica, já pedem a senha do seu banco ou dados do cartão.'
    ],
    protect: [
      'Nunca clique em links recebidos por SMS. Se houver dúvida, digite o endereço oficial no navegador.',
      'Acesse serviços e bancos sempre pelo aplicativo oficial que está no seu celular.',
      'Lembre-se: os bancos reais nunca mandam links por SMS para atualizar segurança.'
    ]
  },
  {
    id: 2,
    type: 'Fraude no Pix',
    name: 'O Comprovante Falso',
    desc: 'Ao vender algo online, o golpista envia a foto de um comprovante de Pix que parece real (com logotipo de banco e tudo), mas o dinheiro não caiu na sua conta.',
    signs: [
      'O comprovante chega por foto, mas o seu aplicativo do banco não apita e o saldo não muda.',
      'O "comprador" parece ter muita pressa para levar o produto.',
      'Alguém manda mensagem dizendo que "fez um Pix errado para você" e pede o dinheiro de volta.'
    ],
    protect: [
      'A única prova de pagamento que vale é você abrir o seu aplicativo do banco e ver o dinheiro lá.',
      'Se alguém transferiu por engano de verdade, o próprio banco tem um botão para devolver (MED). Não faça um novo Pix.',
      'Não entregue produtos com base apenas em fotos ou PDFs de comprovantes.'
    ]
  },
  {
    id: 3,
    type: 'Ligação Falsa',
    name: 'A Falsa Central do Banco',
    desc: 'Alguém liga para você fingindo ser do seu banco. Eles falam de forma muito profissional, dizem que seu cartão foi clonado e pedem que você digite sua senha para "bloquear".',
    signs: [
      'A pessoa liga dizendo que houve uma compra estranha de valor alto no seu cartão.',
      'Pedem para você digitar sua senha no teclado do telefone para cancelar a compra.',
      'Eles pedem para você fazer um "Pix de teste" para garantir a segurança da conta.'
    ],
    protect: [
      'Bancos NUNCA pedem que você digite sua senha no telefone nem que faça um Pix para cancelar algo.',
      'Se receber essa ligação, desligue. Não fale nada. Pegue o seu cartão e ligue você mesmo para o número que está impresso atrás dele.',
      'Não confie apenas porque eles sabem seu nome ou CPF. Esses dados infelizmente são fáceis de encontrar na internet.'
    ]
  },
  {
    id: 4,
    type: 'Falso Emprego',
    name: 'A Vaga de Emprego Falsa',
    desc: 'O golpista anuncia vagas de emprego muito atraentes (home office, salário alto, sem experiência) e pede documentos pessoais ou uma "taxa de cadastro" para confirmar a vaga.',
    signs: [
      'A vaga pede documentos pessoais (RG, CPF, certidão de nascimento) antes de qualquer entrevista.',
      'A empresa pede que você pague uma taxa para "reservar" a vaga ou fazer o uniforme.',
      'O salário oferecido é muito acima da média para a função descrita.'
    ],
    protect: [
      'Empresas sérias nunca cobram para contratar. Se pedirem dinheiro, é golpe.',
      'Pesquise o CNPJ da empresa no site da Receita Federal antes de enviar qualquer documento.',
      'Nunca envie fotos de documentos por WhatsApp para vagas encontradas nas redes sociais.'
    ]
  }
];

const DICAS = [
  {
    title: 'A Regra de Ouro: Pare e Pense',
    lead: 'Na internet, os golpistas vivem da sua pressa e do seu pânico. Aprenda a frear antes de agir.',
    tips: [
      'Alguém pediu dinheiro com urgência? Pare tudo e respire por 5 minutos antes de qualquer ação.',
      'Desconfie de promoções boas demais — elas geralmente são armadilhas para roubar seus dados.',
      'Sempre confirme a identidade da pessoa ligando para ela diretamente (chamada de voz, não mensagem).'
    ]
  },
  {
    title: 'Senhas são as chaves da sua casa',
    lead: 'Assim como você não dá a chave da sua casa para um estranho, não entregue suas chaves digitais.',
    tips: [
      'O código de 6 números que chega por SMS é o que ativa seu WhatsApp. NUNCA envie para ninguém.',
      'Não use a mesma senha simples (como datas de aniversário) para o banco e redes sociais.',
      'Anote senhas importantes em um caderno físico guardado em casa, não soltas no celular.'
    ]
  },
  {
    title: 'O que os Bancos NÃO fazem',
    lead: 'Saber como o banco trabalha é a melhor forma de perceber quando não é o banco falando.',
    tips: [
      'Seu banco nunca vai ligar pedindo a senha do seu cartão para cancelar uma compra.',
      'Nenhum banco vai mandar um motoboy buscar seu cartão na sua casa, mesmo se estiver cortado.',
      'Não existe "aplicativo de verificação" ou antivírus que o banco mande você instalar de repente.'
    ]
  },
  {
    title: 'Configurações de Segurança',
    lead: 'Com dois ou três ajustes no seu celular, você dificulta muito a vida dos golpistas.',
    tips: [
      'Use impressão digital ou reconhecimento de rosto para desbloquear seu celular e o aplicativo do banco.',
      'Esconda a notificação de mensagens na tela bloqueada, para que ninguém leia seus SMS de segurança.',
      'Nunca use Wi-Fi público e sem senha para acessar a conta do banco.'
    ]
  }
];

const QUIZ_QUESTIONS = [
  // 1 — WhatsApp: código por engano
  {
    cat: 'Golpe de WhatsApp',
    canal: 'whatsapp',
    sim: {
      nome: 'Maria (amiga)', status: 'online', avatar: '🙂',
      msgs: [
        { from: 'received', text: 'Oi! Troquei de número 😉', time: '14:32' },
        { from: 'sent', text: 'Oi! Que número novo?', time: '14:33' },
        { from: 'received', text: 'Esse aqui! Mas preciso de um favor urgente... chegou um SMS com um código de 6 dígitos aí pra você? Era pra chegar aqui mas foi pro número errado 🥺', time: '14:34' }
      ]
    },
    prompt: 'O que você faz?',
    text: 'Você recebe uma mensagem no WhatsApp de uma amiga dizendo: "Cara, pode me passar os 6 números que chegaram no seu celular por SMS? Eu digitei o número errado e foi pra você."',
    opts: [
      { t: 'Mando o código rapidamente para ajudar, afinal ela é minha amiga.', ok: false },
      { t: 'Não mando. Ligo para o número antigo dela para confirmar.', ok: true },
      { t: 'Pergunto qual o código antes de decidir.', ok: false }
    ],
    feedCorrect: 'Isso mesmo! Aquele código SMS de 6 dígitos é a chave para acessar sua conta. Se você enviar, o golpista rouba o seu WhatsApp na hora.',
    feedWrong: 'Cuidado! Esse SMS nunca é um engano. É o código de ativação do SEU WhatsApp. Se você enviar, os golpistas roubam sua conta imediatamente.'
  },
  // 2 — WhatsApp: comprovante falso de Pix
  {
    cat: 'Vendas e Pix',
    canal: 'whatsapp',
    sim: {
      nome: 'Comprador (desconhecido)', status: 'online', avatar: '🛒',
      msgs: [
        { from: 'received', text: 'Boa tarde! Vi seu rádio anunciado, ainda está disponível?', time: '09:10' },
        { from: 'sent', text: 'Sim, ainda está! R$ 150', time: '09:11' },
        { from: 'received', text: '[📎 comprovante-pix.jpg]\nProntinho, já caiu! Pode separar que já tô indo aí buscar 🏃', time: '09:14' }
      ]
    },
    prompt: 'Você olha o app do seu banco e o dinheiro ainda não apareceu. O que você faz?',
    text: 'Você está vendendo um rádio usado. O comprador manda a foto de um comprovante de Pix no WhatsApp, mas quando você abre o aplicativo do seu banco, o dinheiro não está lá.',
    opts: [
      { t: 'Acredito no comprovante que ele mandou e entrego o rádio.', ok: false },
      { t: 'Aviso que só vou entregar quando o dinheiro aparecer na minha conta do banco.', ok: true },
      { t: 'Peço que ele mande o comprovante por e-mail para ter mais segurança.', ok: false }
    ],
    feedCorrect: 'Excelente! A única prova real de pagamento é ver o dinheiro no seu aplicativo. Comprovantes em foto ou PDF são muito fáceis de falsificar hoje em dia.',
    feedWrong: 'Atenção! Comprovantes falsos são o golpe mais comum em vendas na internet. Os golpistas usam aplicativos para criar imagens idênticas às reais. Confie apenas no extrato do seu banco.'
  },
  // 3 — Ligação: falsa central do banco
  {
    cat: 'Central Telefônica',
    canal: 'ligacao',
    sim: {
      numero: '0800 123 4567', label: 'Identificado como "Banco Seguro"',
      transcript: [
        { speaker: 'Atendente', text: '"Boa tarde, identificamos uma compra suspeita de R$ 2.380 no seu cartão. Para cancelar agora, preciso que confirme a senha do seu cartão pelo teclado do telefone."' }
      ]
    },
    prompt: 'O que você faz?',
    text: 'Seu telefone toca e uma atendente muito educada diz que é do seu banco. Ela afirma que seu cartão foi clonado e que, para cancelar, você precisa digitar a senha do cartão no teclado do telefone.',
    opts: [
      { t: 'Desligo na hora. Pego meu cartão e ligo para o número que está atrás dele para confirmar.', ok: true },
      { t: 'Digito a senha, pois estou com medo de cobrarem a compra clonada no meu nome.', ok: false },
      { t: 'Digo apenas a primeira parte da senha para ver se ela sabe o resto.', ok: false }
    ],
    feedCorrect: 'Exatamente! Bancos de verdade NUNCA pedem que você digite senhas por telefone para cancelar compras. Se estiver na dúvida, desligue e ligue você mesmo para o número oficial.',
    feedWrong: 'Muito cuidado! Isso é um golpe comum. O banco de verdade nunca vai pedir que você digite ou fale sua senha para cancelar uma fraude. Se receber ligação assim, simplesmente desligue.'
  },
  // 4 — SMS: Correios
  {
    cat: 'Links e SMS',
    canal: 'sms',
    sim: {
      remetente: 'CORREIOS',
      msgs: [
        { text: 'CORREIOS: Sua encomenda está presa na alfândega. Pague R$ 15,90 para liberar: correios-rastreio.net', time: 'Agora' }
      ]
    },
    prompt: 'O que você faz?',
    text: 'Chega um SMS no seu celular: "CORREIOS: Sua encomenda está presa na alfândega. Pague R$ 15,90 para liberar clicando no link: correios-rastreio.net".',
    opts: [
      { t: 'Clico e pago a taxa rapidinho para não perder meu pacote.', ok: false },
      { t: 'Ignoro o link e entro no site oficial dos Correios (correios.com.br) para checar.', ok: true },
      { t: 'Respondo o SMS perguntando qual pacote está preso.', ok: false }
    ],
    feedCorrect: 'Perfeito! Essa é a atitude correta. O endereço verdadeiro é correios.com.br. Links suspeitos em SMS costumam levar a sites falsos que roubam os dados do seu cartão.',
    feedWrong: 'Não faça isso! O site "correios-rastreio.net" é falso e foi criado por criminosos. Ao colocar seus dados ali, eles podem usar seu cartão para outras compras.'
  },
  // 5 — Ligação: app espião
  {
    cat: 'Senhas e Segurança',
    canal: 'ligacao',
    sim: {
      numero: 'Número desconhecido', label: '"Suporte Técnico Bancário"',
      transcript: [
        { speaker: 'Atendente', text: '"Detectamos uma falha de segurança na sua conta. Preciso que instale agora um aplicativo chamado \'Módulo de Segurança Bancária\' para verificarmos seu acesso."' }
      ]
    },
    prompt: 'O que você faz?',
    text: 'Uma pessoa te liga dizendo ser do suporte técnico do seu banco e pede para você instalar um aplicativo no seu celular chamado "Módulo de Segurança Bancária" para verificar sua conta.',
    opts: [
      { t: 'Instalo o aplicativo, pois é do banco e quero que minha conta fique segura.', ok: false },
      { t: 'Recuso e desligo. Bancos não pedem para você instalar aplicativos por telefone.', ok: true },
      { t: 'Peço o nome completo da atendente antes de instalar.', ok: false }
    ],
    feedCorrect: 'Muito bem! Bancos nunca pedem que você instale aplicativos por telefone. Esse é um golpe para colocar um spyware no seu celular e roubar senhas.',
    feedWrong: 'Cuidado! Esse "aplicativo de segurança" é um programa espião. Ele vai registrar todas as suas senhas e dados bancários. Bancos nunca pedem isso. Desligue imediatamente.'
  },
  // 6 — SMS: prêmio falso
  {
    cat: 'Promoções Falsas',
    canal: 'sms',
    sim: {
      remetente: 'PROMO-VIP',
      msgs: [
        { text: 'Parabéns! Você ganhou um iPhone 15! Resgate em: premio-rede.com — Só pague R$ 29,90 de frete', time: 'Agora' }
      ]
    },
    prompt: 'O que você faz?',
    text: 'Você recebe uma mensagem: "Parabéns! Você ganhou um iPhone 15! Clique no link para resgatar seu prêmio. Só pague R$ 29,90 de frete: premio-rede.com".',
    opts: [
      { t: 'Pago o frete, pois R$ 29,90 é pouco para ganhar um iPhone.', ok: false },
      { t: 'Ignoro. Não me inscrevi em nenhum sorteio e promoções assim são sempre golpe.', ok: true },
      { t: 'Encaminho para meus amigos para eles também poderem ganhar.', ok: false }
    ],
    feedCorrect: 'Correto! Se você não participou de sorteio nenhum, não ganhou nada. Esse golpe usa a emoção de ganhar um prêmio para te fazer pagar uma "taxa" e entregar seus dados.',
    feedWrong: 'Esse é o golpe do "prêmio falso". Você paga o frete, seus dados ficam com os criminosos e o iPhone nunca chega. Além disso, se encaminhar a mensagem, pode estar ajudando os golpistas.'
  },
  // 7 — E-mail: vaga de emprego falsa
  {
    cat: 'Emprego Falso',
    canal: 'email',
    sim: {
      de: 'RH Talentos Brasil <vagas@talentos-brasil-rh.com>',
      para: 'você',
      assunto: 'Vaga Home Office — R$ 3.000/mês — Sem experiência',
      corpo: 'Parabéns! Você foi pré-selecionado(a) para nossa vaga de Assistente Administrativo Home Office. Salário de R$ 3.000/mês, sem necessidade de experiência prévia. Para garantir sua vaga, efetue o pagamento da taxa de cadastro de R$ 150 e envie cópia do RG e CPF.'
    },
    prompt: 'O que você faz?',
    text: 'Você vê um anúncio de vaga: "Trabalhe em casa, R$ 3.000/mês, sem experiência, só pagar R$ 150 de taxa de cadastro para garantir sua vaga". O anúncio parece legítimo, com logo de empresa.',
    opts: [
      { t: 'Pago a taxa, pois R$ 150 é um investimento pequeno para um emprego tão bom.', ok: false },
      { t: 'Não pago. Empresas sérias nunca cobram para contratar alguém.', ok: true },
      { t: 'Pesquiso a empresa no Google e pago se parecer real.', ok: false }
    ],
    feedCorrect: 'Exatamente! A regra é simples: empresa séria não cobra para contratar. Se pediram dinheiro para você ter um emprego, é 100% golpe, independente de como a empresa pareça.',
    feedWrong: 'Cuidado! Essa é a "vaga de emprego falsa". O logo pode ser copiado de qualquer empresa real. A regra é infalível: empresa séria NUNCA cobra para contratar.'
  },
  // 8 — WhatsApp: Pix devolução
  {
    cat: 'Pix e Devolução',
    canal: 'whatsapp',
    sim: {
      nome: 'Desconhecido', status: 'visto por último hoje', avatar: '👤',
      msgs: [
        { from: 'received', text: 'Oi! Fiz um Pix errado de R$ 500 para sua chave. Você pode me devolver? Posso mandar o comprovante.', time: '16:02' }
      ]
    },
    prompt: 'Você confere o app do banco e o dinheiro não está lá. O que você faz?',
    text: 'Você recebe uma mensagem: "Oi! Fiz um Pix errado de R$ 500 para sua chave. Você pode me devolver? Posso mandar o comprovante." O dinheiro não aparece na sua conta.',
    opts: [
      { t: 'Devolvo o dinheiro por boa fé, pois pode ser verdade.', ok: false },
      { t: 'Verifico meu banco primeiro. Se o dinheiro não está lá, não devolvo nada.', ok: true },
      { t: 'Peço que o comprovante seja enviado antes de devolver.', ok: false }
    ],
    feedCorrect: 'Perfeito! A regra é clara: só existe dinheiro que aparece no seu extrato. Comprovantes são fáceis de falsificar. Se o dinheiro não está no seu banco, não há nada para devolver.',
    feedWrong: 'Não envie nada sem ver o dinheiro na sua conta! Esse é o golpe do "Pix errado". Eles contam com sua boa fé para você enviar dinheiro real sem ter recebido nada.'
  },
  // 9 — Alerta: celular roubado (sem canal de mensagem, é um cenário de decisão rápida)
  {
    cat: 'Segurança do Celular',
    canal: 'alerta',
    sim: {
      texto: 'Seu celular acabou de ser roubado na rua. Você está em choque, mas precisa agir rápido para proteger suas contas e seu dinheiro.'
    },
    prompt: 'Qual ação é mais importante fazer primeiro?',
    text: 'Seu celular foi roubado. Qual das ações abaixo é mais importante fazer primeiro?',
    opts: [
      { t: 'Ligar para a operadora para bloquear o chip do celular.', ok: false },
      { t: 'Bloquear as contas do banco pelo telefone do banco e avisar familiares.', ok: true },
      { t: 'Registrar um boletim de ocorrência na delegacia.', ok: false }
    ],
    feedCorrect: 'Muito bem! O banco é a prioridade. Com o celular, os ladrões podem acessar o aplicativo bancário. Ligue imediatamente para o número do seu banco e bloqueie tudo antes de qualquer outra ação.',
    feedWrong: 'A prioridade é o banco! Com o celular, os ladrões têm acesso ao aplicativo do banco. A operadora e o BO são importantes, mas bloquear o banco é a ação mais urgente para evitar prejuízo financeiro.'
  },
  // 10 — Site falso
  {
    cat: 'Compras Online',
    canal: 'site',
    sim: {
      url: 'mega-promo-tenis.shop/produto/2891',
      titulo: 'Tênis Esportivo Premium — Edição Limitada',
      precoOriginal: 'R$ 450',
      precoPromo: 'R$ 80',
      desc: 'Oferta relâmpago! Apenas hoje. Pagamento via Pix com aprovação instantânea.'
    },
    prompt: 'O que você faz?',
    text: 'Você encontra um site vendendo um tênis de marca por R$ 80 (o preço normal é R$ 450). O site tem aparência profissional e aceita Pix. O que você faz?',
    opts: [
      { t: 'Compro imediatamente pelo Pix para não perder a promoção.', ok: false },
      { t: 'Pesquiso o CNPJ do site, leio reclamações e só compro em sites conhecidos.', ok: true },
      { t: 'Compro, mas escolho pagar no cartão para ter mais segurança.', ok: false }
    ],
    feedCorrect: 'Ótima decisão! Preços muito abaixo do mercado são o sinal mais claro de golpe. Sempre pesquise a empresa no Reclame Aqui, verifique o CNPJ e prefira lojas conhecidas.',
    feedWrong: 'Preço muito abaixo do mercado é o sinal mais forte de golpe. Pagar no cartão ajuda um pouco (dá para contestar), mas sites falsos geralmente só aceitam Pix — exatamente porque não há como rastrear ou reverter.'
  }
];
