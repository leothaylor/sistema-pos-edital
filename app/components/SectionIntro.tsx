type SectionIntroProps = {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionIntro({ index, eyebrow, title, description, align = "left" }: SectionIntroProps) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p className="section-eyebrow"><span>{index}</span>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  );
}
