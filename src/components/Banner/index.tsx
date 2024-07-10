import Image from "next/image";
import Button from "../common/Button";

export const Banner = () => {
  return ( 
    <div className="w-full items-center justify-between text-sm lg:flex bg-primary-bg-color font-sans">
      <div className="bg-primary-bg-color text-primary-text-color p-7 md:p-28 md:w-1/2 w-full">
        <h1 className="text-3xl md:text-5xl font-semibold pb-4">Higienização Completa e Impermeabilização de Estofados</h1>
        <span className="text-xl md:text-2xl">Tenha um estofado limpo e novo e toda sua família protegida das impurezas</span>
        <Button type="primary" />
      </div>

      <div className="w-full md:w-1/2">
        <Image src={`/banner_v4.jpg`} width={1000} height={500} alt="Limpo e novo estofados" />
      </div>
      
    </div>
   );
}