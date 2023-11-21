import React from 'react'
import WaterFilledAnimationButton from './WaterFilledAnimationButton/WaterFilledAnimationButton'
import styles from "./AnimatedButtons.module.scss";
import { Container } from "react-bootstrap";

const AnimatedButtons = () => {
    return (
        <section className={styles.buttons}>
            <Container>
                <ul>
                    <li>
                        <WaterFilledAnimationButton>
                            Just Hover Me
                        </WaterFilledAnimationButton>
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default AnimatedButtons
