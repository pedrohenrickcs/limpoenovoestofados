import Image from "next/image";
import Button from "./common/Button";

export const Banner = ({ data }: any) => {
  console.log('data', data);
  
  return ( 
    <div className="w-full items-center justify-between text-sm lg:flex bg-primary-bg-color font-sans">
      <div className="bg-primary-bg-color text-primary-text-color p-28 w-1/2">
        <h1 className="text-5xl font-semibold pb-4">{data?.title}</h1>
        <span className="text-2xl">{data?.description}</span>
        <Button />
      </div>

      <div className="w-1/2">
        <Image src="/banner_v3.jpg" width={1000} height={500} alt="Limpo e novo estofados" />
      </div>
      
    </div>
   );
}