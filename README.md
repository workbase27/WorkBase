# WorkBase

Landing page e experiência inicial do marketplace WorkBase, construída como frontend demonstrativo com React, TypeScript, Vite e CSS.

## Rodar localmente

```bash
npm install
npm run dev
```

Para gerar a versão de produção:

```bash
npm run build
```

## O que está implementado

- Landing page responsiva com navegação por âncoras.
- Hero, fluxo em três passos, blocos para desenvolvedores e vendedores.
- Divisão de ganhos com valores calculados em `src/config/commission.ts`.
- Projetos em destaque, FAQ interativo e CTA de cadastro.
- Modal de escolha de perfil para cadastro simulado.
- Prévia de painel com sidebar, métricas, gráfico, atividades e tabela.
- Logo fornecida em `public/assets/workbase-logo.png`.

## Rotas simuladas

Como este primeiro corte é uma landing page frontend, os fluxos são representados por âncoras (`#cadastro`, `#dashboard`, `#login`) e não conectam a backend. A autenticação, persistência, pagamentos, repasses e links de afiliado ainda precisam de serviços reais.

## Dados

Todos os dados exibidos são mockados e a regra de comissão é centralizada em um único arquivo para facilitar a troca futura por API.
