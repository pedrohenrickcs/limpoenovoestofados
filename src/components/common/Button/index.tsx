import Whatsapp from "@/assets/icons/wpp";

const Button = ({ type }: any) => {
  return type === 'primary' ? ( 
    <div className="py-8">
      <a className="px-8 py-4 min-w-[160px] inline-flex text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-white hover:text-primary-bg-color focus:outline-none focus:ring transition-colors"
        href="https://wa.link/adczed" target="_blank">
        <Whatsapp />
        <span className="pl-2 text-sm">Solicite um orçamento</span>
      </a>
    </div>
   ) : (
      <div className="py-8">
        <a className="px-8 py-4 min-w-[160px] inline-flex text-center bg-white text-primary-bg-color hover:text-white hover:bg-primary-bg-color border border-violet-600 rounded active:text-violet-500  focus:outline-none focus:ring transition-colors"
          href="https://wa.link/adczed" target="_blank">
          <Whatsapp />
          <span className="pl-2 text-sm">Solicite um orçamento</span>
        </a>
      </div>
   );
}
 
export default Button;