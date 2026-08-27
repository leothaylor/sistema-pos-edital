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

- [x] Task 7: Configurar `neuralconcursos.com.br` no GitHub Pages e registrar as instruções exibidas.
- [x] Task 8: Criar somente os registros web necessários no Registro.br, preservando MX/TXT e demais serviços.
- [x] Task 9: Commitar, enviar para `main` e acompanhar o deploy até ficar verde.
- [x] Task 10: Confirmar DNS, certificado e ativar Enforce HTTPS quando disponível.

### Checkpoint: Domain live

- [x] Apex e `www` resolvem conforme a configuração do GitHub.
- [x] HTTPS funciona sem erro de certificado.

### Phase 4: Production validation

- [x] Task 11: Validar visual, assets, interações, formulário e responsividade das três páginas.
- [x] Task 12: Validar canonicals, OG/Twitter, sitemap, robots e URLs antigas.
- [x] Task 13: Validar UTMs até Hotmart, sem concluir compra.
- [x] Task 14: Validar GA4 Realtime e Clarity no novo hostname.
- [x] Task 15: Consolidar registros alterados, SHA, evidências e pendências reais.

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

- Nenhuma decisão de negócio ou pendência técnica aberta.

## Valores DNS confirmados pelo GitHub

- Apex A: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- Apex AAAA: `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153`.
- `www` CNAME: `leothaylor.github.io` (sem o nome do repositório).
- Apex TXT preservado: `v=spf1 -all`.
- O editor avançado rejeitou o Null MX literal `0 .`; para manter o domínio sem serviço de e-mail e impedir fallback SMTP aos IPs web, ele foi substituído por `MX 0 no-mail.invalid`.
- O Registro.br confirmou “Zona DNS atualizada com sucesso”; A, AAAA, CNAME, MX e TXT foram validados nos nameservers delegados `e.sec.dns.br`/`f.sec.dns.br`.

## Resultado validado

- Commit funcional: `9882369ddca2455fb8f5fc571ee16934b25b7580`.
- Workflow Pages: execução `33014192803`, build e deploy aprovados.
- Custom domain: `neuralconcursos.com.br`; `www` redireciona para o apex.
- Certificado GitHub Pages: `approved` para apex e `www`, válido até 2026-11-24; `https_enforced: true`.
- Produção: raiz, produto, Raio X e compatibilidade `/raio-x/` validados; parâmetros chegam à Hotmart sem compra.
- GA4 Realtime: títulos das três páginas presentes, `page_view` e `checkout_click` recebidos.
- Clarity: usuário ao vivo confirmado no hostname `neuralconcursos.com.br`.
- Fora do escopo e inalterados: Meta e MailerLite.
