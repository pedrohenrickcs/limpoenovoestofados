import Image from 'next/image'
import Title from '../common/Title'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

type ContentServices = {
  id: number
  image: string
  title: string
}

type Items = {
  items: ContentServices[]
  id?: string
}

const Services = ({ items, id }: Items) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  return (
    <div className="w-full flex justify-center my-0 md:my-16" id={id}>
      <div className="container px-6 md:px-0">
        <Title title="Nosso serviços" />
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="my-8 text-center">
              <div className="relative">
                <Image
                  src={`${item.image}`}
                  width={500}
                  height={500}
                  alt={item?.title}
                  className="m-auto"
                />
                <span className="absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
              </div>
              <span className="text-3xl font-medium py-4 block text-secondary-text-color">
                {item.title}
              </span>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Services
