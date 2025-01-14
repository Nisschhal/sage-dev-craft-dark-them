import ecoIcon from "@/assets/icons/ecosystem.svg"
import Image from "next/image"
const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
]

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container ">
        <div className="max-w-xl mx-auto">
          <h2 className="text-center text-5xl font-bold tracking-tighter">
            Everything you need
          </h2>
          <p className="text-center text-xl mt-5 text-white/70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one plac. Set task, get reminders, and see your progress simply and
            quickly
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature, index) => (
            <div
              className="border border-white/30 px-5 py-10 text-center rounded-xl"
              key={index}
            >
              <div className="inline-flex h-14 w-14 bg-white text-black justify-center items-center rounded-lg sm:flex-1">
                <Image src={ecoIcon} alt="eco icon" />
              </div>
              <h3 className="mt-6 font-bold">{feature.title}</h3>
              <p className="mt-2 text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
