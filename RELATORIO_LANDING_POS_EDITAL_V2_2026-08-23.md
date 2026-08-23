# Relatório técnico — Landing Page Sistema Pós-Edital V2

**Data:** 23/08/2026

**Repositório:** `leothaylor/sistema-pos-edital`

**Branch:** `main`

**Base auditada:** `8b870c6`

**Commit de implementação:** `8ec95918b3f1a4c411f1af3ce4ee0526af245078`

**URL pública:** https://leothaylor.github.io/sistema-pos-edital/

## 1. Resultado executivo

A landing page foi reconstruída como uma página comercial mobile-first, editorial e premium, mantendo Next.js, TypeScript e Tailwind/PostCSS. A experiência antiga baseada em Three.js, React Three Fiber, GSAP e Lenis foi substituída por uma composição estática mais rápida e previsível.

O conteúdo comercial variável passou a ter uma única fonte central. Como preço, checkout, garantia, prazo de acesso e bônus ainda não estão oficialmente confirmados, esses dados permanecem nulos ou ocultos. Nenhuma alegação de aprovação, preço antigo, garantia de sete dias, acesso vitalício ou checkout fictício é publicada.

O defeito da URL pública também foi diagnosticado: o GitHub Pages estava em `build_type: legacy`, servindo diretamente `main:/` e exibindo o README. A configuração do Pages foi alterada para `build_type: workflow`, compatível com o workflow de exportação estática já existente.

## 2. Direção visual entregue

- Paleta em off-white, preto, grafite e vermelho profundo.
- Tipografia editorial de alto contraste, sem depender de fontes externas.
- Hero com estátua neural estática, headline forte e CTA seguro.
- Layout responsivo sem overflow em 390 × 844, 844 × 390 e 1440 × 1000.
- Animações curtas em CSS, com tratamento para `prefers-reduced-motion`.
- CTA móvel fixo somente depois que o hero sai da viewport.
- Estados de foco visíveis, skip link, hierarquia semântica e FAQ nativo com `details/summary`.

### Evidência visual

![Hero desktop](evidence/v2/01-hero-desktop.png)

![Hero mobile](evidence/v2/11-hero-mobile-390x844.png)

Capturas adicionais estão em `evidence/v2/`, cobrindo problema, mecanismo, jornada, uso sem conhecimento de IA, produto, público, FAQ, oferta e CTA final.

As capturas `12-public-mobile.png` e `13-public-desktop.png` foram obtidas diretamente da URL pública depois do deploy.

## 3. Estrutura comercial implementada

1. Hero e promessa central.
2. Problema real do pós-edital.
3. Mecanismo visual: edital bruto → sistema → saídas organizadas.
4. Jornada em sete etapas.
5. Explicação de uso sem exigir conhecimento de IA.
6. Visualização editorial do interior do produto.
7. Bônus opcionais controlados por configuração.
8. Para quem é / para quem não é.
9. FAQ com cinco objeções.
10. Oferta sem condições inventadas.
11. CTA final e CTA móvel fixo.

## 4. Fonte central de verdade comercial

Arquivo: `app/config/product.ts`

```ts
export const productConfig = {
  productName: "Sistema Pós-Edital",
  brandName: "Neural Concursos",
  price: null,
  checkoutUrl: null,
  guaranteeDays: null,
  lifetimeAccess: null,
  showBonuses: false,
  showStickyMobileCta: true,
  bonuses: [/* conteúdo preservado, mas oculto */],
};
```

Com `checkoutUrl: null`, todos os CTAs são botões seguros: registram o ponto de clique e exibem uma mensagem de disponibilidade futura, sem navegar para `#`, sem gerar erro e sem simular checkout. Quando uma URL real for inserida, UTMs existentes são preservadas e o CTA passa a redirecionar.

Marcadores `data-cta` foram adicionados em header, hero, mecanismo, oferta, CTA final e sticky mobile. O clique dispara `neural:cta` e também envia para `window.dataLayer` quando ela existir.

## 5. Arquitetura e arquivos principais

