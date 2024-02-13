//these things we need to import 
import React, {useState, Suspense, useEffect} from 'react'

//canvas is just where we put our graphics
import { Canvas } from '@react-three/fiber'
//now these will help to do htings on canvas 
//also useGLTF help us to import 3d models
import { OrbitControls, Preload, meshBounds, useGLTF } from '@react-three/drei'
import CanvasLoader from "../Loader"

const Computers = ({ismobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  //here we use mesh not div while dealing with 3d models
  return (
    <mesh>
      <hemisphereLight intensity={.15} groundColor='black' />
      {/* pointlight is just a beam of light */}
      <pointLight intensity={10}/>
      <spotLight 
      position={[-20,50,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024} />
      <primitive object={computer.scene}
      //as to reduce the scale and position
      scale={ismobile ? .5: .55}
      position={ismobile ?[0,-3,-2.2]:[0,-3.25,-1.5]}
      rotation={[-.01,-.2,-.1]}
      />
    </mesh>

    
  )
}
//dealing with that computer model
const ComputerCanvas = () => {

  const [ismobile, setismobile] = useState(false)

  //for checking whether the screen is mobile or not we gonna use useeffect

  useEffect(()=>{
    const mediaquery = window.matchMedia("(max-width: 500)");

    //setting the initial value of ismobile state variable
    setismobile(mediaquery.matches);

    //callback function to handle changes to media queries
    const handlemediaquerychange = (e) => {
      setismobile(e.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaquery.addEventListener("change", handlemediaquerychange);

    // Remove the listener when the component is unmounted
    return () => {
    mediaquery.removeEventListener("change", handlemediaquerychange);
    };
  },[])
  return(
    <Canvas
    frameloop='demand'
    shadows
    camera={{position: [20,3,5], fov: 25}}
    //this is starting viewing camp=era angle
    gl={{preserveDrawingBuffer: true}}>

      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
         enableZoom={false}
         maxPolarAngle={Math.PI/2}
         minPolarAngle={Math.PI/2}
        />
        <Computers ismobile={ismobile}/>

      </Suspense>

      <Preload all/>

    </Canvas>
  )
};
export default ComputerCanvas

