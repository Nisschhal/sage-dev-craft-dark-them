"use client"
import acmeLogo from "../assets/images/acme.png"
import quantumLogo from "../assets/images/quantum.png"
import echoLogo from "../assets/images/echo.png"
import celestialLogo from "../assets/images/celestial.png"
import pulseLogo from "../assets/images/pulse.png"
import apexLogo from "../assets/images/apex.png"
import Image from "next/image"
import { motion } from "motion/react"

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
    <div className="bg-black">
      <div className="py-20">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black,transparent)] overflow-hidden mt-8">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 16,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            className="flex gap-14 flex-none pr-14 "
          >
            {images.map((image, index) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={index}
                className="h-8 w-auto"
              />
            ))}
            {/* Set 2 */}
            {images.map((image, index) => (
              <Image
                src={image.src}
                alt={image.alt}
                key={index}
                className="h-8 w-auto"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
