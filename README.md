# Sistema Pós-Edital

Landing page comercial mobile-first da Neural Concursos, construída com Next.js, React, TypeScript e Tailwind CSS e exportada de forma estática para o GitHub Pages.

## Configuração comercial central

Preço, checkout, garantia, condição de acesso e exibição dos bônus ficam somente em:

`app/config/product.ts`

Estado seguro inicial:

```ts
price: null,
checkoutUrl: null,
guaranteeDays: null,
lifetimeAccess: null,
showBonuses: false,
```

Com `checkoutUrl: null`, os CTAs permanecem clicáveis e mostram um aviso discreto de disponibilidade futura. Eles não apontam para `#`, não geram 404 e não abrem URL falsa. Ao inserir a URL real nessa configuração, todos os CTAs passam a usá-la automaticamente e preservam parâmetros UTM presentes na visita.

Não preencha valores comerciais por estimativa. Use apenas informações confirmadas da oferta.

## Desenvolvimento local

Pré-requisitos validados no projeto: Node.js 22 e npm 10.

```powershell
npm ci
npm run dev
```

Validação completa:

```powershell
npm run lint
$env:NEXT_PUBLIC_BASE_PATH = "/sistema-pos-edital"
$env:NEXT_PUBLIC_SITE_URL = "https://leothaylor.github.io/sistema-pos-edital/"
npm run build
```

O build estático é gerado em `out/`.

## Publicação

O workflow `.github/workflows/deploy-pages.yml` valida lint, gera o export com o `basePath` correto e publica o diretório `out/` pelo GitHub Actions.

O GitHub Pages deve usar a origem **GitHub Actions** (`build_type: workflow`), e não `main / root`. Publicar a raiz faz o Pages converter este README em um site técnico em vez de servir a landing.

## Rastreamento preparado

Os CTAs expõem `data-cta` por posição (`hero`, `mechanism`, `offer`, `final`, `sticky-mobile`) e disparam o evento de navegador `neural:cta`. Se um `dataLayer` for instalado futuramente, o mesmo clique envia `cta_click` sem exigir IDs inventados no código atual.
