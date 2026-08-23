# Implementation Plan: Landing orgânica Raio X

## Overview

Adicionar uma rota estática, curta e isolada para captura orgânica, mantendo a landing longa intacta.

## Architecture Decisions

- Nova rota `/raio-x/` no mesmo projeto para compartilhar marca e deploy.
- CSS Module para impedir colisões com `app/globals.css`.
- Formulário client-side com ação externa configurável; nenhum backend incompatível com exportação estática.
- Sem endpoint MailerLite, o envio é bloqueado com mensagem acessível.
- CTA do Sistema Pós-Edital reutiliza a configuração comercial já existente.

## Task List

### Phase 1: Foundation

- [x] Task 1: Definir configuração do lead e formulário seguro.
- [x] Task 2: Construir a rota e o sistema visual isolado.

### Checkpoint: Foundation

- [x] Lint e build aprovados.
- [x] Fluxo de cadastro nulo funciona sem perda silenciosa de dados.

### Phase 2: Integration

- [x] Task 3: Adicionar metadata e sitemap da nova rota.
- [x] Task 4: Validar responsividade, acessibilidade, performance e regressão da raiz.

### Checkpoint: Complete

- [x] Todos os critérios da spec atendidos.
- [x] Publicação e URL pública verificadas.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Endpoint MailerLite ausente | Alto | Configuração nula e feedback seguro; ativação em um único arquivo |
| CSS afetar a landing longa | Alto | CSS Module exclusivo da rota |
| Link quebrar no base path | Alto | Link relativo para a raiz e build com variáveis de produção |
| Página crescer demais | Médio | Cinco blocos curtos; sem FAQ, depoimentos ou seções repetidas |

## Open Questions

- Endpoint MailerLite e página de obrigado permanecem pendentes.
