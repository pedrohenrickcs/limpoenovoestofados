import Check from "@/assets/icons/check";

const Infos = () => {
  return ( 
    <div className="container p-6 flex flex-col md:flex-row justify-center text-secondary-text-color">
      <div className="w-full md:w-1/3">
        <h2 className="text-4xl font-semibold py-4 relative">
          Higienização
          <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
        </h2>
        <p className="pt-4">Os estofados são uma parte essencial de nossas casas e escritórios, proporcionando conforto e estilo aos nossos ambientes. No entanto, muitas vezes negligenciamos a necessidade de mantê-los limpos e higienizados. A higienização regular dos estofados é crucial por várias razões</p>
      </div>

      <div className="w-full md:w-1/3">
        <h2 className="text-4xl font-semibold py-4 relative">
          Benefícios
          <span className="w-14 h-1 absolute bg-primary-bg-color bottom-0 left-0"></span>
        </h2>
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