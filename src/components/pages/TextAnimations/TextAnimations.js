import React from 'react'
import FadeUpText from './FadeUpText/FadeUpText'
import LoremText from '../LoremText/LoremText'

const TextAnimations = () => {
    return (
        <>
            <section>
                <LoremText />
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
