export type ContenType = {
  title?: string
  color?: string
  bgColor?: string
  textColor?: string
}

const Title = ({
  title,
  color = 'text-secondary-text-color',
  bgColor = 'bg-primary-bg-color',
}: ContenType) => {
  return (
    <h2 className={`text-4xl font-semibold py-4 relative ${color}`}>
      {title}
      <span className={`w-14 h-1 absolute ${bgColor} bottom-0 left-0`}></span>
    </h2>
  )
}

export default Title
