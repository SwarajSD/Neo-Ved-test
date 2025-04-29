type SectionHeaderProps = {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  id?: string
  colorClass?: string // Or use a specific union type like "primary" | "secondary" | "accent" if you have predefined colors
}

export function SectionHeader({ 
  title, 
  subtitle, 
  align = "center", 
  id,
  colorClass = "" 
}: SectionHeaderProps) {
  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  }[align]

  // Apply color class if provided
  const titleColorClass = colorClass ? `text-${colorClass}` : ""
  const subtitleColorClass = colorClass ? `text-${colorClass}/70` : "text-muted-foreground"

  return (
    <div className={`mb-8 ${alignment}`} id={id}>
      <h2 className={`text-3xl font-bold tracking-tight ${titleColorClass}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-2 ${subtitleColorClass}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}