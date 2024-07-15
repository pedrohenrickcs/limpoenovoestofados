import Button from "../common/Button";
import Title from "../common/Title";
import Image from "next/image";
import { items } from "./mock";

const WhoUs = () => {
  return ( 
    <div className="px-6 my-16">
      <Title title={items[0].title} />
      <div className="container my-8 flex flex-col items-start md:flex-row md:justify-between text-secondary-text-color">

        <div className="w-full md:w-1/2 order-2 md:order-1">
          <p className="text-base md:text-xl">
            Bem-vindo à <b>Limpo e novo estofados</b>, sua solução confiável e profissional para a limpeza de estofados. 
            Fundada com o compromisso de oferecer serviços de excelência, nossa empresa se destaca pela qualidade, 
            eficiência e atenção aos detalhes.<br /><br />
            Nossa missão é superar as expectativas dos nossos clientes, entregando resultados excepcionais e um atendimento personalizado. Seja para residências, escritórios ou ambientes comerciais, estamos prontos para renovar seus estofados e contribuir para um espaço mais agradável e higienizado.<br /><br />
            Obrigado por escolher a <b>Limpo e novo estofados</b>. Estamos ansiosos para servi-lo e demonstrar por que somos a escolha ideal para a limpeza de seus estofados.
          </p>
          <Button />
        </div>

        <div className="order-1 pb-4 md:pb-0 md:order-0">
          <Image src="/quem-somos.jpg" width={600} height={600} alt="Quem somos" />
        </div>

      </div> 
    </div>
  );
}
 
export default WhoUs;