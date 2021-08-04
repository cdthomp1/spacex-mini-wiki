import React from 'react'
import ImageGallery from 'react-image-gallery';

const launch = ({ launch }) => {
    const images = launch.links.flickr.original.map(image => {
        return {
            original: image,
            thumbnail: image
        }
    })
    var date = new Date(launch.date_utc)
    const youtubeLink = `https://www.youtube-nocookie.com/embed/${launch.links.youtube_id}`
    return (
        <div className="text-white flex flex-col items-center w-7/12 mx-auto space-y-6 ">
            <h1 className="text-9xl mt-10 font-barcode text-center"><a href={launch.links.wikipedia} target="_blank" rel="noreferrer noopener">{launch.name}</a></h1>
            <div className="filter w-96 drop-shadow-greenShadow">
                <img src={launch.links.patch.large} />
            </div>
            <h2 className="text-4xl">Launch Details</h2>
            <div className="flex flex-col items-center space-y-6 ">
                <h3 className="text-3xl">Launch Date: </h3>
                <p className="text-xl">{date.toString()}</p>
                <h3 className="text-3xl">Details: </h3>
                <p className="text-xl">{launch.details}</p>
                <h3 className="text-3xl">Webcast: </h3>
                <iframe width="560" height="315" src={youtubeLink} title="YouTube video player" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>

            {images.length > 0 ? (<><h2 className="text-4xl">Images From Launch</h2><ImageGallery lazyLoad={true} items={images} /></>) : <p>No images available of launch</p>}
        </div>
    )
}

export async function getServerSideProps(context) {

    const { id } = context.query;

    var res = await fetch('https://api.spacexdata.com/v4/launches/' + id);
    const launch = await res.json();

    return {
        props: {
            launch
        },
    }
}


export default launch
