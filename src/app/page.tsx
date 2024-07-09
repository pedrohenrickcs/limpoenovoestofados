'use client'

import { useState, useEffect } from "react";
import { Banner } from "@/components/Banner";
import Infos from "@/components/Infos";
import Services from "@/components/Services";
export default function Home() {

  const [data, setData] = useState('');

  useEffect(() => {
    fetch('/api/mock')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <Banner data={data} />
      <Infos data={data} />
      <Services />
    </main>
  );
}
