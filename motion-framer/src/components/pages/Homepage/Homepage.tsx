import styles from "./Homepage.module.scss";
import gallery1 from "../../../assets/images/gallery/image1.jpeg";
import gallery2 from "../../../assets/images/gallery/image2.jpeg";
import gallery3 from "../../../assets/images/gallery/image3.jpeg";
import gallery4 from "../../../assets/images/gallery/image4.jpeg";
import gallery5 from "../../../assets/images/gallery/image5.jpeg";
import gallery6 from "../../../assets/images/gallery/image6.jpeg";
import gallery7 from "../../../assets/images/gallery/image7.jpeg";
import { MouseEvent, useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { getCoords } from "../../../utils/utils";

const Homepage = () => {
    const gallery = [
        {
            image: gallery1,
            top: -260,
        },
        {
            image: gallery2,
            top: -260,
            left: -260,
        },
        {
            image: gallery3,
            top: 90,
            left: -360,
        },
        {
            image: gallery4,
            top: 250,
        },
        {
            image: gallery5,
            top: 60,
            left: 340,
        },
        {
            image: gallery6,
            top: -200,
            left: 360,
        },
        {
            image: gallery7,
        },
    ];
    useEffect(() => {
        animate("#gallery > div ", {
            scale: [10, 1],
        }, {
            duration: 1,
            type: "tween",
            ease: "easeInOut",
            delay: stagger(-0.05),
            // at: "+0.5",
        })
    }, [])



    const [scope, animate] = useAnimate();
    const getSmallScaleValue = (total: number, value: number) => {
        return -5 + value / (total / 10);
    }

    function handleMouse(event: MouseEvent<HTMLDivElement>) {
        let width = event.currentTarget.clientWidth,
            height = event.currentTarget.clientHeight;

        animate(
            scope.current,
            {
                y: getSmallScaleValue(width, event.pageX - getCoords(event.currentTarget).left),
                x: -getSmallScaleValue(height, event.pageY - getCoords(event.currentTarget).top)
            },
            {
                type: "tween",
                duration: 0,
            }
        )
    }




    return (
        <>
            <section
                onMouseMove={handleMouse}
                onMouseLeave={() => {
                    animate(scope.current, { rotateX: 0, rotateY: 0, })
                }}
                className={styles.home}
            >
                <motion.div ref={scope} id="gallery" className={styles.gallery}>
                    {
                        gallery.map(item => {
                            return (
                                <div className={styles.item}>
                                    {
                                        <img style={{ top: item.top, left: item?.left }} src={item.image} alt="" />
                                    }
                                </div>
                            )
                        })
                    }
                </motion.div>
            </section>
        </>
    )
}

export default Homepage
