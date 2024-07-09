import Check from "@/assets/icons/check";
import Title from "../common/Title";
import Button from "../common/Button";
import Image from "next/image";

const Infos = () => {
  return ( 
    <div className="container p-6 flex flex-col md:flex-row justify-center md:justify-around text-secondary-text-color">
      <div className="w-full md:w-1/3">
        <Title title="Higienização" />
        <p className="pt-4">Os estofados são uma parte essencial de nossas casas e escritórios, proporcionando conforto e estilo aos nossos ambientes. No entanto, muitas vezes negligenciamos a necessidade de mantê-los limpos e higienizados. A higienização regular dos estofados é crucial por várias razões</p>
        <Button />
      </div>
      <div className="w-full md:w-1/3">
        <Title title="Benefícios" />
        <div className="pt-4 bg-secondary-bg-color rounded-3xl p-8 mt-4 text-primary-text-color">
          <ul>
            <li className="py-3 flex">
              <Check />
              <span className="ml-2">Saúde e Bem-Estar</span>
            </li>
            <li className="py-3 flex">
              <Check />
              <span className="ml-2">Durabilidade e Aparência</span>
            </li>
            <li className="py-3 flex">
              <Check />
              <span className="ml-2">Eliminação de Odores</span>
            </li>
            <li className="py-3 flex">
              <Check />
              <span className="ml-2">Prevenção de Infestações</span>
            </li>
            <li className="py-3 flex">
              <Check />
              <span className="ml-2">Adequado para uso em ambientes comerciais</span>
            </li>
            <li className="py-3 flex text-lg">
              Você, sua casa e sua família merecem esse conforto!
            </li>
          </ul>
        </div>
      </div>
    </div>
   );
}
 
export default Infos;