"use client"

import React, { useEffect, useRef } from "react"
import ecoIcon from "@/assets/icons/ecosystem.svg"
import Image from "next/image"
import { motion, useMotionValue, useMotionTemplate } from "motion/react"

// The Feature component renders a card-like structure with a dynamic mask effect
export function Feature({
  title,
  description,
}: {
  title: string
  description: string
}) {
  // Ref to access the border container DOM element
  const borderRef = useRef<HTMLDivElement>(null)

  // Motion values to track and animate the mask's position
  const offSetX = useMotionValue(0)
  const offSetY = useMotionValue(0)

  // Dynamically generate the CSS mask-image using the motion values
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offSetX}px ${offSetY}px, black, transparent)`

  useEffect(() => {
    // Function to update the mask position based on mouse movement
    const updateMousePosition = (e: MouseEvent) => {
      if (!borderRef.current) return // Ensure the ref is initialized

      // Get the position and dimensions of the border container relative to the viewport
      const borderRect = borderRef.current.getBoundingClientRect()

      // Calculate the offset of the mouse position relative to the border container
      offSetX.set(e.clientX - borderRect.x) // Horizontal offset
      offSetY.set(e.clientY - borderRect.y) // Vertical offset

      //   // Debugging logs to check the calculated offset values
      //   console.log(`Offset X: ${offSetX.get()}, Offset Y: ${offSetY.get()}`)
    }

    // Attach the mousemove event listener to the window
    window.addEventListener("mousemove", updateMousePosition)

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [offSetX, offSetY]) // Dependencies: motion values to update dynamically

  return (
    <div className="border border-white/30 px-5 py-10 text-center rounded-xl relative">
      {/* The border container with a dynamic mask applied */}
      <motion.div
        className="absolute inset-0 border-2 border-purple-400 rounded-lg"
        style={{
          WebkitMaskImage: maskImage, // Set the dynamic mask for WebKit browsers
          maskImage, // Set the dynamic mask for standard browsers
          pointerEvents: "none", // Ensure the mask doesn't interfere with mouse events
        }}
        ref={borderRef} // Attach the ref to this element
      ></motion.div>

      {/* Icon with a background */}
      <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg sm:flex-1">
        <Image src={ecoIcon} alt="eco icon" />
      </div>

      {/* Title and description */}
      <h3 className="mt-6 font-bold">{title}</h3>
      <p className="mt-2 text-white/70">{description}</p>
    </div>
  )
}
