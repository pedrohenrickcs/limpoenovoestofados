'use client'

import { Banner } from "@/components/Banner";
import Infos from "@/components/Infos";
import Services from "@/components/Services";
import WhoUs from "@/components/WhoUs";

import { items } from "@/components/Banner/mock";
import { infos } from "@/components/Infos/mock";
export default function Home() {
  const bannerMock = items 
  const infosMock = infos

  return (
    <main className="flex flex-col items-center justify-between">
      <Banner items={bannerMock} />
      <Infos items={infosMock} />
      <Services />
      <WhoUs />
    </main>
  );
}
