import type { ReactNode } from "react"

interface SkillBadgeProps {
  children: ReactNode
}

export function SkillBadge({ children }: SkillBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
      {children}
    </span>
  )
}

