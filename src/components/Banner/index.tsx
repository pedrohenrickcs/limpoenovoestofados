import Image from 'next/image'
import Button from '../common/Button'

type ContentType = {
  title: string
  description: string
  image: string
  bgColor?: string
  textColor?: string
}

type Items = {
  items: ContentType[]
}

export const Banner = (items: Items) => {
  const title = items.items[0].title
  const description = items.items[0].description
  const image = items.items[0].image
  const bgColor = items.items[0].bgColor
  const textColor = items.items[0].textColor

  return (
    <div
      className={`w-full items-center justify-between text-sm lg:flex ${bgColor} font-sans`}
    >
      <div className={`${bgColor} ${textColor} p-7 md:p-28 md:w-1/2 w-full`}>
        <h1 className="text-3xl md:text-5xl font-semibold pb-4">{title}</h1>
        <span className="text-xl md:text-2xl">{description}</span>
        <Button type="primary" />
      </div>

      <div className="w-full md:w-1/2">
        <Image src={image} width={1000} height={500} alt={title} />
      </div>
    </div>
  )
}
