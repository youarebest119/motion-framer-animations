import { useState } from "react";
import styles from "./Sidebar.module.scss";
import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "./assets/icons/icons";
import logo from "./assets/logo/dark-theme-logo.svg";
import { motion } from "framer-motion";

interface propTypes {
    active: boolean,
    setActive?: (param: boolean) => void,
}

const Sidebar = (props: propTypes) => {
    const [socialLinkActive, setSocialLinkActive] = useState<number | null>(null);
    const [navLinkActive, setNavlinkActive] = useState<number | null>(null);
    const navs = [
        {
            index: 1,
            to: "/",
            label: "Homepage",
        },
        {
            index: 2,
            to: "/",
            label: "About Us",
        },
        {
            index: 3,
            to: "/",
            label: "Contact Us",
        },
        {
            index: 4,
            to: "/",
            label: "Portfolio",
        },
    ];
    const social_media = [
        {
            to: "",
            index: 1,
            icon: <GithubIcon />,
            key: "github",
        },
        {
            to: "",
            index: 2,
            icon: <FacebookIcon />,
            key: "facebook",
        },
        {
            to: "",
            index: 3,
            icon: <TwitterIcon />,
            key: "twitter",
        },
        {
            to: "",
            index: 4,
            icon: <LinkedinIcon />,
            key: "linkedin",
        },
    ];

    const variants = {
        hidden: {
            scale: 0,
        },
        open: {
            scale: 1,
        }
    };

    const bgVariants = {
        hidden: {
            scale: 0,
            x: "50%",
            y: "-50%",
            // transform: "translate(50%, -50%)",
        },
        open: {
            scale: 3,
            x: "50%",
            y: "-50%",
            // transform: "translate(50%, -50%)",
        }
    };

    const navLinkVariants = {
        hidden: {
            y: 100,
            opacity: 0,
        },
        open: {
            opacity: 1,
            y: 0,
        },
    };
    return (
        <>
            <motion.aside
                className={`${styles.sidebar} ${props.active ? styles.active : ""}`}
                initial={{
                    opacity: 0,
                    visibility: "hidden",
                    pointerEvents: "none",
                }}
                animate={props.active ? {
                    opacity: 1,
                    visibility: "visible",
                    pointerEvents: "all",
                } : {}}
                transition={{
                    delay: props.active ? 0.3 : 1,
                }}
            >
                <div className={styles.header}>
                    <a href=""><img src={logo} alt="logo" /></a>
                </div>
                <div className={styles.sidebar_nav}>
                    <ul>
                        {
                            navs.map(item => (
                                <li
                                    key={item.label}
                                >
                                    <a
                                        href={item.to}
                                        className={`${navLinkActive === item.index ? styles.active : ""} ${navLinkActive === null ? styles.inactive : ""}`}
                                        onMouseEnter={() => {
                                            setNavlinkActive(item.index);
                                        }}
                                        onMouseLeave={() => setNavlinkActive(null)}
                                    >
                                        <motion.div
                                            initial={"hidden"}
                                            variants={navLinkVariants}
                                            exit={"hidden"}
                                            transition={{
                                                delay: !props.active ? item.index * 0.05 : 0.4 + (item.index * 0.1),
                                                type: "tween",
                                                ease: "easeInOut",
                                                duration: 0.2,
                                            }}
                                            animate={props.active ? "open" : ""}
                                        >
                                            {item.label}
                                        </motion.div>
                                        <motion.div
                                            variants={variants}
                                            animate={item.index === navLinkActive ? "open" : ""}
                                            initial={"hidden"}
                                            transition={{
                                                duration: 0.5,
                                                stiffness: 100,
                                                // mass: 1,
                                                bounce: 0,
                                                type: "tween",
                                            }}
                                            className={styles.link_bg}
                                        >
                                        </motion.div>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className={styles.footer}>
                    <ul>
                        {
                            social_media.map(item => {
                                return (
                                    <li key={item.key}>
                                        <a
                                            href={item.to}
                                            onMouseEnter={() => {
                                                setSocialLinkActive(item.index);
                                            }}
                                            onMouseLeave={() => setSocialLinkActive(null)}
                                        >
                                            <motion.div
                                                initial={"hidden"}
                                                variants={navLinkVariants}
                                                exit={"hidden"}
                                                animate={props.active ? "open" : ""}
                                                transition={{
                                                    delay: !props.active ? item.index * 0.05 : 0.1 + (item.index * 0.1),
                                                    type: "tween",
                                                    ease: "easeInOut",
                                                    duration: 0.2,
                                                }}
                                            >
                                                {item.icon}
                                            </motion.div>
                                            <motion.div
                                                variants={variants}
                                                animate={item.index === socialLinkActive ? "open" : ""}
                                                initial={"hidden"}
                                                transition={{
                                                    duration: 1,
                                                    stiffness: 100,
                                                    // mass: 1,
                                                    bounce: 4,
                                                    type: "spring",
                                                }}
                                                className={styles.link_bg}
                                            >
                                            </motion.div>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </motion.aside>
            <motion.div
                className={`${styles.sidebar_bg_one}`}
                initial="hidden"
                variants={bgVariants}
                transition={{
                    duration: 1,
                    stiffness: 150,
                    bounce: 4,
                    delay: props.active ? 0 : 0.2,
                }}
                animate={props.active ? "open" : ""}
            />
            <motion.div
                className={`${styles.sidebar_bg_two}`}
                initial="hidden"
                variants={bgVariants}
                transition={{
                    duration: 1,
                    delay: props.active ? 0.2 : 0,
                    stiffness: 150,
                    bounce: 4,
                }}
                animate={props.active ? "open" : ""}
            />
        </>
    )
}

export default Sidebar
