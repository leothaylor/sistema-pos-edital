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

- [ ] Configurar custom domain `neuralconcursos.com.br` no Pages.
- [ ] Registrar os valores DNS exigidos pela interface real.
- [ ] Criar registros do apex no Registro.br.
- [ ] Criar `www` conforme recomendação do GitHub.
- [ ] Preservar registros MX/TXT e demais serviços.
- [ ] Confirmar DNS reconhecido pelo GitHub.

## 5. Deploy e HTTPS

- [x] Revisar diff inteiro e ausência de mudanças fora de escopo.
- [ ] Commit claro criado.
- [ ] Push para `main` concluído.
- [ ] GitHub Actions/Pages verde.
- [ ] Certificado emitido.
- [ ] Enforce HTTPS habilitado.

## 6. Validação em produção

- [ ] `/` mostra apenas a página temporária da marca.
- [ ] `/sistema-pos-edital/` preserva a landing longa e todos os assets.
- [ ] `/raio-x-express/` preserva Raio X, formulário e assets.
- [ ] `/raio-x/` encaminha para a rota canônica.
- [ ] Canonicals e OG/Twitter corretos por página.
- [ ] `robots.txt` e `sitemap.xml` corretos.
- [ ] URLs GitHub.io antigas testadas e comportamento documentado.
- [ ] UTM, `utm_id`, `src`, `sck` e `fbclid` chegam à Hotmart.
- [ ] `page_view` em `/`, `/sistema-pos-edital/` e `/raio-x-express/` no GA4.
- [ ] `checkout_click` no novo domínio no GA4.
- [ ] Clarity recebe sessões do novo hostname.
- [ ] Nenhuma compra realizada.

## 7. Handoff

- [ ] Listar somente registros DNS criados/alterados.
- [ ] Informar custom domain e estado real do HTTPS.
- [ ] Informar SHA, deploy e pendências reais.
- [ ] Confirmar que Meta e MailerLite ficaram fora do escopo.
