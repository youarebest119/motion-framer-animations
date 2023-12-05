import { motion, useScroll, useMotionValueEvent, useTransform } from "framer-motion"
import React, { useRef } from 'react'
import FadeUpText from './FadeUpText/FadeUpText'
import LoremText from "../LoremText/LoremText";


const TextAnimations = () => {
    return (
        <>
            <section>
                <div className="vh-100"></div>
                <div className="vh-100"></div>
                <h3>
                    <FadeUpText>
                        This Text have fading up animation
                    </FadeUpText>
                </h3>
            </section>
        </>
    )
}

export default TextAnimations
