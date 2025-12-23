import { Canvas, useThree } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Model from "./Model";
import { useState, useEffect } from "react";

export default function ThreeScene({ paused }) {
  const [scale, setScale] = useState(0.8);
  const [position, setPosition] = useState([0, 0, 0]);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;

      if (width < 768) {
        setScale(0.7);
        setPosition([0, -1, 0]);
      } else if (width < 1024) {
        setScale(0.7);
        setPosition([0, 0, 0]);
      } else {
        setScale(0.8);
        setPosition([0, 0, 0]);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 50 }}>
      <Scene paused={paused} scale={scale} position={position} />
    </Canvas>
  );
}

/* 🔥 Scene Controller */
function Scene({ paused, scale, position }) {
  const { gl } = useThree();

  useEffect(() => {
    if (paused) {
      gl.setAnimationLoop(null);
    }
    return () => gl.setAnimationLoop(null);
  }, [paused, gl]);

  return (
    <>
      <ambientLight intensity={0.8} />
      <directionalLight position={[5, 5, 5]} />
      <Model scale={scale} position={position} />
      <Environment preset="studio" />
    </>
  );
}
