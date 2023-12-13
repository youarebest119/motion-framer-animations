import React from 'react'
import styles from "./Home.module.scss";
import { ROUTES } from '../../../utils/constants'
import { NavLink } from 'react-router-dom'
import { Container } from "react-bootstrap"

const Home = () => {
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
        </div>
    )
}

export default Home
