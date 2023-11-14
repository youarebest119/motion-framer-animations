import React, { useEffect, useState } from 'react'
import darkNight from "../../../assets/images/welcome-here/lights-night-city.jpg";
import styles from "./WelcomePage.module.scss";
import { motion, useSpring } from 'framer-motion';
import numberIntoWords from './numberIntoWords';
import { Container } from 'react-bootstrap';
import useMousePosition from '../MaskCursor/useMousePosition';

const phrases = [
    "The Petrol engine is 4951 cc",
    "It is available with Automatic transmission.",
    "The Mustang is a 4 seater 8 cylinder car",
    "The Ford Mustang has 1 Petrol Engine on offer",
];

const WelcomePage = () => {
    const [progress, setProgress] = useState(1);
    const mousePosition = useMousePosition();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        const interval = setInterval(() => {
            setProgress(progress * 1.2);
        }, 100);
        if (progress >= 100) {
            setProgress(100);
            document.body.style.overflow = "visible";
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [progress]);


    const animate = {
        initial: {
            x: "100%",
        },
        open: i => ({
            x: "0",
            transition: {
                delay: 1.8 + (0.1 * i),
                duration: 1,
                type: "spring", stiffness: 100
            }
        })
    };
    return (
        <>
            <motion.div
                className={styles.banner}
                animate={{
                    y: Math.round(progress) === 100 ? `-${progress}%` : 0,
                    transition: {
                        type: "spring",
                        duration: 4,
                        delay: 0.4,
                    }
                }}
            >
                <h2>
                    {Math.round(progress)}%
                </h2>
                <h3>{numberIntoWords(Math.round(progress))} percentage</h3>
            </motion.div>
            <div className={styles.main_content}>
                <Container>
                    <ul>
                        {
                            phrases.map((item, index) => (
                                <li>
                                    <motion.span
                                        variants={animate}
                                        initial={"initial"}
                                        custom={index}
                                        animate={Math.round(progress) === 100 ? "open" : ""}
                                    >
                                        {item}
                                    </motion.span>
                                </li>
                            ))
                        }
                    </ul>
                </Container>
            </div>
        </>
    )
}

export default WelcomePage
