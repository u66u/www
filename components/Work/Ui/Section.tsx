import clsx from 'clsx'

type SectionProps = React.HTMLAttributes<HTMLElement>

export default function Section({ children, ...props }: SectionProps) {
  return (
    <section
      {...props}
      className={clsx('mx-auto w-full max-w-full ', props.className)}
    >
      {children}
    </section>
  )
}
