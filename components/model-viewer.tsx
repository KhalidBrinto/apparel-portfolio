// model-viewer.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Center } from '@react-three/drei'
import { Suspense, useRef, useState } from 'react'
import { Group } from 'three'

function Model({ isDragging }: { isDragging: boolean }) {
    const gltf = useGLTF('/models/model.glb')
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

export default function ModelViewer() {
    const controlsRef = useRef<any>(null)
    const [isDragging, setIsDragging] = useState(false)
    return (
        <div className='h-[600px] w-full'> {/* or full height */}
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <ambientLight intensity={1.2} />

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
                <Suspense fallback={null}>
                    <Model isDragging={isDragging}/>
                </Suspense>
                <OrbitControls
                    ref={controlsRef}
                    enableZoom={false}              // optional
                    enablePan={false}               // optional
                    maxPolarAngle={Math.PI / 2}     // limit vertical rotation
                    minPolarAngle={Math.PI / 2}     // lock to horizontal plane (Y-axis only)
                    onStart={() => setIsDragging(true)}
                    onEnd={() => setIsDragging(false)}
                />
            </Canvas>
        </div>
    )
}
