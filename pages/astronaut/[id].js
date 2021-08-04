import React from 'react'
import Image from 'next/image'

const astronaut = ({ astronaut, launches }) => {
    return (
        <div className="text-white flex flex-col items-center w-7/12 mx-auto space-y-6 ">
            <h1 className="text-7xl mt-10 font-barcode text-center"><a href={astronaut.wikipedia} target="_blank" rel="noreferrer noopener">{astronaut.name}</a></h1>
            <div className="w-96">
                <img src={astronaut.image} />

            </div>
            <table className="table-fixed border-collapse border border-green-800 w-96">
                <tbody>
                    <tr>
                        <td className="border border-green-600 p-3">Agency</td>
                        <td className="border border-green-600 p-3">{astronaut.agency}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Launches</td>
                        <td className="border border-green-600 p-3">
                            {launches.length > 0 ? launches.map((launch, index) => (<p key={index}><a className="underline" href={`/launch/${launch.id}`} >{launch.name}</a></p>)) : "None Yet"}
                        </td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Status</td>
                        <td className="border border-green-600 p-3">{astronaut.status}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/crew/' + id);
    const astronaut = await res.json();

    var launchesId = astronaut.launches
    var promiseLaunch = launchesId.map(async (id) => {
        var res = await fetch('https://api.spacexdata.com/v4/launches/' + id);
        const launch = await res.json();
        return launch;
    })


    var launches = await Promise.all(promiseLaunch).then(ls => {
        return ls.map(l => {
            return l
        })
    })


    return {
        props: {
            astronaut, launches
        },
    }
}


export default astronaut
