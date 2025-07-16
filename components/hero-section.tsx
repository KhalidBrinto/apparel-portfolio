"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { AuroraBackground } from './ui/aurora-background';
import dynamic from 'next/dynamic'

const ModelViewer = dynamic(() => import('./model-viewer'), { ssr: false })

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <AuroraBackground>

            
            <main className="overflow-x-hidden overflow-y-hidden">
                <section>
                    <div className="pb-24 pt-20 md:pb-32 lg:pb-56 lg:pt-20">
                        <div className="relative mx-auto flex items-center justify-center max-w-6xl flex-col px-6 md:flex-row lg:justify-between">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-3xl font-medium md:text-4xl lg:mt-16 xl:text-5xl">The Future of Fashion Sourcing Starts Here</h1>
                                <p className="mt-8 max-w-2xl text-pretty text-lg">Smarter. Faster. More Creative. Built for Today’s Fashion Brands.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Start Building</span>
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="px-5 text-base">
                                        <Link href="#link">
                                            <span className="text-nowrap">Request a demo</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* 3D Model */}
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2">
                                <ModelViewer />
                            </div>

                        </div>
                    </div>
                </section>


            </main>
            </AuroraBackground>
        </>
    )
}
