import { motion, useScroll } from "framer-motion";
import React, { useRef } from 'react';
import { Container } from "react-bootstrap";
import LoremText from '../LoremText/LoremText';
import styles from "./Roadmap.module.scss";
import RoadmapBox from './RoadmapBox/RoadmapBox';

const Roadmap = () => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["90vh end", "end end"],
        smooth: 10
    });

    return (
        <section className={styles.roadmap_sec}>
            <LoremText />
            <Container>
                <h2>The Roadmap</h2>
                <div
                    className={styles.roadmap}
                    ref={ref}
                >
                    <div
                        className={styles.line}
                    >
                        <motion.span
                            style={{
                                scaleY: scrollYProgress
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                            }}
                        ></motion.span>
                    </div>
                    <div>
                        <RoadmapBox
                            title="March 2015-2017"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="start"
                        />
                        <RoadmapBox
                            title="March 2017 - 2023"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="end"
                        />
                        <RoadmapBox
                            title="04 2018"
                            text="Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed"
                            variant="start"
                        />
                        <RoadmapBox
                            title="March 2017 - 2023"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="end"
                        />
                        <RoadmapBox
                            title="March 2023-2027"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="start"
                        />
                        <RoadmapBox
                            title="March 2027-2028"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="end"
                        />
                        <RoadmapBox
                            title="March 2028-2030"
                            text="lorem ipsum, or lipsum as it is sometimes"
                            variant="start"
                        />
                    </div>
                </div>
            </Container>
            <LoremText />
        </section>
    )
}

export default Roadmap
