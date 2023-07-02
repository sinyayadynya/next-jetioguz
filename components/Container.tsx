import clsx from 'clsx'

interface ContainerProps {
    className?: string;
    [x: string]: any;
}

export function Container({ className, ...props }: ContainerProps) {
    return (
        <div
            className={clsx('mx-auto max-w-7xl', className)}
            {...props}
        />
    )
}
