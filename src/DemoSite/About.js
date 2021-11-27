import React from 'react'
import CommonHomeAbout from './CommonHomeAbout'
import web from './image/laptop.png';
function About() {
    return (
        <>
            <CommonHomeAbout
                image={web}
                visit="About Me"
                head="To Know More About Me"
            ></CommonHomeAbout>
        </>
    )
}

export default About
