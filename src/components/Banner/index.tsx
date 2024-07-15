import Image from "next/image";
import Button from "../common/Button";
import { items } from "./mock";

export const Banner = () => {
  return ( 
    <div className="w-full items-center justify-between text-sm lg:flex bg-primary-bg-color font-sans">
      <div className="bg-primary-bg-color text-primary-text-color p-7 md:p-28 md:w-1/2 w-full">
        <h1 className="text-3xl md:text-5xl font-semibold pb-4">{items[0].title}</h1>
        <span className="text-xl md:text-2xl">{items[0].description}</span>
        <Button type="primary" />
      </div>

      <div className="w-full md:w-1/2">
        <Image src={items[0].image} width={1000} height={500} alt="Limpo e novo estofados" />
      </div>
    </div>
   );
}