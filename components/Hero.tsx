import { FiArrowRight } from "react-icons/fi"
import cursorIcon from "@/assets/images/cursor.png"
import messageIcon from "@/assets/images/message.png"
import Image from "next/image"
export const Hero = () => {
  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-24 relative overflow-hidden">
      <div className="absolute top-[calc(100%-120px)] w-[750px] h-[375px] sm:w-[1536] sm:h-[768] lg:w-[2400] lg:h-[1200] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#b48cde] bg-[radial-gradient(closest-side,#000_82%,#9560EB)]"></div>
      <div className="container relative">
        <div className="flex justify-center items-center">
          <a
            href="#"
            className="inline-flex gap-3 py-1 px-2 border rounded-md border-white/30"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="flex items-center gap-1">
              <span>Read More</span>
              <FiArrowRight />
            </span>
          </a>
        </div>
        <div className="flex items-center justify-center">
          <div className="inline-text  relative">
            <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8">
              One Task <br /> at a Time
            </h1>
            <Image
              src={cursorIcon}
              alt="cursor"
              width={200}
              height={200}
              className="hidden sm:block absolute top-[50%] right-[480px]"
            />
            <Image
              src={messageIcon}
              alt="cursor"
              width={200}
              height={200}
              className="hidden sm:block  absolute top-[10%] left-[510px]"
            />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-xl tracking-tight text-center mt-8 max-w-md">
            Celebrate a joy of accomplishment with an app designed to track
            progress, motivate your effects, and celebrate your success.
          </p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="py-3 px-5 text-black bg-white rounded-lg font-medium">
            Get for free
          </button>
        </div>
      </div>
    </div>
  )
}
