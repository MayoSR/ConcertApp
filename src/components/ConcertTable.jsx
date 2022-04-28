import React, { useState } from 'react'
import { BiSortAlt2 } from "react-icons/bi";
import Button from './Button';

export default function ConcertTable() {


    const concert = [
        {
            'artist': 'Dua Lipa',
            'date': '12/12/2022',
            'state': 'New York',
            'city': 'Manhattan',
            'time': '05:30 PM',
        },
        {
            'artist': 'Dua Lipa',
            'date': '12/12/2022',
            'state': 'New York',
            'city': 'Manhattan',
            'time': '05:30 PM'
        },
        {
            'artist': 'Dua Lipa',
            'date': '12/12/2022',
            'state': 'New York',
            'city': 'Manhattan',
            'time': '05:30 PM'
        },
        {
            'artist': 'Dua Lipa',
            'date': '12/12/2022',
            'state': 'New York',
            'city': 'Manhattan',
            'time': '05:30 PM'
        },
        {
            'artist': 'Dua Lipa',
            'date': '12/12/2022',
            'state': 'New York',
            'city': 'Manhattan',
            'time': '05:30 PM'
        },
    ]

    const [filterContent,setFilterContent] = useState(concert)

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const iconStyles = {
        height: '20px',
        width: '20px'
    }

    const filterFunction = (e) => {
        let val = e.target.value
        let filteredContent = concert.filter(row => row.artist.toLowerCase().indexOf(val) !== -1)
        setFilterContent(filteredContent)
    }

    return (
        <div className='w-full text-2xl text-[#ccc]'>
            <div>
                <div className='flex items-center justify-between text-left p-2 mb-4'>
                    <p className=' font-bold text-5xl text-[#ccc]'>Concerts near you</p>

                </div>
                <div className='flex items-center justify-between text-left p-2 mb-4'>
                    <input className='border-[#ccc] bg-transparent rounded-sm border-2 outline-0 w-[60%]' onKeyUp={(e) => filterFunction(e)} placeholder="Filter by Artist" />
                    <div className='flex gap-2 items-center justify-between'>
                        <Button text={'Sort By Distance'} icon={'sort'} />
                        <Button text={'Sort by Date'} icon={'sort'} />
                    </div>
                </div>
                <table className='w-full table-auto'>
                    {Object.keys(concert[0]).map(header => {
                        return <th className='text-[#DED523] text-left p-2 '>{capitalizeFirstLetter(header)}</th>
                    })}
                    {filterContent.map(row => {
                        return <tr className='text-left'>
                            {Object.values(row).map(ele => {
                                return <td className=' p-2 '>{ele}</td>
                            })}
                        </tr>
                    })}
                </table>
            </div>
        </div>
    )
}
