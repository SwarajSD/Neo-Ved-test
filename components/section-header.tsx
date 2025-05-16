type SectionHeaderProps = {
  title: string
  subtitle?: string
  description?: string
  align?: "left" | "center" | "right"
  id?: string
  colorClass?: string // Optional Tailwind color class like "primary", "secondary"
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = "center",
  id,
  colorClass = ""
}: SectionHeaderProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[align]

  const titleColorClass = colorClass ? `text-${colorClass}` : ""
  const subtitleColorClass = colorClass ? `text-${colorClass}/80` : "text-muted-foreground"
  const descriptionColorClass = colorClass ? `text-${colorClass}/70` : "text-muted-foreground"

  return (
    <div className={`mb-8 ${alignment}`} id={id}>
      {subtitle && (
        <p className={`text-sm font-medium uppercase tracking-wider ${subtitleColorClass}`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl font-bold tracking-tight ${titleColorClass}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-2 ${descriptionColorClass}`}>
          {description}
        </p>
      )}
    </div>
  )
}
