'use client'
import { motion, useTransform, useScroll } from 'motion/react'
import Image from 'next/image'
import {useRef } from 'react'

const specializations = [
    {
        id: 1,
        icon: "👕",
        title: "Streetwear",
        description: "Oversized tees, drop shoulders, custom wash finishes tailored for bold collections.",
        image: "/streetwear.png",
    },
    {
        id: 2,
        icon: "🧵",
        title: "Premium Embellishments",
        description: "HD rubber, puff print, embroidery, reflective, badges & trims with high-detail finesse.",
        image: "/embellishment.png",
    },
    {
        id: 3,
        icon: "🌿",
        title: "Sustainable Knits",
        description: "Organic cotton, GOTS-certified loungewear and everyday essentials in soft natural tones.",
        image: "/knit.png",
    },
    {
        id: 4,
        icon: "🧥",
        title: "Wovens & Workwear",
        description: "Heavyweight shirts, cargo pants, and jackets with structured utility designs.",
        image: "/woven.png",
    },
]

function SpecializationItem({ item, index }: { item: typeof specializations[0], index: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["50% end", "start 58%"] // <-- update to match your intent
    })

    const initialX = index % 2 === 0 ? -300 : 300
    const x = useTransform(scrollYProgress, [0, 1], [initialX, 0])
    const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

    return (
        <div
            className={`flex flex-col lg:flex-row ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''} items-center gap-12 overflow-x-hidden`}
        >
            <motion.div
                ref={ref}
                style={{ x, opacity }}
                className="w-full lg:w-1/2"
            >
                <Image src={item.image} alt={item.title} width={400} height={200} className="w-full rounded-xl shadow-md"/>
            </motion.div>
            <div className="lg:w-1/2">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
            </div>
        </div>
    )
}


export default function Specialization() {
    return (
        <section className="py-20 md:py-20">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">Our Specializations</h2>
                    <p className="mt-4">Tailored Apparel Solutions for Modern Brands Across Every Category.</p>
                </div>
                {specializations.map((item, index) => (
                    <SpecializationItem key={item.id} item={item} index={index} />
                ))}
            </div>
        </section>
    )
}