import React, { useEffect } from 'react'
import { motion, useMotionValue, useMotionValueEvent, useSpring } from "framer-motion";
import styles from "./Cursor.module.scss"
// import useMousePosition from './useMousePosition';

const Cursor = () => {
    const mousePosition = {
        x: useMotionValue(0),
        y: useMotionValue(0),
    }
    useEffect(() => {
        window.onmousemove = e => {
            mousePosition.x.set(e.clientX - 5);
            mousePosition.y.set(e.clientY - 5);
        };
        return () => {
            window.onmousemove = null;
        };
    }, []);
    const springX = useSpring(mousePosition.x);
    const springY = useSpring(mousePosition.y);
    return (
        <>

            <motion.div
                className={styles.cursor}
                style={{
                    x: springX,
                    y: springY,
                }}
            />

        </>
    )
}

export default Cursor
