# Tasks: Landing orgânica Raio X

## Task 1: Formulário de captura seguro

**Acceptance criteria:**
- [x] Nome e e-mail obrigatórios; WhatsApp opcional.
- [x] Endpoint e nomes de campo centralizados.
- [x] Endpoint nulo preserva dados e informa indisponibilidade.

**Verification:** lint, build e envio manual com endpoint nulo.

**Dependencies:** None.

**Files:** `app/raio-x/config.ts`, `app/raio-x/LeadForm.tsx`.

## Task 2: Página curta e sistema visual

**Acceptance criteria:**
- [x] Hero, Raio X, formulário, produto e encerramento presentes.
- [x] Um CTA primário por etapa e cinco capacidades do produto.
- [x] CSS isolado e mobile-first, sem overflow.

**Verification:** capturas e inspeção em quatro viewports.

**Dependencies:** Task 1.

**Files:** `app/raio-x/page.tsx`, `app/raio-x/raio-x.module.css`.

## Task 3: Descoberta e atribuição

**Acceptance criteria:**
- [x] Metadata específica do Raio X.
- [x] Rota adicionada ao sitemap.
- [x] UTMs preservadas na ação externa quando configurada.

**Verification:** inspecionar HTML, sitemap e submissão configurada.

**Dependencies:** Tasks 1–2.

**Files:** `app/raio-x/page.tsx`, `app/sitemap.ts`.

## Task 4: QA, publicação e regressão

**Acceptance criteria:**
- [x] Lint/build/Lighthouse aprovados.
- [x] Formulário, teclado, contraste e responsividade validados.
- [x] Landing longa sem alteração visual ou funcional.

**Verification:** navegador local, workflow do Pages e URL pública.

**Dependencies:** Tasks 1–3.

**Files:** evidências e atualização deste checklist.
