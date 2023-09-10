import clsx from 'clsx'


interface Props {
  className?: string
  children?: React.ReactNode
}

const Section = ({ children, className: propClassName }: Props) => {
  const className = clsx(
    'px-8',
    propClassName,
  )

  return (
    <section className={className}>
      {children}
    </section>
  )
}

export default Section