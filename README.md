# Sistema Pós-Edital — Landing page

Landing page mobile-first do Sistema Pós-Edital, construída em Next.js, React, TypeScript e Tailwind CSS. O projeto gera arquivos estáticos para publicação futura no GitHub Pages.

## Rodar localmente

Pré-requisitos: Node.js 22 e npm 10.

```powershell
npm install
npm run dev
```

Abra `http://localhost:3000`.

Para validar a exportação estática:

```powershell
npm run build
npx serve out
```

## Checkout Hotmart

O checkout ainda não foi publicado. A única configuração fica no início de `app/components/Landing.tsx`:

```ts
// TROCAR AQUI quando o checkout da Hotmart estiver publicado.
const CHECKOUT_URL: string | null = null;
```

Enquanto o valor for `null`, todos os CTAs mostram o aviso **Em breve** e não alteram a URL. Quando a Hotmart fornecer o link, substitua apenas `null` pela URL entre aspas.

## Comportamento visual

- Desktop: estátua autoral com dissolução neural integrada à própria imagem, inclinação sutil ao cursor e leve profundidade durante o scroll.
- Mobile, `prefers-reduced-motion` ou fallback forçado: a mesma composição permanece estática.
- Lenis, GSAP e o movimento de profundidade compartilham um único ticker no desktop. Não há canvas nem rede desenhada por cima da arte.

O parâmetro `?no-webgl=1` continua disponível para forçar o modo estático em testes.

## GitHub Pages

O projeto usa `output: "export"`, `trailingSlash` e imagens sem otimização de servidor. Para uma futura publicação no repositório `sistema-pos-edital`, gere o build com:

```powershell
$env:NEXT_PUBLIC_BASE_PATH = "/sistema-pos-edital"
$env:NEXT_PUBLIC_SITE_URL = "https://leothaylor.github.io/sistema-pos-edital/"
npm run build
```

A criação do repositório e o push só devem ocorrer depois da aprovação visual local. O GitHub Pages deve permanecer desativado; a ativação em `main / root` é manual.

## Evidências

As capturas das sete seções, o fallback mobile e os relatórios Lighthouse estão em `evidence/`. O relatório técnico completo está em `RELATORIO_LANDING_POS_EDITAL_2026-08-15.md`.
