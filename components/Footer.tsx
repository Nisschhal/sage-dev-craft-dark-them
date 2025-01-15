import {
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitchFill,
  RiTwitterFill,
  RiTwitterXFill,
  RiYoutubeFill,
} from "react-icons/ri"

export const Footer = () => {
  return (
    <div className="bg-black  border-t border-white/20">
      <div className="container text-white/60 py-5 ">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between ">
          <p className="text-center">
            © 2025 Sage Dev Craft, Inc. All right reserved
          </p>
          {/* Socials */}
          <ul className="flex justify-center items-center gap-2.5">
            <li>
              <RiInstagramFill className="w-5 h-5 cursor-pointer hover:text-white hover:scale-105 duration-200" />
            </li>
            <li>
              <RiFacebookFill className="w-5 h-5 cursor-pointer hover:text-white hover:scale-105 duration-200" />
            </li>
            <li>
              <RiTwitterXFill className="w-5 h-5 cursor-pointer hover:text-white hover:scale-105 duration-200" />
            </li>
            <li>
              <RiPinterestFill className="w-5 h-5 cursor-pointer hover:text-white hover:scale-105 duration-200" />
            </li>
            <li>
              <RiYoutubeFill className="w-5 h-5 cursor-pointer hover:text-white hover:scale-105 duration-200" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
