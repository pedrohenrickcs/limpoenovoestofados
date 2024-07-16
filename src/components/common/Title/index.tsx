export type ContenType = {
  title?: string
  color?: string
  textColor?: string
  underlineColor?: string
}

const Title = ({
  title,
  textColor = 'text-secondary-text-color',
  underlineColor = 'bg-primary-bg-color',
}: ContenType) => {
  return (
    <h2 className={`text-4xl font-semibold py-4 relative ${textColor}`}>
      {title}
      <span
        className={`w-14 h-1 absolute ${underlineColor} bottom-0 left-0`}
      ></span>
    </h2>
  )
}

export default Title
