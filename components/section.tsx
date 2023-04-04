import classNames from "classnames"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <section
      className={classNames("py-8 md:py-12 lg:py-20")}
      {...props}
    >
      {children}
    </section>
  )
}
