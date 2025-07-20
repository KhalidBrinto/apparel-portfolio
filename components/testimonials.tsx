"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-6">
        <h2 className="text-center text-4xl font-montserrat font-semibold lg:text-5xl text-primary/85 mb-10">
          What Our Partners Say
        </h2>
        <Card className="flex flex-col md:flex-row items-center md:items-stretch gap-8 p-8">
          {/* Left: Quote */}
          <div className="flex-1 flex flex-col justify-center">
            <blockquote className="text-2xl font-semibold text-muted-foreground mb-4">
              “Partnering with ATTINI SOURCING has transformed our supply chain. Their commitment to quality, timely delivery, and transparent communication sets a new industry standard.”
            </blockquote>
            <div className="text-lg font-medium">Arif Rahman Ratin</div>
            <div className="text-muted-foreground">Founder, Attini Sourcing</div>
          </div>
          {/* Right: Owner Photo */}
          <div className="flex-shrink-0 flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Owner"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full object-cover border-4 border-primary shadow-lg"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
