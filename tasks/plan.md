# Implementation Plan: Migração para neuralconcursos.com.br

## Overview

Migrar o mesmo export estático do GitHub Pages para o domínio oficial, reservando `/` para a marca, movendo a landing paga para `/sistema-pos-edital/` e tornando `/raio-x-express/` a rota canônica da isca. O visual, copy, checkout, GA4, Clarity e atribuição existentes serão preservados.

## Baseline auditado

- Repositório: `leothaylor/sistema-pos-edital`, branch `main`.
- Commit inicial: `1b0a2178f7b42c8c2046e10a9daec257edc83b05`.
- Árvore de trabalho: limpa.
- GitHub Pages: `built`, workflow próprio, sem custom domain.
- Produção atual: `/sistema-pos-edital/` e `/sistema-pos-edital/raio-x/` no hostname GitHub.io, ambas HTTP 200.
- DNS: servidores do Registro.br; sem A/AAAA no apex e sem `www`; MX nulo e TXT SPF existentes serão preservados.

## Architecture Decisions

- Um único deploy e uma única origem: `https://neuralconcursos.com.br/`.
- `/sistema-pos-edital/` será rota real, não `basePath` técnico.
- `/raio-x-express/` será a rota canônica; `/raio-x/` terá compatibilidade estática client-side, pois GitHub Pages não oferece redirect HTTP por rota neste export.
- Metadata será definida por página; o layout raiz manterá apenas a base institucional comum.
- O DNS será alterado somente depois de o novo build sem `basePath` estar validado localmente.
- Site: `page_view` e `checkout_click`; Hotmart continua dona dos eventos comerciais.

## Dependency Graph

```text
auditoria
  └─ rotas + metadata + deploy config
       └─ lint/build + inspeção do export
            └─ custom domain GitHub Pages
                 └─ DNS Registro.br
                      └─ deploy main
                           └─ DNS + HTTPS
                                └─ validação funcional + analytics
```

## Task List

### Phase 1: Foundation

- [x] Task 1: Auditar repositório, produção, Pages e DNS.
- [x] Task 2: Criar configuração central de origem/rotas e página temporária da marca.
- [x] Task 3: Mover as landings para as rotas definitivas e manter compatibilidade de `/raio-x/`.

### Checkpoint: Architecture

- [x] `/`, `/sistema-pos-edital/`, `/raio-x-express/` e `/raio-x/` são exportadas localmente.
- [x] Landing paga e Raio X preservam seus componentes e estilos.

### Phase 2: SEO and deployment configuration

- [x] Task 4: Separar metadata/canonicals/OG por rota e atualizar robots/sitemap.
- [x] Task 5: Remover o `basePath` técnico e atualizar o workflow para o domínio oficial.
- [x] Task 6: Rodar lint, build e auditoria do HTML/links/assets exportados.

### Checkpoint: Build ready

- [x] `npm run lint` passa.
- [x] `npm run build` passa sem o antigo project `basePath`.
- [x] Nenhum canonical ou link público aponta para GitHub.io.

Validação visual local concluída em desktop e em viewport móvel de 390 px.

### Phase 3: Domain cutover

- [ ] Task 7: Configurar `neuralconcursos.com.br` no GitHub Pages e registrar as instruções exibidas.
- [ ] Task 8: Criar somente os registros web necessários no Registro.br, preservando MX/TXT e demais serviços.
- [ ] Task 9: Commitar, enviar para `main` e acompanhar o deploy até ficar verde.
- [ ] Task 10: Confirmar DNS, certificado e ativar Enforce HTTPS quando disponível.

### Checkpoint: Domain live

- [ ] Apex e `www` resolvem conforme a configuração do GitHub.
- [ ] HTTPS funciona sem erro de certificado.

### Phase 4: Production validation

- [ ] Task 11: Validar visual, assets, interações, formulário e responsividade das três páginas.
- [ ] Task 12: Validar canonicals, OG/Twitter, sitemap, robots e URLs antigas.
- [ ] Task 13: Validar UTMs até Hotmart, sem concluir compra.
- [ ] Task 14: Validar GA4 Realtime e Clarity no novo hostname.
- [ ] Task 15: Consolidar registros alterados, SHA, evidências e pendências reais.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Propagação DNS/certificado demorar | Alto | Distinguir configurado de validado e monitorar sem desfazer registros corretos. |
| Assets quebrarem ao remover `basePath` | Alto | Inspecionar o export e testar localmente antes do cutover. |
| GitHub.io redirecionar apenas para a raiz | Médio | Testar as URLs antigas e documentar o comportamento real. |
| `/raio-x/` não aceitar redirect HTTP | Médio | Compatibilidade estática com `replace`, canonical novo e `noindex`. |
| Metadata do produto vazar para a raiz/isca | Médio | Metadata específica em cada `page.tsx` e inspeção do HTML final. |
| DNS apagar serviço não relacionado | Alto | Alterar apenas A/AAAA/CNAME exigidos e preservar MX/TXT existentes. |

## Open Questions

- Nenhuma decisão de negócio pendente. Valores DNS e estado do HTTPS serão determinados pelas interfaces reais do GitHub Pages e Registro.br.
