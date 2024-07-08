'use client'

import { useState, useEffect } from "react";
import { Banner } from "../components/Banner";
export default function Home() {

  const [data, setData] = useState({ title: '', description: '' });

  useEffect(() => {
    fetch('/api/mock')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return (
    <main className="flex flex-col items-center justify-between">
      <Banner data={data} />

      <div className="container py-6 flex justify-center text-secondary-text-color">
        <div className="w-2/6">
          <h2 className="text-4xl font-semibold py-4 relative">
            Higienização
            <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
          </h2>
          <p className="pt-4">Os estofados são uma parte essencial de nossas casas e escritórios, proporcionando conforto e estilo aos nossos ambientes. 
            No entanto, muitas vezes negligenciamos a necessidade de mantê-los limpos e higienizados. A higienização regular dos estofados é crucial por várias razões:</p>
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl font-semibold py-4 relative">
            Benefícios:
            <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
          </h2>
          <p className="pt-4">
            Saúde e Bem-Estar: Os estofados acumulam poeira, ácaros, bactérias e outros alérgenos ao longo do tempo. Esses contaminantes podem causar problemas respiratórios, alergias e outros problemas de saúde. A higienização regular ajuda a eliminar esses agentes nocivos, melhorando a qualidade do ar e a saúde geral dos ocupantes.<br />
            Durabilidade e Aparência: Manter os estofados limpos ajuda a preservar suas cores e tecidos, evitando o desgaste prematuro. A remoção de manchas e sujeiras pode prolongar a vida útil dos estofados, mantendo-os com uma aparência nova por mais tempo.<br />
            Eliminação de Odores: Os estofados podem absorver odores de alimentos, bebidas, fumaça e outros elementos do ambiente. A higienização ajuda a eliminar esses odores desagradáveis, deixando os estofados frescos e com um cheiro agradável.<br />
            Prevenção de Infestações: Estofados sujos podem se tornar um local propício para a proliferação de insetos, como pulgas e percevejos. A limpeza regular ajuda a prevenir essas infestações, garantindo um ambiente mais seguro e higiênico.
          </p>
        </div>
      </div>
    </main>
  );
}
