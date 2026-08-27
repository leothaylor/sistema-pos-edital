# Checklist — Migração do domínio Neural Concursos

Estados: `[x]` concluído e comprovado · `[ ]` ainda não concluído.

## 1. Baseline

- [x] Confirmar repositório, `main`, remoto e commit inicial.
- [x] Confirmar árvore limpa.
- [x] Auditar `next.config.ts`, workflow, rotas, metadata, sitemap, robots, tracking, links e assets.
- [x] Auditar GitHub Pages: sem custom domain; HTTPS atual do GitHub.io ativo.
- [x] Auditar DNS: Registro.br, sem A/AAAA/`www`; preservar MX nulo e SPF `-all`.
- [x] Testar URLs atuais e registrar canonicals GitHub.io.

## 2. Arquitetura e código

- [x] Criar origem/rotas oficiais centralizadas.
- [x] Criar raiz temporária mínima da Neural Concursos.
- [x] Publicar landing existente em `/sistema-pos-edital/` sem alterar visual/copy.
- [x] Publicar Raio X existente em `/raio-x-express/` sem alterar visual/copy.
- [x] Criar compatibilidade estática `/raio-x/` → `/raio-x-express/`, preservando query/hash.
- [x] Separar metadata institucional, produto e Raio X.
- [x] Atualizar canonicals, OG/Twitter, robots e sitemap.
- [x] Remover `basePath` técnico e mudar a origem do workflow.
- [x] Confirmar GA4, Clarity, checkout e atribuição inalterados.

## 3. Verificação local

- [x] `npm run lint` aprovado.
- [x] `npm run build` aprovado sem `NEXT_PUBLIC_BASE_PATH=/sistema-pos-edital`.
- [x] Export contém as quatro rotas esperadas.
- [x] HTML usa assets na raiz e canonicals do domínio novo.
- [x] Teste visual desktop/mobile local aprovado.

## 4. GitHub Pages e DNS

- [x] Configurar custom domain `neuralconcursos.com.br` no Pages.
- [x] Registrar os valores DNS exigidos pela interface real.
- [x] Criar registros do apex no Registro.br.
- [x] Criar `www` conforme recomendação do GitHub.
- [x] Preservar registros MX/TXT e demais serviços.
- [x] Confirmar DNS reconhecido pelo GitHub.

## 5. Deploy e HTTPS

- [x] Revisar diff inteiro e ausência de mudanças fora de escopo.
- [x] Commit claro criado.
- [x] Push para `main` concluído.
- [x] GitHub Actions/Pages verde.
- [x] Certificado emitido.
- [x] Enforce HTTPS habilitado.

## 6. Validação em produção

- [x] `/` mostra apenas a página temporária da marca.
- [x] `/sistema-pos-edital/` preserva a landing longa e todos os assets.
- [x] `/raio-x-express/` preserva Raio X, formulário e assets.
- [x] `/raio-x/` encaminha para a rota canônica.
- [x] Canonicals e OG/Twitter corretos por página.
- [x] `robots.txt` e `sitemap.xml` corretos.
- [x] URLs GitHub.io antigas testadas e comportamento documentado.
- [x] UTM, `utm_id`, `src`, `sck` e `fbclid` chegam à Hotmart.
- [x] `page_view` em `/`, `/sistema-pos-edital/` e `/raio-x-express/` no GA4.
- [x] `checkout_click` no novo domínio no GA4.
- [x] Clarity recebe sessões do novo hostname.
- [x] Nenhuma compra realizada.

## 7. Handoff

- [x] Listar somente registros DNS criados/alterados.
- [x] Informar custom domain e estado real do HTTPS.
- [x] Informar SHA, deploy e pendências reais.
- [x] Confirmar que Meta e MailerLite ficaram fora do escopo.
