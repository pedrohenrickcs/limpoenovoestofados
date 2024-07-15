import Check from '@/assets/icons/check'
import Title from '../common/Title'
import Button from '../common/Button'
import Image from 'next/image'

type ItemsInfos = {
  icon?: string
  title?: string
}

type ContentType = {
  itemsInfos?: ItemsInfos[]
  title: string
  description: string
  bgColor?: string
  textColor?: string
}

type Items = {
  items: ContentType[]
  contentImage?: boolean
  benefits?: boolean
}

const Infos = ({ items, contentImage = false, benefits = false }: Items) => {
  const title = items[0].title
  const description = items[0].description
  const itemsInfos = items[0]?.itemsInfos
  const bgColor = items[0].bgColor
  const textColor = items[0].textColor || 'text-secondary-text-color'

  return (
    <div className={`flex ${bgColor} w-full justify-center`}>
      <div
        className={`container p-6 flex flex-col md:flex-row justify-center md:justify-between ${textColor}`}
      >
        <div className="w-full md:w-1/2">
          <Title title={title} textColor={textColor} bgColor={bgColor} />
          <p className="pt-4 text-base md:text-xl">
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </p>
          <div className="hidden md:flex">
            <Button type="secondary" />
          </div>
        </div>

        {benefits && (
          <div className="w-full md:w-1/3 flex self-center flex-col">
            <div className="mt-4">
              <Title
                title="Benefícios"
                textColor={textColor}
                bgColor={bgColor}
              />
              <div className="pt-4 bg-secondary-bg-color rounded-3xl p-8 mt-4 text-primary-text-color">
                <ul>
                  {itemsInfos?.map((item: ItemsInfos) => (
                    <li className="py-3 flex" key={item.title}>
                      <Check />
                      <span className="ml-2">{item.title}</span>
                    </li>
                  ))}
                  <li className="py-3 flex text-lg">
                    Você, sua casa e sua família merecem esse conforto!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {contentImage && (
          <div className="order-1 pb-4 mt-8 md:mt-0 md:pb-0 md:order-0 self-center">
            <Image
              src="/quem-somos.jpg"
              width={600}
              height={600}
              alt="Quem somos"
            />
          </div>
        )}

        <div className="flex md:hidden order-3">
          <Button type="secondary" />
        </div>
      </div>
    </div>
  )
}

export default Infos
