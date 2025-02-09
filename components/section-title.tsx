interface SectionTitleProps {
  title: string;
  subtitle?: string;
  props?: React.HTMLProps<HTMLDivElement>;
}

export function SectionTitle({ title, subtitle, props }: SectionTitleProps) {
  return (
    <div {...props} className="space-y-4">
      <h1 className="text-2xl font-bold text-primary md:text-4xl">{title}</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
}
