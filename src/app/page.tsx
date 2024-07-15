'use client'

import { Banner } from '@/components/Banner'
import Infos from '@/components/Infos'
import Services from '@/components/Services'
import Header from '@/components/layout/Header'

import { items } from '@/components/Banner/mock'
import { infos, whoUs } from '@/components/Infos/mock'
import { itemsServices } from '@/components/Services/mock'
export default function Home() {
  const bannerMock = items
  const infosMock = infos

  return (
    <main className="flex flex-col items-center justify-between">
      <Header />
      <Banner items={bannerMock} />
      <Infos items={infosMock} benefits={true} />
      <Services items={itemsServices} />
      <Infos items={whoUs} contentImage={true} />
    </main>
  )
}
