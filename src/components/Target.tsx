/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import React, { useRef } from "react";
import type { Mesh } from "three";
import { useGSAP } from "@gsap/react";

const Target = ({ ...props }) => {
  const targetRef = useRef<Mesh>(null!);

  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  console.log(scene);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene}></primitive>
    </mesh>
  );
};

export default Target;
