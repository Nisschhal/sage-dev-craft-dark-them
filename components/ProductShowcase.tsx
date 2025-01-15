"use client"
import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"
import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 0.8", "end end"],
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0])
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-custom-y-padding">
      <div className="container">
        <div className="mx-auto">
          <h2 className="section-title">Intuitive Interface</h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <motion.div
          ref={imageRef}
          className=" mt-14"
          style={{
            opacity,
            rotateX,
            transformPerspective: "1000px",
          }}
        >
          <Image
            src={appScreen}
            alt="the product screenshot"
            className="mx-auto"
          />
        </motion.div>
      </div>
    </div>
  )
}
