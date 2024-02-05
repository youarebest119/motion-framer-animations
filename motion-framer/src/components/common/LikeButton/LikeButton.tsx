import styles from "./LikeButton.module.scss";
import Lottie from "lottie-react";
import likeAnimation from "../../../assets/animations/like.json";
import { HeartIcon } from "../../../assets/icons/icons";
import { useEffect, useState } from "react";

const LikeButton = () => {
    const [start, setStart] = useState(false);
    const [liked, setLiked] = useState(false);
    const handleClick = () => {
        setLiked(!liked);
    }
    useEffect(() => {
        if (liked) {
            setStart(true);
            setTimeout(() => {
                setStart(false);
            }, 1000);
        }
    }, [liked])
    return (
        <>
            <button onClick={handleClick} disabled={start} className={styles.like_btn}>
                {
                    start &&
                    <Lottie className={styles.animation} animationData={likeAnimation} loop={true} />
                }
                <HeartIcon active={liked} />
            </button>
        </>
    )
}

export default LikeButton
