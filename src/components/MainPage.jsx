import React from 'react'
import ConcertTable from './ConcertTable'
import DropDown from './DropDown'
import { BiSearchAlt2, } from "react-icons/bi";
import Button from './Button';

export default function MainPage() {

    const iconStyles = {
        height: '20px',
        width: '20px'
    }

    return (
        <div className='w-full'>
            <div className=''>
                <p className=' font-bold text-5xl text-left mb-6'>Find concerts</p>
                <div className='flex items-center'>
                    <div className='flex gap-3 w-full'>
                        <input className='border-[#ccc] bg-transparent rounded-sm border-2 outline-0' placeholder="State" />
                        <input className='border-[#ccc] bg-transparent rounded-sm border-2 outline-0' placeholder="City" />
                        <input type="date" className='border-[#ccc] bg-transparent rounded-sm border-2 outline-0' />
                    </div>
                    <Button text={'search'} icon={'search'} />
                </div>
            </div>
            <div className='divide-y h-[0.05em] mt-6 bg-[#ccc]' />
            <div className='mt-4'>
                <ConcertTable />
            </div>
        </div>
    )
}
