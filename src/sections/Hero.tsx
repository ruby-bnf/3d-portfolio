/* eslint-disable react/no-unknown-property */
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { HackerRoom } from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import { Leva, useControls } from "leva";
import { calculateSizes } from "../constants";
import { useMediaQuery } from "react-responsive";

export const Hero = () => {
  // leva - tools to find the scales for the three 3 objects
  // const controls = useControls("HackerRoom", {
  //   positionX: { value: 2.5, min: -10, max: 10 },
  //   positionY: { value: 2.5, min: -10, max: 10 },
  //   positionZ: { value: 2.5, min: -10, max: 10 },

  //   rotationX: { value: 0, min: -10, max: 10 },
  //   rotationY: { value: 0, min: -10, max: 10 },
  //   rotationZ: { value: 0, min: -10, max: 10 },

  //   scale: { value: 1, min: 0.1, max: 10 },
  // });

  const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isSmall = useMediaQuery({ maxWidth: 440 });
  // const isMobile = useMediaQuery({ maxWidth: 768 });
  // const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  // const sizes = calculateSizes(isSmall, isMobile, isTablet);
  return (
    <div className="min-h-screen w-full flex flex-col relative ">
      <div className="w-full mx-auto flex flex-col sm:mt-6 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi! Im Ruby<span className="waving-hand">👋</span>
        </p>
        <p className="hero_tag text-gray_gradient">
          Building Products & Brands
        </p>
      </div>

      <div className="w-full h-full absolute inset-0">
        <Leva />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
            <HackerRoom
              position={[8.5, -8, 0.8]}
              rotation={[0, -Math.PI, 0]}
              scale={isMobile ? 0.1 : 10}
            />

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
