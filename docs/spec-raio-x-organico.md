# Spec: Landing orgânica — Raio X do Edital

## Objective

Criar uma segunda landing curta para visitantes que chegam interessados pelo Instagram após comentar `RAIO X`. A página deve capturar o contato, explicar como o candidato envia o edital e conduzir naturalmente ao Sistema Pós-Edital.

A landing longa existente em `/` continua sendo o destino exclusivo de tráfego pago e não terá estrutura, copy, estilos ou comportamento alterados.

## Assumptions

1. A nova URL pública será `/raio-x/`.
2. Nome e e-mail serão obrigatórios; WhatsApp será opcional.
3. O edital será solicitado nas instruções enviadas depois do cadastro; não haverá upload de arquivo nesta página.
4. O MailerLite será conectado por um endpoint externo configurável, ainda não fornecido.
5. Sem endpoint, o formulário deve impedir o envio e explicar que os cadastros ainda não estão abertos, sem descartar dados silenciosamente.
6. O CTA do produto leva à landing longa enquanto o checkout estiver nulo e passa ao checkout quando a URL oficial for configurada.

## Tech Stack

- Next.js 16.3.1 com App Router e `output: "export"`.
- React 19.2.8 e TypeScript 5.9.3.
- CSS Module exclusivo da rota para evitar interferência na landing longa.
- Lucide React para ícones.
- Assets oficiais já presentes no projeto.

## Commands

```powershell
npm run lint
npm run build
npx --yes serve out -l 4173
```

Build do GitHub Pages:

```powershell
$env:NEXT_PUBLIC_BASE_PATH='/sistema-pos-edital'
$env:NEXT_PUBLIC_SITE_URL='https://leothaylor.github.io/sistema-pos-edital/'
npm run build
```

## Project Structure

```text
app/raio-x/page.tsx              # metadata e composição estática
app/raio-x/LeadForm.tsx          # formulário e feedback no cliente
app/raio-x/config.ts             # endpoint e nomes de campos do MailerLite
app/raio-x/raio-x.module.css     # sistema visual isolado
```

## Code Style

```tsx
<label htmlFor="lead-email">E-mail <span aria-hidden="true">*</span></label>
<input id="lead-email" name="fields[email]" required type="email" />
```

- Componentes semânticos, nomes em inglês no código e copy em português.
- Campos sempre com `label` visível e `autocomplete` apropriado.
- Sem dependências novas, estilos globais ou chamadas de API internas.

## Testing Strategy

- Lint e build estático obrigatórios.
- Verificação visual em 375 × 812, 844 × 390, 768 × 1024 e 1440 × 1000.
- Teste do formulário com endpoint nulo: manter campos preenchidos e exibir feedback acessível.
- Verificar foco, targets de 44 px, contraste, ausência de overflow e `prefers-reduced-motion`.
- Verificar que `/` mantém headline, assets, CTAs e dimensões anteriores.
- Lighthouse mobile da nova rota com metas mínimas 90/100/100/100.

## Boundaries

### Always

- Preservar integralmente a landing longa.
- Usar uma configuração central para MailerLite.
- Manter apenas três campos e um CTA primário de captura.
- Preservar UTMs quando o formulário e o checkout forem ativados.

### Ask first

- Alterar a landing longa.
- Adicionar upload de edital, automação ou ferramenta externa diferente do MailerLite.
- Inventar endpoint, preço, garantia, depoimentos ou prova social.

### Never

- Enviar dados para um destino não confirmado.
- Expor notas internas, placeholders técnicos ou segredos.
- Criar uma cópia reduzida da landing longa.

## Success Criteria

- `/raio-x/` contém hero, explicação do Raio X, formulário, ponte para o produto e encerramento.
- A altura total fica próxima de 30–40% da landing longa.
- O formulário tem nome, e-mail obrigatório e WhatsApp opcional.
- O produto é resumido em edital, conteúdo, banca, rotina e contingência.
- A página exporta estaticamente e funciona no base path do GitHub Pages.
- A rota raiz permanece visual e funcionalmente inalterada.

## Open Questions

- Endpoint/ID oficial do formulário MailerLite.
- URL da página de obrigado ou instrução pós-cadastro.
- Nomes exatos dos campos personalizados no MailerLite, caso sejam diferentes dos padrões configurados.