- `app/components/Landing.tsx`: composição semântica da página.
- `app/components/Hero.tsx`: hero e ativo neural estático.
- `app/components/ProblemMechanism.tsx`: problema e mecanismo.
- `app/components/Journey.tsx`: jornada de sete etapas.
- `app/components/ExperienceSections.tsx`: uso e interior do produto.
- `app/components/DecisionSections.tsx`: público, FAQ, oferta e CTA final.
- `app/components/CheckoutButton.tsx`: checkout nulo, UTMs e instrumentação.
- `app/components/StickyMobileCta.tsx`: CTA móvel com `IntersectionObserver`.
- `app/config/product.ts`: configuração comercial central.
- `app/data/content.ts`: conteúdo estruturado repetitivo.
- `app/globals.css`: sistema visual e responsividade.
- `app/layout.tsx`, `app/robots.ts`, `app/sitemap.ts`: SEO técnico.
- `.github/workflows/deploy-pages.yml`: lint, build, artefato e deploy no Pages.

## 6. Dependências e ativos

### Removido do runtime

- `three`
- `@react-three/fiber`
- `@types/three`
- `gsap`
- `@gsap/react`
- `lenis`
- Componentes `NeuralBust`, `StaticNeuralBust`, `MotionRuntime` e `animationHub`.

### Mantido

- Next.js `16.3.1`
- React/React DOM `19.2.8`
- TypeScript `5.9.3`
- Tailwind CSS `4.3.3`
- Lucide React `0.539.0`

O ativo principal `public/neural-statue-v2.webp` tem 108.276 bytes. Um novo Open Graph em WebP, `public/og-v2.webp`, foi criado em 1200 × 630 com 99.600 bytes. Ativos legados não referenciados pelo runtime foram preservados no histórico/repositório; não afetam a carga medida da rota.

## 7. SEO técnico

- Title: `Sistema Pós-Edital | Organize seu estudo após o edital`.
- Description específica da oferta.
- Canonical absoluto da URL do GitHub Pages.
- Open Graph e Twitter Card com `og-v2.webp`.
- `robots.txt` liberando indexação.
- `sitemap.xml` com a URL pública canônica.
- Exportação com `basePath: /sistema-pos-edital` no ambiente de produção.
- `trailingSlash: true` para hospedagem estática.

## 8. Validações executadas

### Qualidade e build

| Comando | Resultado |
|---|---|
| `npm ci` | OK; dependências locais instaladas; 0 vulnerabilidades |
| `npm run lint` | OK; zero erros e zero warnings |
| `npm run build` | OK; seis rotas estáticas geradas |
| `npm audit --omit=dev` | OK; 0 vulnerabilidades |
| `git diff --check` | OK; sem whitespace inválido |
| `gitleaks git --no-banner --redact .` | OK; três commits e ~7,14 MB auditados; nenhum segredo encontrado |
| `gitleaks git --staged --no-banner --redact .` | OK; ~5,46 MB de mudanças preparadas auditadas; nenhum segredo encontrado |

O build de produção foi executado com:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/sistema-pos-edital'
$env:NEXT_PUBLIC_SITE_URL='https://leothaylor.github.io/sistema-pos-edital/'
npm run build
```

O HTML exportado foi verificado para confirmar assets sob `/sistema-pos-edital/_next/`, canonical correto, novo OG e ausência de `R$ 57`, garantia de sete dias e acesso vitalício.

### Navegação e responsividade

| Cenário | Resultado |
|---|---|
| Mobile 390 × 844 | Sem overflow; seis CTAs iniciais; sticky ausente no topo e visível após o hero |
| Landscape 844 × 390 | Sem overflow horizontal |
| Desktop 1440 × 1000 | Sem overflow horizontal |
| Checkout nulo | URL permanece estável; mensagem acessível é exibida |
| FAQ | Cinco itens; expansão nativa funcional |
| Conteúdo proibido | Sem preço antigo, garantia ou acesso vitalício visíveis |

### Lighthouse mobile

Baseline histórico do repositório: performance 84, acessibilidade 100, boas práticas 100, SEO 100, LCP 4,4 s e CLS 0.

| Medição | Performance | Acessibilidade | Boas práticas | SEO | FCP | LCP | TBT | CLS |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| V2 antes do ajuste de acessibilidade | 99 | 93 | 100 | 100 | 0,84 s | 2,16 s | 35 ms | 0 |
| V2 após correções — repetição 1 | 96 | 100 | 100 | 100 | 1,06 s | 2,72 s | 60 ms | 0 |
| V2 após correções — repetição 2 | **99** | **100** | **100** | **100** | **0,80 s** | **2,19 s** | **49 ms** | **0** |

As correções objetivas foram: remover da árvore o CTA móvel enquanto oculto, elevar contraste no fundo bege e corrigir o nome acessível do logotipo. A variação de LCP entre as repetições foi tratada como ruído de laboratório; a segunda repetição voltou a 2,19 s, sem mudança adicional de código.

Relatórios completos:

- `evidence/v2/lighthouse-mobile-after-2.report.html`
- `evidence/v2/lighthouse-mobile-after-2.report.json`

Limitação: os resultados são sintéticos em localhost. Não há dados RUM/CrUX suficientes para esta URL; métricas de campo devem ser acompanhadas depois de tráfego real.

## 9. GitHub Pages

### Diagnóstico confirmado

```json
{
  "build_type": "legacy",
  "source": { "branch": "main", "path": "/" },
  "status": "built"
}
```

Nesse modo, o Pages ignorava o artefato do workflow e publicava a raiz do repositório, que era apresentada como documentação/README.

### Correção aplicada

```powershell
gh api --method PUT repos/leothaylor/sistema-pos-edital/pages -f build_type=workflow
```

Verificação imediata: `build_type: workflow`. O workflow usa Node.js 22, executa `npm ci`, `npm run lint`, `npm run build`, envia `./out` com `upload-pages-artifact@v3` e publica com `deploy-pages@v4`.

### Deploy concluído

- Workflow: `32652983011`.
- URL da execução: https://github.com/leothaylor/sistema-pos-edital/actions/runs/32652983011
- Commit implantado: `8ec95918b3f1a4c411f1af3ce4ee0526af245078`.
- Job `build`: sucesso em 43 s.
- Job `deploy`: sucesso em 10 s.
- Estado final da API do Pages: `status: built`, `build_type: workflow`.

### Validação da URL pública

Verificação feita em `https://leothaylor.github.io/sistema-pos-edital/?v=8ec9591` para evitar cache antigo:

