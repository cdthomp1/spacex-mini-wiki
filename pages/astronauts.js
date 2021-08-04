import React from 'react'
import Card from '../components/Card'
import { getAstronauts } from '../utils/utils'

const astronauts = ({ astronauts }) => {
    return (
        <>  
        <h1 className="text-center text-white text-8xl p-5 font-barcode">SpaceX Astronauts</h1>
            <div className="w-11/12 mx-auto flex flex-wrap gap-x-4">
                {astronauts.map((astronaut, index) => (<Card key={index} document={astronaut} />))}
            </div>
        </>
    )
}


export async function getStaticProps() {

    let astronauts = await getAstronauts();

    return {
        props: {
            astronauts,
        },
    }
}

export default astronauts