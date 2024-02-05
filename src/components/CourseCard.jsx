import React from 'react'

import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

const CourseCard = (props) => {
    const { title, thumbnail, price, author, description } = props;
    return (
        <HoverCard>
            <HoverCardTrigger>
                <div className='flex flex-col shadow-lg rounded-md overflow-hidden pb-3 mt-8 mx-auto md:mx-2 h-52 md:h-64 lg:h-96'>
                    <div className=''>
                        <img className='object-cover w-36 sm:w-56 md:w-64 lg:w-80 h-28 sm:h-36 md:h-42 lg:h-52' src={thumbnail} alt="" />
                    </div>
                    <div className='mx-2 my-auto'>

                        <h1 className='font-bold text-left'>{title}</h1>
                        <h3 className='text-sm text-left text-slate-500 hidden md:block'>{author}</h3>
                        <h3 className='font-bold text-left'>${price}</h3>
                
                    </div>
                </div>
            </HoverCardTrigger>
            <HoverCardContent>
                <div className='rounder-lg border-2 border-black rounded-lg h-full w-full grid place-content-center'>

                <p>short description: {description}</p>
                PUBLISHED ON : 'Date'
                </div>
            </HoverCardContent>
        </HoverCard>


    )
}

export default CourseCard
