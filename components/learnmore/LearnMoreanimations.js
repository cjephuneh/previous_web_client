import React from "react";
import { Canvas } from "@react-three/fiber";
import Floor from "./Floor";
import Box from "./Box";
import LightBulb from "./LightBulb";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import Draggable from "./DragControls";
import { Suspense } from "react";

function LearnMoreanimations() {
  return (
    <div className="w-1/2 h-1/2">
      <Canvas
        shadows={true}
        className="bg-black"
        camera={{
          position: [-6, 7, 7],
        }}
      >
        <ambientLight color={"white"} intensity={0.3} />
        <LightBulb position={[0, 3, 0]} />
        <Draggable>
          <Suspense fallback={null}>
            <Box rotateX={3} rotateY={0.2} />
          </Suspense>{" "}
        </Draggable>
        <Floor position={[0, -1, 0]} />
      </Canvas>
    </div>
  );
}

export default LearnMoreanimations;
