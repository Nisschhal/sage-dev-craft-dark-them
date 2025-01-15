"use client" // Indicates that this component is for the client-side (browser)

import Image from "next/image" // Importing the Image component from Next.js
import appScreen from "../assets/images/app-screen.png" // Importing the app screenshot image
import { useRef } from "react" // Importing useRef hook for accessing DOM elements
import { motion, useScroll, useTransform } from "motion/react" // Importing motion components for animations

export const ProductShowcase = () => {
  const imageRef = useRef<HTMLDivElement>(null) // Creating a ref for the image container element

  // Using useScroll hook to track the scroll progress
  const { scrollYProgress } = useScroll({
    target: imageRef, // Targeting the image container
    offset: ["start 0.8", "end end"], // Setting the scroll offsets
  })

  // Defining transformations based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]) // Mapping scroll progress to opacity
  const rotateX = useTransform(scrollYProgress, [0, 1], [50, 0]) // Mapping scroll progress to rotateX angle

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

        {/* Motion component for animating the image */}
        <motion.div
          ref={imageRef} // Reference to the image container
          className=" mt-14" // Margin top applied
          style={{
            opacity, // Applying dynamic opacity based on scroll progress
            rotateX, // Applying dynamic rotation on the X-axis
            transformPerspective: "1000px", // Setting a 3D perspective for the rotation
          }}
        >
          <Image
            src={appScreen} // Source of the image
            alt="the product screenshot" // Alt text for the image
            className="mx-auto" // Centering the image horizontally
          />
        </motion.div>
      </div>
    </div>
  )
}
