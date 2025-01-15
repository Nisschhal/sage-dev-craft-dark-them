"use client"
import { useEffect } from "react"
import { Feature } from "./Feature"
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
  useEffect(() => {}, [])
  return (
    <section className="bg-black text-white py-[72px] sm:py-custom-y-padding">
      <div className="container ">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title">Everything you need</h2>
          <p className="section-description">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one plac. Set task, get reminders, and see your progress simply and
            quickly
          </p>
        </div>
        <div className="mt-16 flex flex-col sm:flex-row gap-4">
          {features.map((feature, index) => (
            <Feature
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
