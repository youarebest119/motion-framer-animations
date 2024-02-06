import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styles from "./Text.module.scss";

type propTypes = {
    item: {
        title?: string,
        details?: string,
    },
}

const Text = (props: propTypes) => {

    const ref = useRef<HTMLHeadingElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });
    const color = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["rgba(255, 255, 255, 0.4)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0.4)",])
    const filter = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)",])
    const opacity = useTransform(scrollYProgress, [0, 0.45, 0.55, 1], ["0", "1", "1", "0",])
    return (
        <>
            <li
                className={styles.item}
            >
                <motion.h3 style={{ color, filter, opacity }} ref={ref}>{props.item.title}</motion.h3>
                <div className={styles.box}>
                    <p>{props.item.details}</p>
                </div>
            </li>
        </>
    )
}

export default Text
