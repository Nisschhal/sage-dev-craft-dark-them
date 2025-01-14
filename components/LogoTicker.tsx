import acmeLogo from "../assets/images/acme.png"
import quantumLogo from "../assets/images/quantum.png"
import echoLogo from "../assets/images/echo.png"
import celestialLogo from "../assets/images/celestial.png"
import pulseLogo from "../assets/images/pulse.png"
import apexLogo from "../assets/images/apex.png"
import Image from "next/image"

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
]

export const LogoTicker = () => {
  return (
    <div className="">
      <div className="py-20">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex gap-14 w-full [mask-image:linear-gradient(to_right,transparent,black,transparent)] mt-8">
          {images.map((image, index) => (
            <Image src={image.src} alt={image.alt} key={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
