import { Suspense, useRef, useState } from 'react'
import { easing } from 'maath'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer, PerformanceMonitor } from '@react-three/drei'
import { Character, PeopleData, Loader } from './components'
export const App = () => {
  const [shittyPerf, degrade] = useState(false)

  return (
    <>
      <div className="container">
        <PeopleData />
        <div className="canvasContainer">
          <Canvas
            shadows
            dpr={[1, shittyPerf ? 1.5 : 2]}
            eventSource={document.getElementById('root')}
            eventPrefix="client">
            <PerformanceMonitor onDecline={() => degrade(true)} />
            <color attach="background" args={['#f0f0f0']} />
            <Character />
            <EnvProcessor shittyPerf={shittyPerf} />
          </Canvas>
        </div>
      </div>
    </>
  )
}

export const EnvProcessor = ({ shittyPerf }) => {
  const ref = useRef()
  useFrame((state, delta) => {
    if (!shittyPerf) {
      easing.damp3(
        ref.current.rotation,
        [Math.PI / 2, 0, state.clock.elapsedTime / 5 + state.pointer.x],
        0.2,
        delta
      )
      easing.damp3(
        state.camera.position,
        [
          Math.sin(state.pointer.x / 4) * 9,
          1.25 + state.pointer.y,
          Math.cos(state.pointer.x / 4) * 9
        ],
        0.5,
        delta
      )
      state.camera.lookAt(0, 0, 0)
    }
  })
  return (
    <Environment
      frames={shittyPerf ? 1 : Infinity}
      preset="city"
      resolution={256}
      background
      blur={0.8}>
      <group ref={ref}>
        <Lightformer
          intensity={5}
          form="ring"
          color="blue"
          rotation-y={Math.PI / 2}
          position={[-5, 2, -1]}
          scale={[10, 10, 1]}
        />
      </group>
    </Environment>
  )
}
