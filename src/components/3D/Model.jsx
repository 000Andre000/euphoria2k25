// Model.jsx
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { scene } = useGLTF("/models/Urban_Echoes.glb");

  return (
    <primitive
      object={scene}
      rotation={[Math.PI / 4, 0, 0]} // rotate 90° around Z
      scale={0.5} // scale down the model
      {...props}
    />
  );
}
