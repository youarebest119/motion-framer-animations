import styles from "./ScrollCard.module.scss";
import { AnimatePresence, animate, motion, stagger, useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { CommentIcon, Instagram, SaveIcon, ShareIcon, TwitterIcon, WhatsappIcon } from "../../../assets/icons/icons";
import sahara from "../../../assets/images/sahara.jpg";
import LikeButton from "../../common/LikeButton/LikeButton";

const ScrollCard = () => {
    const [show, setShow] = useState(false);
    const [img, setImg] = useState("");
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });
    const scale = useTransform(scrollYProgress, [0, 1], [6, 1]);

    useMotionValueEvent(scrollYProgress, "change", latestValue => {
        console.log('latestValue', latestValue)
    })

    useMotionValueEvent(scale, "change", latestValue => {
        if (latestValue === 1) {
            setImg(sahara);
        } else {
            setImg("");
        }
    });

    useEffect(() => {
        if (show) {
            animate(
                "#share_list li",
                {
                    y: [100, 0]
                },
                {
                    delay: stagger(0.1),
                }
            );
        }
    }, [show])
    return (
        <>
            <div style={{ height: "200vh" }} />
            <section
                ref={ref}
                className={styles.home}
            >
                <div className={styles.in}>
                    <motion.div style={{ scale }} className={styles.frame}>
                        <AnimatePresence mode="popLayout">
                            <motion.img
                                className={styles.frame_img}
                                src={img}
                                key={img}
                                alt=""
                                initial={{
                                    filter: "brightness(100) blur(10px)",
                                }}
                                animate={{
                                    filter: "brightness(1) blur(0px)",
                                }}
                                exit={{
                                    filter: "brightness(100) blur(10px)",
                                }}
                            />
                        </AnimatePresence>
                        <div className={styles.frame_footer}>
                            <div>
                                <LikeButton />
                            </div>
                            <div>
                                <button
                                    onClick={() => toast.success("comment")}
                                >
                                    <CommentIcon />
                                </button>
                            </div>
                            <div className="position-relative">
                                {
                                    show &&
                                    <div className={styles.overlay} onClick={() => setShow(false)} />
                                }
                                <AnimatePresence>
                                    {
                                        show &&
                                        <motion.ul
                                            initial={{
                                                opacity: 0,
                                                y: 100,
                                                scale: 0,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1,
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 100,
                                                scale: 0,
                                            }}
                                            id="share_list"
                                            className={styles.share_list}>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to="https://www.whatsapp.com/" className={styles.whatsapp}><WhatsappIcon /></Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to="https://www.instagram.com/" className={styles.instagram}><Instagram /></Link>
                                            </li>
                                            <li>
                                                <Link target="_blank" rel="noreferrer" to="https://www.twitter.com/" className={styles.twitter}><TwitterIcon /></Link>
                                            </li>
                                        </motion.ul>
                                    }
                                </AnimatePresence>
                                <button
                                    onClick={() => setShow(!show)}
                                    className={styles.share_btn}
                                >
                                    <ShareIcon />
                                </button>
                            </div>
                            <div className="ms-auto">
                                <button onClick={() => toast.success("post saved")}>
                                    <SaveIcon />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                    <h2 className={styles.title}>Public Profile</h2>
                </div>
            </section>
            <div style={{ height: "200vh" }} />
        </>
    )
}

export default ScrollCard
