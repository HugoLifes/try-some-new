import "./styles.css";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import React from "react";
import HumanoidPrimitives from "../src/HumanoidPrimitives";

const App: React.FC = () => {
  return (
    <Canvas
      // se ajusta la camara
      style={{ width: "100vw", height: "100vh" }}
      camera={{ position: [0, 2, 5], fov: 45 }}
    >
      {/* Luz ambiental sutil */}
      <ambientLight intensity={0.3} />

      {/* Luz direccional para resaltar brillos */}
      <directionalLight intensity={1} position={[5, 5, 5]} />

      {/* Renderizamos el modelo metálico */}
      <HumanoidPrimitives />

      {/* Entorno para reflejos (puedes probar distintos presets: city, studio, sunset...) */}
      <Environment preset="city" />

      {/* Control de cámara con el mouse */}
      <OrbitControls />
    </Canvas>
  );
};

export default App;
