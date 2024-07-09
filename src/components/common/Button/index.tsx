import Whatsapp from "@/assets/icons/wpp";

const Button = () => {
  return ( 
    <div className="py-8">
      <a className="px-8 py-4 min-w-[160px] inline-flex text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-white hover:text-primary-bg-color focus:outline-none focus:ring transition-colors"
        href="https://wa.link/adczed" target="_blank">
        <Whatsapp />
        <span className="pl-2">Solicite um orçamento</span>
      </a>
    </div>
   );
}
 
export default Button;