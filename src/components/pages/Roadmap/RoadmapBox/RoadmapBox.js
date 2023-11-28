import React, { useRef } from 'react'
import styles from "./RoadmapBox.module.scss";
import { motion, useScroll } from "framer-motion";

const RoadmapBox = ({ title, text, variant }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["90vh 90vh", "end end"]
    });

    return (
        <motion.div
            className={styles.box}
            data-variant={variant}
            ref={ref}
        >
            <motion.div
                className={styles.box_line}
            >
                <motion.span
                    className={styles.completed}
                    style={{
                        scaleX: scrollYProgress,
                    }}
                ></motion.span>
                <span className={styles.circle}></span>
            </motion.div>
            <div className={styles.box_in}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </motion.div>
    )
}

export default RoadmapBox
