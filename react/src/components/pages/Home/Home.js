import React from 'react'
import styles from "./Home.module.scss";
import { ROUTES } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'
import { Container } from "react-bootstrap"
import { motion, useIsPresent } from "framer-motion";
const Home = () => {
    const isPresent = useIsPresent();
    return (
        <div className={styles.home}>
            <Container>
                <ul>
                    {
                        Object.keys(ROUTES).map(item => {
                            return (
                                <li key={item}>
                                    <NavLink to={`${ROUTES[item]}`}>
                                        {ROUTES[item]}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </Container>
            <motion.div
                initial={{ scaleX: 1 }}
                animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
                exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
                style={{ originX: isPresent ? 0 : 1 }}
                className={styles.overlay}
            />
        </div>
    )
}

export default Home
