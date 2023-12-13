import React from 'react';
import OnScrollRotate3dText from './OnScrollRotate3dText/OnScrollRotate3dText';
import FadeUpText from './FadeUpText/FadeUpText';
import TextScrollWithScroller from "./TextScrollWithScroller/TextScrollWithScroller"
import AnimatedNumbers from './AnimatedNumbers/AnimatedNumbers';

const TextAnimations = () => {
    return (
        <>
            <section>
                <h3>
                    <FadeUpText>
                        This Text have fading up animation
                    </FadeUpText>
                </h3>
            </section>
            <TextScrollWithScroller />
            <div style={{ height: '150vh', }} />
            <OnScrollRotate3dText />
            <AnimatedNumbers />
        </>
    )
}

export default TextAnimations
