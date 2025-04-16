import { Link } from "react-scroll"

const Header = () => {
  return (
    <div id="header" className="bg-[#F0F0F0] fixed top-0 w-full py-5 z-30">
        <div className="flex items-center justify-between mx-auto max-w-7xl">
            <img src="/logo2.png" alt="logo header" className="w-60" />
            <nav>
                <ul className="flex items-center text-[#002452] text-xl font-[poppins] gap-6">
                    <li className="cursor-pointer">
                        <Link to="/">Vantagens</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/">Como utilizar</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/">Dúvidas</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="/">Contatos</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header