import { Banner } from "@/components/Banner"
import { Hero } from "@/components/Hero"
import { Navbar } from "@/components/Navbar"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Banner />
      <Navbar />
      <Hero />
    </>
  )
}
