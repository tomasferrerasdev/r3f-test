import { useLoader } from '@react-three/fiber'
import { useEffect } from 'react'
import { Mesh } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export const Character = () => {
  const gltf = useLoader(
    GLTFLoader,
    process.env.PUBLIC_URL + `avatar/scene.gltf`
  )

  useEffect(() => {
    gltf.scene.scale.set(1, 1, 1)
    gltf.scene.position.set(0, -2.5, 2)
    gltf.scene.traverse((obj) => {
      if (obj instanceof Mesh) {
        obj.castShadow = true
        obj.receiveShadow = true
        obj.material.envMapIntesity = 20
      }
    })
  }, [gltf])

  return <primitive object={gltf.scene} />
}
