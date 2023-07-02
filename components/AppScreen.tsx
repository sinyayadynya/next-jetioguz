import { forwardRef, ForwardedRef, ReactNode } from 'react'
import clsx from 'clsx'

interface AppScreenProps {
  children?: ReactNode;
  className?: string;
  [x: string]: any;
}

export function AppScreen({ children, className, ...props }: AppScreenProps) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

interface AppScreenHeaderProps {
  children?: ReactNode;
}

AppScreen.Header = forwardRef<HTMLDivElement, AppScreenHeaderProps>(function AppScreenHeader({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

AppScreen.Title = forwardRef<HTMLDivElement, AppScreenHeaderProps>(function AppScreenTitle({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  )
})

AppScreen.Subtitle = forwardRef<HTMLDivElement, AppScreenHeaderProps>(function AppScreenSubtitle({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  )
})

AppScreen.Body = forwardRef<HTMLDivElement, AppScreenProps>(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('flex-auto', className)}
    >
      {children}
    </div>
  )
})
