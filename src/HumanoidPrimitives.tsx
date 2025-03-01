import React, { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { useFrame } from "@react-three/fiber";

const HumanoidPrimitives: React.FC = () => {
  /**
   * Definimos un material metálico reutilizable.
   * - metalness: 1 => muy metálico
   * - roughness: 0.05 => reflejo casi espejo
   * - clearcoat: 1 => capa extra de brillo
   */
  const metallicMaterial = useMemo(() => {
    return new MeshPhysicalMaterial({
      color: "#0f0f0f",
      metalness: 1,
      roughness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });
  }, []);

  // Opcional: animación simple (por ejemplo, que rote lentamente)
  useFrame((_, delta) => {
    // Podrías rotar todo el grupo, mover brazos, etc.
  });

  return (
    <group position={[0, 0, 0]}>
      {/* CABEZA: esfera */}
      <mesh material={metallicMaterial} position={[0, 1.8, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
      </mesh>

      {/* CUELLO: cilindro delgado */}
      <mesh material={metallicMaterial} position={[0, 1.4, 0]}>
        <cylinderGeometry args={[0.15, 0.15, 0.2, 16]} />
      </mesh>

      {/* TORSO: cilindro vertical más grande */}
      <mesh material={metallicMaterial} position={[0, 0.7, 0]}>
        <cylinderGeometry args={[0.5, 0.6, 1.2, 32]} />
      </mesh>

      {/* BRAZO IZQUIERDO: cilindro horizontal */}
      <mesh
        material={metallicMaterial}
        position={[-0.8, 1.0, 0]}
        rotation={[0, 0, 1.6]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
      </mesh>

      {/* BRAZO DERECHO */}
      <mesh
        material={metallicMaterial}
        position={[0.8, 1.0, 0]}
        rotation={[0, 0, -1.6]}
      >
        <cylinderGeometry args={[0.15, 0.15, 0.8, 16]} />
      </mesh>

      {/* PIERNA IZQUIERDA */}
      <mesh material={metallicMaterial} position={[-0.25, -0.1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1.2, 16]} />
      </mesh>

      {/* PIERNA DERECHA */}
      <mesh material={metallicMaterial} position={[0.25, -0.1, 0]}>
        <cylinderGeometry args={[0.2, 0.2, 1.2, 16]} />
      </mesh>
    </group>
  );
};

export default HumanoidPrimitives;
