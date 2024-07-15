import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-gray-800 text-primary-bg-color w-full py-4">
      <nav className="container mx-auto text-2xl font-medium flex justify-between items-center">
        <div className="font-bold text-sm flex justify-center">
          <Link href="/">
            <Image
              src="/logo_v2.jpg"
              width={100}
              height={100}
              alt="Limpo e novo estofados"
              className="m-auto"
            />
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Benefícios
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              Nossos serviços
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:text-gray-400">
              Quem Somos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
