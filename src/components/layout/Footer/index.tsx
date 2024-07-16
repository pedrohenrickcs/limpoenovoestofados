import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { IoMdTime } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className="bg-third-bg-color text-primary-text-color w-full pt-8 flex justify-center flex-col text-center">
      <h2 className="text-center text-gray-400 text-2xl mb-2">
        Entre em contato
      </h2>
      <div className="flex justify-center items-center m-2">
        <FaWhatsapp size={20} color="#e1a95a" />
        <a href="https://wa.link/adczed" target="_blank" className="ml-2">
          (11) 93211-3284
        </a>
      </div>
      <div className="flex justify-center items-center m-2">
        <MdEmail size={20} color="#e1a95a" />
        <a href="mailto:email@gmail.com" target="_blank" className="ml-2">
          email@gmail.com
        </a>
      </div>
      <div className="flex justify-center items-center m-2">
        <FaInstagram size={20} color="#e1a95a" />
        <a
          href="https://www.instagram.com/limpoenovo.estofados"
          target="_blank"
          className="ml-2"
        >
          @limpoenovoestofados
        </a>
      </div>
      <div className="flex justify-center items-center m-2">
        <IoMdTime size={20} color="#e1a95a" />
        <span className="ml-2">Segunda a Sexta (8h às 18h)</span>
      </div>
      <div className="mt-8 py-7 bg-primary-bg-color">
        <p className="text-center text-sm text-gray-400">
          Copyright 2024 © Limpo e novo estofados. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
