"use client"
import {Environment,Gltf, OrbitControls} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import { Teacher} from './Teacher'
 const Experience = () => {
    return (
        <>
        <Canvas>
         <OrbitControls />
         <Environment preset="sunset" />
         <ambientLight intensity={0.8} color="pink" />
         <Teacher teacher ={"Nanami"} position={[-1,-1.7,-3]}/>
         <Gltf src="/models/classroom_default.glb"  position={[0.2,-1.7,-2]}/>
         </Canvas> 
        </>  
    )
}

export default Experience