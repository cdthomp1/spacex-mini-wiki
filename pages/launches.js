import React from 'react'
import Card from '../components/Card'
import { getLaunches } from '../utils/utils'

const launches = ({ missions }) => {
    return (
        <>  
        <h1 className="text-center text-white text-8xl p-5 font-barcode">SpaceX Launches</h1>
            <div className="w-11/12 mx-auto flex flex-wrap gap-x-4">
                {missions.map((mission, index) => (<Card key={index} document={mission} />))}
            </div>
        </>
    )
}


export async function getStaticProps() {

    let missions = await getLaunches();

    return {
        props: {
            missions,
        },
    }
}

export default launches