import logoImage from "@/assets/images/logosaas.png"
import MenuIcon from "@/assets/icons/menu.svg"
import { FiMenu } from "react-icons/fi"

import Image from "next/image"

export const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container ">
        <div className="py-4 flex justify-between items-center ">
          <div className="relative">
            <div className="absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] blur-md" />
            <Image src={logoImage} alt="logo" className="w-12 h-12 relative" />
          </div>
          {/* Mobile nav */}
          <FiMenu className="sm:hidden text-white w-7 h-7 border border-white border-opacity-30 rounded-md p-0.5" />
          {/* Desktop nav */}
          <nav className="hidden sm:flex gap-6 items-center">
            <a
              href="#home"
              className=" text-white text-opacity-60 hover:text-opacity-100"
            >
              Home
            </a>
            <a
              href="#features"
              className=" text-white text-opacity-60 hover:text-opacity-100"
            >
              Features
            </a>
            <a
              href="#updates"
              className=" text-white text-opacity-60 hover:text-opacity-100"
            >
              Updates
            </a>
            <a
              href="#help"
              className=" text-white text-opacity-60 hover:text-opacity-100"
            >
              Help
            </a>
            <a
              href="#customers"
              className=" text-white text-opacity-60 hover:text-opacity-100"
            >
              Customers
            </a>
          </nav>
        </div>
      </div>
    </div>
  )
}
