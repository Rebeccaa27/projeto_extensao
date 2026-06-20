# 🛡️ Defesa Digital — Segurança para Todos

> Projeto Extensionista · Curso de Ciência da Computação · UNINTER 2026

---

## 📌 Sobre o Projeto

**Defesa Digital** é um material educativo interativo desenvolvido como **projeto de extensão universitária**, com o objetivo de promover a inclusão digital e a segurança na internet para **idosos e comunidades de baixa renda no Rio de Janeiro**.

O projeto nasce da constatação de que o Brasil é um dos países com maior índice de fraudes digitais do mundo — e que as populações mais vulneráveis são exatamente aquelas com menos acesso a informação sobre como se proteger. A proposta é levar conhecimento de forma **simples, acessível e sem jargão técnico**, diretamente pelo navegador, sem instalação.

---

## 🎯 Objetivos

- Educar a população sobre os golpes digitais mais comuns (WhatsApp, Pix, ligações falsas, links suspeitos e vagas falsas de emprego)
- Oferecer dicas práticas de proteção em linguagem acessível, com exemplos do cotidiano
- Testar o conhecimento adquirido por meio de um quiz interativo com situações realistas
- Servir como material de apoio para agentes comunitários, CRAS, bibliotecas públicas e projetos sociais

---

## 📂 Estrutura do Projeto

```
defesa-digital/
├── index.html          # Página principal com hero e quiz interativo
├── golpes.html         # Material educativo: os 5 golpes mais comuns
├── dicas.html          # Material educativo: dicas de proteção + checklist
├── css/
│   ├── base.css        # Variáveis de design, reset, tipografia
│   ├── layout.css      # Header, hero, footer
│   ├── components.css  # Botões, cards, modais, carrossel
│   ├── quiz.css        # Estilos do quiz interativo
│   └── pages.css       # Estilos das páginas educativas internas
├── js/
│   ├── data.js         # Dados: 5 golpes, 4 módulos de dicas, 10 perguntas
│   ├── modal.js        # Lógica de abertura/fechamento de modais
│   ├── dicas.js        # Carrossel de dicas
│   ├── quiz.js         # Lógica completa do quiz com resultado animado
│   └── app.js          # Render de golpes e inicialização
└── img/
    └── (imagens de fundo)
```

---

## 🖥️ Funcionalidades

### 📊 Página de Golpes (`golpes.html`)
- Apresentação dos **5 golpes digitais mais comuns** no Brasil
- Cada golpe exibe: descrição, sinais de alerta e como se proteger
- Cards expansíveis com layout didático em duas colunas
- Dados e fontes oficiais citados (Febraban, Banco Central, Procon, Delegacias Cibernéticas)
- Índice lateral com sumário de navegação

### 🛡️ Página de Dicas (`dicas.html`)
- **4 módulos educativos** organizados por tema
- Linguagem acessível, sem termos técnicos
- Bloco de alerta com a "regra de ouro" da segurança digital
- **Checklist interativa** para o usuário marcar o que já configurou
- Barra de progresso visual mostrando o nível de proteção

### 🎯 Quiz Interativo (`index.html`)
- **10 perguntas** baseadas em situações reais do cotidiano
- Feedback imediato explicando o porquê de cada resposta
- Resultado com anel animado e classificação por nível de conhecimento
- Pode ser reiniciado quantas vezes quiser

---

## ♿ Acessibilidade

O projeto foi desenhado com foco no público-alvo:

- **Fonte mínima de 18px** em todo o corpo do texto
- **Tipografia Lexend** (desenvolvida para facilitar a leitura, inclusive para dislexia)
- Botões com área de toque generosa (mínimo 48px de altura)
- Contraste de cores verificado para conformidade com WCAG 2.1 AA
- Suporte a navegação por teclado (tecla ESC fecha modais)
- Compatível com celulares antigos e conexões lentas (sem dependências externas pesadas)

---

## 🎨 Design

| Elemento | Escolha | Justificativa |
|---|---|---|
| Cor primária | `#1A56B0` (Azul CRAS) | Remete à confiança institucional, familiar ao público |
| Cor de ação | `#F97316` (Laranja) | Alto contraste, chama atenção sem agressividade |
| Fonte display | Lexend | Criada para leitura fácil em telas, inclusive para dislexia |
| Fonte corpo | Source Sans 3 | Corpo amplo e legível em telas pequenas |
| Tamanho base | 18px | Mínimo recomendado para acessibilidade com idosos |

---

## 📊 Dados e Fontes

Os dados utilizados no projeto são provenientes de fontes oficiais:

- **Febraban** — Relatório de Fraudes 2023/2024
- **Banco Central do Brasil** — Dados de fraudes via Pix
- **Delegacia de Crimes Cibernéticos (DHICC-SP)** — Estatísticas de golpes de WhatsApp
- **Serasa Experian** — Pesquisa sobre tentativas de fraude (2024)
- **Procon Federal / Ministério do Trabalho** — Golpes de vaga de emprego
- **SPC Brasil** — Perfil das vítimas de golpes telefônicos

---

## 🚀 Como executar

O projeto é 100% estático — não precisa de servidor, banco de dados ou instalação.

**Opção 1 — Abrir direto no navegador:**
```bash
# Clone o repositório
git clone https://github.com/Rebeccaa27/projeto_faculdade.git
cd projeto_faculdade

# Abra o index.html no navegador
# (duplo clique no arquivo ou arraste para o Chrome/Firefox)
```

**Opção 2 — GitHub Pages:**
O projeto pode ser publicado diretamente pelo GitHub Pages:
`Settings → Pages → Branch: main → / (root) → Save`

---

## 👩‍💻 Desenvolvimento

Projeto desenvolvido com **HTML5 semântico, CSS3 moderno e JavaScript ES6+**, sem frameworks ou dependências externas, garantindo máxima compatibilidade e velocidade de carregamento mesmo em dispositivos antigos e conexões lentas.

- Separação de responsabilidades: CSS e JS completamente separados do HTML
- CSS com Custom Properties (variáveis) para consistência visual
- JavaScript modular por responsabilidade (dados, modais, quiz, dicas)
- Design responsivo com CSS Grid e Flexbox

---

## 📝 Licença

Projeto acadêmico de uso livre para fins educacionais e sociais.

---

*Projeto Extensionista — UNINTER 2026 · Ciência da Computação · Tecnologia Aplicada à Inclusão Digital*
