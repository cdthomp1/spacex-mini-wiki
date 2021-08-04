import React from 'react'
import Card from '../components/Card'
import { getDragons } from '../utils/utils'

const dragons = ({ dragons }) => {
    return (
        <>  
        <h1 className="text-center text-white text-8xl p-5 font-barcode">SpaceX Dragons</h1>
            <div className="w-11/12 mx-auto flex flex-wrap gap-x-1">
                {dragons.map((dragon, index) => (<Card key={index} document={dragon} />))}
            </div>
        </>
    )
}


export async function getStaticProps() {

    let dragons = await getDragons();

    return {
        props: {
            dragons,
        },
    }
}

export default dragons