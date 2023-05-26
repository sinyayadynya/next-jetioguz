import classNames from "classnames"
import { BreadcrumbsProps, Breadcrumbs } from "components/breadcrumbs"

interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string
  breadcrumbs?: BreadcrumbsProps["items"]
}

export function PageHeader({
  heading,
  breadcrumbs,
  children,
  className,
  ...props
}: PageHeaderProps) {
  return (
    <div className={classNames("container", className)} {...props}>
      {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} /> : null}
      <div
        className={classNames(
          "flex items-center py-10 text-text",
          children ? "justify-between" : "justify-center"
        )}
      >
        <h1 className="py-24 text-4xl font-serif font-bold tracking-tight text-gray-900">
          {heading}
        </h1>
        {children}
      </div>
    </div>
  )
}
