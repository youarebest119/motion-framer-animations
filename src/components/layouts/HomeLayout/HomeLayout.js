import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from "./HomeLayout.module.scss";
import Header from '../../common/Header/Header'

const HomeLayout = () => {
    return (
        <>
            <main className={styles.layout}>
                <Header />
                <div className={styles.inner}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default HomeLayout
