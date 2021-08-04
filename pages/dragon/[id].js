import React from 'react'
import ImageGallery from 'react-image-gallery';


const dragon = ({ capsule }) => {
    const images = capsule.flickr_images.map(image => {
        return {
            original: image,
            thumbnail: image
        }
    })
    return (
        <div className="text-white flex flex-col items-center w-7/12 mx-auto space-y-6">
            <h1 className="text-9xl mt-10 font-barcode text-center">{capsule.name}</h1>
            <p>{capsule.description}</p>
            <h2>Dragon Data Table</h2>
            <table className="table-fixed border-collapse border border-green-800 w-96">
                <tbody>
                    <tr>
                        <td className="border border-green-600 p-3">First Flight</td>
                        <td className="border border-green-600 p-3">{capsule.first_flight}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Crew Capacity</td>
                        <td className="border border-green-600 p-3">{capsule.crew_capacity}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Thruster Type</td>
                        <td className="border border-green-600 p-3">{capsule.thrusters[0].type}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Thruster Count</td>
                        <td className="border border-green-600 p-3">{capsule.thrusters[0].amount}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Engine Thrust to Weight</td>
                        <td className="border border-green-600 p-3">{capsule.thrusters[0].thrust.lbf}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Thruster Prop 1</td>
                        <td className="border border-green-600 p-3">{capsule.thrusters[0].fuel_1}</td>
                    </tr>
                    <tr>
                        <td className="border border-green-600 p-3">Thruster Prop 2</td>
                        <td className="border border-green-600 p-3">{capsule.thrusters[0].fuel_2}</td>
                    </tr>
                </tbody>
            </table>
            {images.length > 0 ? (<><h2 className="text-4xl">Images of Dragon</h2><ImageGallery lazyLoad={true} items={images} /></>) : <p>No images available of the Dragon</p>}
        </div>
    )
}


export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/dragons/' + id);
    const capsule = await res.json();

    return {
        props: {
            capsule
        },
    }
}


export default dragon
