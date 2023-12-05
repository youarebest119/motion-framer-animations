import React from 'react';
import { Outlet } from 'react-router-dom';
import styles from "./HomeLayout.module.scss";

const HomeLayout = () => {
    return (
        <>
            <main className={styles.layout}>
                <div className={styles.inner}>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default HomeLayout
