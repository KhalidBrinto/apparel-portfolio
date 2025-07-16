// model-viewer.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'
import { Group } from 'three'
import { EffectComposer, Bloom, HueSaturation, Vignette } from '@react-three/postprocessing'
import { useMediaQuery } from 'react-responsive'
import { useEffect } from 'react'

function Model({ isDragging }: { isDragging: boolean }) {
    const gltf = useGLTF('/models/model_shaded.glb')
    const modelRef = useRef<Group>(null)


    // Animate rotation on every frame
    useFrame(() => {
        if (modelRef.current && !isDragging) {
            modelRef.current.rotation.y -= 0.005
        }
    })

    return (
        <Center>
            <group ref={modelRef}>
                <primitive object={gltf.scene} scale={1.8} />
            </group>
        </Center>
    )
}

export default function ModelViewer({ onLoad }: { onLoad?: () => void }) {
    const controlsRef = useRef<OrbitControlsImpl>(null)
    const [isDragging, setIsDragging] = useState(false)
    const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' })

    useEffect(() => {
        // Simulate loading or call onLoad when actual loading is done
        if (onLoad) onLoad();
    }, [onLoad]);

    return (
        <div className='h-[350px] sm:h-[400px] lg:h-[600px] w-full'> {/* or full height */}
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={1.0} />

                {!isSmallScreen && (
                    <>
                        <directionalLight
                            color="#ffeccd"
                            intensity={1.2}
                            position={[0, 5, 0]}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />
                        <directionalLight
                            color="#d0eaff"
                            intensity={1.5}
                            position={[-5, 2, 2]}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />
                        <directionalLight
                            color="#fff2e6"
                            intensity={1.5}
                            position={[5, 1, -2]}
                            castShadow
                            shadow-mapSize-width={1024}
                            shadow-mapSize-height={1024}
                        />
                    </>
                )}
                <Suspense fallback={null}>
                    <Model isDragging={isDragging} />
                </Suspense>
                <OrbitControls
                    ref={controlsRef}
                    enableZoom={false}              // optional
                    enablePan={false}               // optional
                    maxPolarAngle={Math.PI / 2}     // limit vertical rotation
                    minPolarAngle={Math.PI / 2}     // lock to horizontal plane (Y-axis only)
                    touches={{
                        ONE: 0, // Disable single-finger touch rotation
                        TWO: 0, // Disable pinch-zoom (just in case)
                    }}
                    onStart={() => setIsDragging(true)}
                    onEnd={() => setIsDragging(false)}
                />
                <EffectComposer>
                    <Bloom intensity={0.3} luminanceThreshold={0.2} />
                    <Vignette eskil={false} offset={0.1} darkness={1.1} />
                    <HueSaturation       // Range: -1 to 1 (0 = no change)
                        saturation={0.3}  // Range: -1 to 1 (0 = no change)
                    />
                </EffectComposer>
            </Canvas>
        </div>
    )
}
