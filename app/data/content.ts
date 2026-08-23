import {
  CalendarRange,
  FileSearch,
  Layers3,
  ScanSearch,
  type LucideIcon,
} from "lucide-react";

export type JourneyStep = {
  number: string;
  title: string;
  description: string;
  details: readonly string[];
  icon: LucideIcon;
};

export const problemChain = [
  "PDF",
  "matérias",
  "datas",
  "banca",
  "pesos",
  "prioridades",
  "cronograma",
] as const;

export const mechanismOutputs = [
  "Informações críticas",
  "Conteúdo organizado",
  "Leitura da banca",
  "Prioridades",
  "Rotina",
  "Alertas",
  "Contingência",
] as const;

export const journeySteps: readonly JourneyStep[] = [
  {
    number: "01",
    title: "Entenda seu edital",
    description: "Localize o que exige atenção antes de tomar qualquer decisão de estudo.",
    details: ["Datas", "Regras", "Estrutura", "Pontos críticos"],
    icon: FileSearch,
  },
  {
    number: "02",
    title: "Organize o conteúdo",
    description: "Transforme o conteúdo programático em uma estrutura que você consegue usar.",
    details: ["Matérias", "Tópicos", "Volume", "Agrupamentos"],
    icon: Layers3,
  },
  {
    number: "03",
    title: "Entenda sua banca",
    description: "Compreenda tendências de cobrança sem tratar padrões como previsão absoluta.",
    details: ["Perfil", "Recorrências", "Formato", "Nível de atenção"],
    icon: ScanSearch,
  },
  {
    number: "04",
    title: "Monte sua rotina",
    description: "Cruze prioridade, volume e tempo disponível em uma rotina possível de executar.",
    details: ["Prioridades", "Volume", "Tempo", "Sequência"],
    icon: CalendarRange,
  },
] as const;

export const simpleUseSteps = [
  ["01", "Abra a etapa"],
  ["02", "Insira o material solicitado"],
  ["03", "Execute"],
  ["04", "Use o resultado"],
  ["05", "Avance"],
] as const;

export const productModules = [
  ["00", "Comece aqui", "Visão geral e orientação de uso"],
  ["01", "Entenda seu edital", "Regras, datas e pontos críticos"],
  ["02", "Organize o conteúdo", "Estrutura utilizável do programa"],
  ["03", "Entenda sua banca", "Leitura prudente do padrão de cobrança"],
  ["04", "Monte sua rotina", "Prioridades cruzadas com o tempo disponível"],
  ["Extra", "Radar de mudanças", "Comparação quando houver nova versão"],
  ["Contingência", "Menos de 21 dias", "Rota para cenários de tempo curto"],
] as const;

export const audience = {
  forYou: [
    "acabou de receber um edital",
    "está perdido na organização inicial",
    "precisa transformar informação em prioridade",
    "quer reduzir trabalho operacional",
    "pretende usar IA como ferramenta de apoio",
  ],
  notForYou: [
    "curso completo das matérias",
    "promessa de aprovação",
    "substituto do estudo",
    "fórmula para passar sem estudar",
  ],
} as const;
