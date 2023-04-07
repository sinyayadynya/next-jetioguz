import classNames from "classnames"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <section
      className={classNames("py-2 md:py-2 lg:py-4")}
      {...props}
    >
      {children}
    </section>
  )
}
