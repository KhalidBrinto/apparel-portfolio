"use client";
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Specializations data (copied from specialization.tsx)
const specializations = [
    {
        id: 1,
        title: "Streetwear",
        description: "Oversized tees, drop shoulders, custom wash finishes tailored for bold collections.",
        image: "/streetwear.png",
    },
    {
        id: 2,
        title: "Premium Embellishments",
        description: "HD rubber, puff print, embroidery, reflective, badges & trims with high-detail finesse.",
        image: "/embellishment.png",
    },
    {
        id: 3,
        title: "Sustainable Knits",
        description: "Organic cotton, GOTS-certified loungewear and everyday essentials in soft natural tones.",
        image: "/knit.png",
    },
    {
        id: 4,
        title: "Wovens & Workwear",
        description: "Heavyweight shirts, cargo pants, and jackets with structured utility designs.",
        image: "/woven.png",
    },
    {
        id: 5,
        title: "Accessories",
        description: "Heavyweight shirts, cargo pants, and jackets with structured utility designs.",
        image: "/woven.png",
    },
];

export default function Features() {
    return (
        <section className="w-full py-20">
            <div className="text-center mb-12 px-6">
                <h2 className="text-primary/85 text-4xl font-montserrat font-semibold lg:text-5xl">
                    Why Global Buyers Are Switching to Us
                </h2>
                <p className="mt-4 subtitle font-montserrat">
                    Your product is unique. Your sourcing partner should be too.
                </p>
            </div>
            <ImageCarousel />
        </section>
    );
}

function ImageCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [autoplay, setAutoplay] = React.useState(true);
    const [intervalKey, setIntervalKey] = React.useState(0);

    // Autoplay logic
    React.useEffect(() => {
        if (!autoplay || !emblaApi) return;

        const interval = setInterval(() => {
            emblaApi.scrollNext();
        }, 4000);
        return () => clearInterval(interval);
    }, [autoplay, emblaApi, intervalKey]);

    // Update selected index on slide change
    React.useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => {
            const newIndex = emblaApi.selectedScrollSnap();
            setSelectedIndex(newIndex);
        };
        emblaApi.on("select", onSelect);
        onSelect();
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi]);

    return (
        <div className="w-full">
            <div
                className="w-full h-[60vw] max-h-[600px] overflow-hidden"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
            >
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {specializations.map((item, idx) => (
                            <div
                                className="embla__slide min-w-0 flex-[0_0_100%] relative w-full h-[60vw] max-h-[600px] flex items-center justify-center transition-opacity duration-500"
                                key={item.id}
                                style={{
                                    opacity: selectedIndex === idx ? 1 : 0.5,
                                    pointerEvents: selectedIndex === idx ? "auto" : "none",
                                }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/50" />
                                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
                                    <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">
                                        {item.title}
                                    </h2>
                                    <p className="text-lg md:text-2xl text-white/90 drop-shadow-md max-w-2xl">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

            </div>
            
            {/* Position Indicators */}
            <div className="flex justify-center mt-6 gap-3">
                {specializations.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            console.log('Clicking indicator:', idx);
                            setIntervalKey(prev => prev + 1);
                            emblaApi?.scrollTo(idx);
                        }}
                        className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                            selectedIndex === idx 
                                ? 'bg-primary border-primary scale-125' 
                                : 'bg-transparent border-gray-400 hover:border-gray-300 hover:bg-gray-200'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
