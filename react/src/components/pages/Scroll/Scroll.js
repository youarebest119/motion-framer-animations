import React from 'react'
import Animation from './Animation/Animation'
import Animation2 from './Animation2/Animation2'
import Animation3 from './Animation3/Animation3'

const Scroll = () => {
    return (
        <>
            <Animation />
            <div style={{ height: 100 }} />
            <Animation2 />
            <Animation3 />
        </>
    )
}

export default Scroll
