import React from 'react'
import Image from 'next/image'

const rocket = ({rocket}) => {
    return (
        <div className="text-white">
            <h1>{rocket.name}</h1>
            <p>{rocket.description}</p>
            <p>Engine Type: {rocket.engines.type}</p>
            <p>Engine Count: {rocket.engines.number}</p>
            <p>Engine Layout: {rocket.engines.layout}</p>
            <p>Engine Thrust to Weight: {rocket.engines.thrust_to_weight}</p>
            <p>Engine Prop 1: {rocket.engines.propellant_1}</p>
            <p>Engine Prop 2: {rocket.engines.propellant_2}</p>
            
            {rocket.flickr_images.map(image => (<img src={image} layout="fill" alt="Rocket Image" />))}
        </div>
    )
}


export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/rockets/' + id);
    const rocket = await res.json();
    // console.log(rocket)




    return {
        props: {
            rocket
        },
    }
}


export default rocket
