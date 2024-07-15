'use client'

import { Banner } from "@/components/Banner";
import Infos from "@/components/Infos";
import Services from "@/components/Services";
import WhoUs from "@/components/WhoUs";
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Banner />
      <Infos />
      <Services />
      <WhoUs />
    </main>
  );
}
