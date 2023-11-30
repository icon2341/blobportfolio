import React, { useMemo, useRef } from "react";
import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";
import {useAnimations, useScroll} from "@react-three/drei";

function Blob ({ ...props}){
  const mesh = useRef();
  const hover = useRef(false);
  const scroll = useScroll()

  const uniforms = useMemo(() => {
    return {
      u_time: { value: 0 },
      u_intensity: { value: 0.3 },
    };
  });

  // useFrame((state, delta) => {
  //   // The offset is between 0 and 1, you can apply it to your models any way you like
  //   const offset = 1 - scroll.offset
  //   state.camera.position.set(Math.sin(offset) , Math.atan(offset * Math.PI * 2), Math.cos((offset * Math.PI) / 3) * -10)
  //   state.camera.lookAt(0, 0, 0)
  // })

  useFrame((state) => {
    const { clock } = state;
    if (mesh.current) {
      mesh.current.material.uniforms.u_time.value =
        0.4 * clock.getElapsedTime();

      mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
        mesh.current.material.uniforms.u_intensity.value,
        hover.current ? 1 : 0.15,
        0.02
      );
    }
  });
  return (
    <mesh
      ref={mesh}
      scale={1}
        position={[0,0,0]}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      <icosahedronBufferGeometry args={[2, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

export default Blob;
