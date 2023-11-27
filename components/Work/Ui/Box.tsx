import clsx from 'clsx'

type BoxProps = React.HTMLAttributes<HTMLElement>

export default function Box({ children, ...props }: BoxProps) {
  return (
    <div
      {...props}
      className={clsx(
        'px-2 py-2 md:px-3 md:py-3',
        props.className
      )}
    >
      {children}
    </div>
  )
}
