type SectionHeaderProps = {
    title: string
    subtitle?: string
    align?: "left" | "center" | "right"
  }
  
  export function SectionHeader({ title, subtitle, align = "center" }: SectionHeaderProps) {
    const alignment = {
      left: "text-left",
      center: "text-center",
      right: "text-right"
    }[align]
  
    return (
      <div className={`mb-8 ${alignment}`}>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      </div>
    )
  }
  