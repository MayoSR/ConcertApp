import React from 'react'
import { BiSearchAlt2, BiSortAlt2 } from "react-icons/bi";

export default function Button(props) {

    const iconStyles = {
        height: '18px',
        width: '18px'
    }

    const iconMap = {
        "search": <BiSearchAlt2 style={iconStyles} />,
        "sort": <BiSortAlt2 style={iconStyles} />,
    }
    

    return (
        <div className='flex items-center text-[#ccc] hover:bg-[rgba(255,255,255,0.1)] border-2 rounded-md justify-between outline-0 px-2 py-1 cursor-pointer ml-2' >
            <p className='mr-1 text-sm font-bold '>{props.text.toUpperCase()}</p>
            {iconMap[props.icon]}
        </div>
    )
}
