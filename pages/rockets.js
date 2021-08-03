import React from 'react'
import Card from '../components/Card'
import { getRockets } from '../utils/utils'

const rockets = ({ rockets }) => {
    return (
        <div>
            <div className="flex">
                {rockets.map(rocket => (<Card document={rocket} />))}
            </div>
        </div>
    )
}


export async function getStaticProps() {

    let rockets = await getRockets();

    return {
        props: {
            rockets,
        },
    }
}

export default rockets
