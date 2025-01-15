"use client"
import clsx from "clsx"
import { useState } from "react"
import { FiMinus, FiPlus } from "react-icons/fi"

const items = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.",
  },
  {
    question: "How does the pricing work for teams?",
    answer:
      "Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.",
  },
]

import { AnimatePresence, motion } from "motion/react"

const AccordianItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    // layout for flex
    <motion.div layout className="py-7 border-b border-white/30 cursor-pointer">
      {/* // header|question for scale error, put layout to prevent scaling error */}
      <motion.div layout className="flex items-center " onClick={onClick}>
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <FiMinus /> : <FiPlus />}
      </motion.div>
      {/* <AnimatePresence> */}
      {isOpen && (
        <motion.div className="mt-2 pl-2" transition={{ delay: 1 }}>
          {answer}
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </motion.div>
  )
}

export const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  // set the active index,
  // if clicked same item then set active index to null
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#5D2CA8] to-black py-custom-y-padding h-[780px]">
      <div className="container">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title">Frequently asked questions</h2>
        </div>
        {/* FAQ Cards */}
        <div className="mt-12 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <AccordianItem
              question={item.question}
              answer={item.answer}
              key={index}
              isOpen={activeIndex === index} // check if the index matches the item index, if so open item
              onClick={() => toggleAccordion(index)} // toggle acordian by passing its index to set active index
            />
          ))}
        </div>
      </div>
    </div>
  )
}
