import Image from "next/image"
import appScreen from "../assets/images/app-screen.png"

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-custom-y-padding">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title">Intuitive Interface</h2>
          <p className="section-description">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="max-w-6xl mx-auto mt-14 ">
          <Image src={appScreen} alt="the product screenshot" />
        </div>
      </div>
    </div>
  )
}
