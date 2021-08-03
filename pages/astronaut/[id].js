import React from 'react'
import Image from 'next/image'

const astronaut = ({ astronaut }) => {
    return (
        <div className="text-white">
            <h1>{astronaut.name}</h1>
            <img src={astronaut.image} />
            <h2>{astronaut.agency}</h2>
            <h2>Launches: {astronaut.launches.length || 0}</h2>
            <h2>Status {astronaut.status}</h2>
        </div>
    )
}


export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/crew/' + id);
    const astronaut = await res.json();
    // console.log(rocket)




    return {
        props: {
            astronaut
        },
    }
}


export default astronaut
