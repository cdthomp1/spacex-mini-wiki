import React from 'react'
import Image from 'next/image'

const dragon = ({capsule}) => {
    return (
        <div className="text-white">
            <h1>{capsule.name}</h1>
        
        </div>
    )
}


export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/dragons/' + id);
    const capsule = await res.json();
    // console.log(capsule)




    return {
        props: {
            capsule
        },
    }
}


export default dragon
