import { Canvas } from "@react-three/fiber";
import Blob from "../components/Blob";
import styles from "./index.module.scss";
import { ScrollControls, Sky, useGLTF, useAnimations } from '@react-three/drei'
import { motion, useScroll } from "framer-motion"


export default function Home() {
    const { scrollYProgress } = useScroll();

    return (
        <div>
            <Canvas camera={{ position: [0.0, 0.0, 10] }}>
                {/*<ScrollControls pages={3}>*/}
                {/*    */}
                {/*</ScrollControls>*/}
                <Blob />
            </Canvas>
            {/*<div className={styles.container}>*/}

            {/*    <h1 className={styles.titleText}>*/}
            {/*        Ashar Rahman*/}
            {/*    </h1>*/}
            {/*    <h2 className={styles.subText}>*/}
            {/*        Software Engineer*/}
            {/*    </h2>*/}
            {/*</div>*/}
        </div>
    );
}
