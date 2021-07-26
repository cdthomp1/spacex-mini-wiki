import React from 'react'
import Link from 'next/link'
import 'tailwindcss/tailwind.css'

const Card = ({document}) => {
    return (
        <div className="w-60 h-72 flex flex-col items-center justify-around mx-auto bg-white rounded-md filter drop-shadow-greenDrop my-5">
        <div className="h-28 mx-auto p-1">
            <img className="object-contain" src={document.cover_image} />
        </div>
        <h2 className="mx-auto font-bold text-black">{document.title}</h2>
        <div className="mx-auto w-28 h-14 flex items-center justify-center text-white font-bold bg-secondary rounded-md filter drop-shadow-blackDrop">
            <Link href={document.link}>Learn More</Link>
        </div>
    </div>
    )
}

export default Card
