import helixImage from "@/assets/images/helix2.png"
import emojiStartImage from "@/assets/images/emojistar.png"
import Image from "next/image"
export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-custom-y-padding text-center">
      <div className=" container ">
        <div className="max-w-xl mx-auto relative">
          <Image
            src={emojiStartImage}
            alt="emoji start"
            className="absolute -top-[120px] right-[calc(100%)] hidden sm:block"
          />
          <Image
            src={helixImage}
            alt="helix"
            className="absolute top-[120px] left-[calc(100%)] hidden sm:block"
          />

          <h2 className="section-title">Get instant access</h2>
          <p className="section-description ">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
        </div>
        <form
          action=""
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
        >
          <input
            type="email"
            name="email"
            id="email"
            placeholder="your@gmail.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9ca3af] sm:flex-1"
          />
          <button className="bg-white text-black h-12 rounded-lg px-5">
            Get access
          </button>
        </form>
      </div>
    </div>
  )
}
