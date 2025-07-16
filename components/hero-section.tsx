"use client";
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { HeroHeader } from './header'
import { AuroraBackground } from './ui/aurora-background';
import dynamic from 'next/dynamic'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import { useState } from 'react';

const ModelViewer = dynamic(() => import('./model-viewer'), { ssr: false })

export default function HeroSection() {
    const [modelLoaded, setModelLoaded] = useState(false);

    return (
        <>
            <HeroHeader />



            <main className="overflow-x-hidden overflow-y-hidden">
                <AuroraBackground>
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
                                    {!modelLoaded && (
                                        <div className="flex items-center justify-center h-64">
                                            <span>Loading 3D Model...</span>
                                        </div>
                                    )}
                                    <div style={{ display: modelLoaded ? 'block' : 'none' }}>
                                        <ModelViewer onLoad={() => setModelLoaded(true)} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </AuroraBackground>
                <section className="bg-background py-20 md:py-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-xl">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>


            </main>

        </>
    )
}