- title e H1 da landing V2 presentes;
- README antigo ausente;
- scripts e imagem neural carregados sob `/sistema-pos-edital/_next/`;
- imagem principal carregada com largura natural válida;
- ausência de preço antigo, garantia de sete dias e acesso vitalício;
- largura de documento igual à viewport em mobile e desktop;
- CTA com checkout nulo manteve a URL e exibiu o aviso;
- sticky mobile apareceu após o hero;
- cinco FAQs presentes e expansão/recolhimento funcional;
- as dez seções comerciais estão presentes.

O Actions exibiu uma anotação informativa de que algumas actions ainda declaram runtime Node 20 e foram forçadas pelo runner a Node 24. O workflow e os dois jobs concluíram com sucesso; a aplicação foi construída explicitamente com Node.js 22. Essa anotação não bloqueia a publicação, mas deve ser reavaliada quando versões novas das actions usadas estiverem disponíveis.

## 10. Ferramentas e estados verificados

| Ferramenta | Estado | Evidência |
|---|---|---|
| Git | OPERACIONAL | `git version 2.54.0.windows.1`; status/diff/commit disponíveis |
| Node.js | OPERACIONAL | `v22.19.0`; lint e build aprovados |
| npm | OPERACIONAL | `10.9.3`; `npm ci` e audit aprovados |
| GitHub CLI | OPERACIONAL | `2.95.0`; autenticação, API do Pages e Actions acessíveis |
| Lighthouse | TESTADO | executado por `npx lighthouse@latest`; três relatórios gerados |
| Gitleaks | TESTADO | `C:\Temp\ai-mcp\gitleaks\gitleaks.exe`; nenhum segredo detectado |
| Agent Reach CLI | DETECTADO apenas como skill | comando não está no PATH; `check-update` não pôde ser executado; nenhuma instalação foi feita |

O inventário `C:\Users\usuário\Documents\AI_AGENT_STACK` foi consultado antes dos testes. Nenhuma ferramenta global foi reinstalada ou atualizada. Ambientes virtuais foram preservados. Remotion e dependências do projeto LT não foram tocados.

## 11. Pendências que dependem de Leo/Digão

Para ativar a oferta real, confirmar e preencher somente em `app/config/product.ts`:

1. preço oficial;
2. URL oficial de checkout;
3. prazo de garantia, se existir;
4. regra de duração do acesso;
5. autorização para mostrar bônus (`showBonuses: true`) e texto final de cada bônus;
6. capturas reais da área do aluno/Hotmart, caso queiram substituir a visualização editorial;
7. ferramenta de analytics/consentimento, caso desejem persistir os eventos `data-cta` em uma plataforma externa.

Enquanto esses pontos não forem confirmados, a publicação permanece comercialmente segura: apresenta valor e mecanismo sem inventar condições de compra.
