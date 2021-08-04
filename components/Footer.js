import React from 'react'

const Footer = () => {
    return (
        <>
            <footer className="mx-auto text-white text-center mt-5">
                <div className="w-10 mx-auto">
                    <img id="footerImg" alt="logo" src="https://cameronthompson.io/images/Dev.png" />

                </div>
                <p>&copy; Cameron Thompson 2021</p>
                <div className="flex justify-center space-x-4">
                    <div><a href="https://cameronthompson.io">Website</a></div>
                    <div><a href="https://www.linkedin.com/in/cameron-thompson-dev/" target="_blank"
                        rel="noopener noreferrer">LinkedIn</a></div>
                    <div><a href="https://github.com/cdthomp1" target="_blank" rel="noopener noreferrer">Github</a></div>
                    <div><a href="https://twitter.com/DeveloperCam" target="_blank"
                        rel="noopener noreferrer">Twitter</a></div>
                </div>
            </footer>
        </>
    )
}

export default Footer