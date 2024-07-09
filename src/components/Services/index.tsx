import Image from "next/image";
import { validUrl } from "@/utils/validImage";
import Title from "../common/Title";

const Services = () => {
  return ( 
    <div>
      <Title title="Nosso serviços" />

      <div className="container flex justify-between flex-wrap">
        <div className="pt-8 pb-4 text-center relative">
          <Image src={`${validUrl}/sofa.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Sofás</span>
        </div>
        <div className="pt-8 pb-4 text-center h-1/3 relative">
          <Image src={`${validUrl}/poltrona.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Poltronas</span>
        </div>
        <div className="pt-8 pb-4 text-center relative">
          <Image src={`${validUrl}/colchao.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Colchão</span>
        </div>
        <div className="pt-8 pb-4 text-center relative">
          <Image src={`${validUrl}/puff.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Puffs</span>
        </div>
        <div className="pt-8 pb-4 text-center relative">
          <Image src={`${validUrl}/tapetes.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Tapetes</span>
        </div>
        <div className="pt-8 pb-4 text-center relative">
          <Image src={`${validUrl}/cortina.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Cortinas</span>
        </div>
        <div className="pt-8 pb-4 text-center relative">
          <Image src={`${validUrl}/cabeceira.jpg`} width={500} height={500} alt="Sofá" />
          <span className=" absolute w-full h-full top-0 left-0 bg-white opacity-0 z-10 transition-opacity duration-300 hover:opacity-20 cursor-pointer"></span>
          <span className="text-3xl font-medium py-4 block">Cabeceiras estofadas</span>
        </div>
      </div>

      
    </div>
   );
}
 
export default Services;