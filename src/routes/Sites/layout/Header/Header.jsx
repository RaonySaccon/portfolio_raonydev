import { BiMenu } from "react-icons/bi"
import { useState } from "react"
import Aside from "../Aside/Aside"
import { CgClose } from "react-icons/cg"
import { navList } from "./navList"

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  return (
    <>
      <header className={`${menuIsOpen ? 'from-gray-950 via-gray-950 to-black bg-gradient-to-br' : 'bg-black/60 backdrop-blur'} transition fixed top-0 left-0 w-full text-white justify-around z-100`}>
        <div className="flex justify-around py-3">
          <h1>@RaonyDev ☕ </h1>
          <div className="md:hidden">
            {!menuIsOpen ? (
              <button className="text-2xl" onClick={() => setMenuIsOpen(true)}>
                <BiMenu />
              </button>
            ) : (
              <button className="text-2xl" onClick={() => setMenuIsOpen(false)}>
                <CgClose />
              </button>
            )}
          </div>
          <ul className="hidden md:flex gap-6 lg:gap-10">
            {navList.map(item => (
              <li className="flex items-center gap-1 ">{item.icon}{item.title}</li>
            ))}
          </ul>
        </div>
        {menuIsOpen && <Aside />}
        {!menuIsOpen && (
          <div className="w-full py-1 bg-yellow-400">
            <h2 className="text-sm text-black text-center">PROMOÇÃO DE 30% ACABA EM XX:XX:XX</h2>
          </div >
        )}
      </header>

    </>
  )
}

export default Header