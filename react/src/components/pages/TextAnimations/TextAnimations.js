import React from 'react';
import FadeUpText from './FadeUpText/FadeUpText';


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
