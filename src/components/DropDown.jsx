import React, { useRef, useState } from 'react'
import { BiChevronDown,BiChevronUp } from "react-icons/bi";

export default function DropDown() {

    const width = 180
    const [visibility, setVisibility] = useState(0)
    const ref = useRef(null)

    const iconStyles = {
        height:'25px',
        width:'25px'
    }

    const clickedCheckBox = (e) => {
        e.stopPropagation()
    }

    return (
        <div className={`relative`} style={{ width: width + 'px' }}>
            <div type={'button'}  onClick={() => { setVisibility(1 - visibility) }} className='flex items-center justify-between outline-0 p-2 cursor-pointer border-black border-2' style={{ width: width + 'px' }} >
                <p>State</p>
                {visibility ? <BiChevronUp style={iconStyles} /> : <BiChevronDown style={iconStyles} />}
                
                
            </div>
            {visibility ? <div className={`flex flex-col rounded-sm absolute bg-white mt-2 max-h-[180px] overflow-y-auto border-black border-2 drop-shadow-2xl`} ref={ref} style={{ width: width + 'px' }}>
                {
                    [1, 2, 3, 4, 5].map(ele => {
                        return <div className='flex items-center justify-between px-2 py-1 hover:bg-[rgba(0,0,0,0.2)]'>
                            <p>Idaho</p>
                            <input type="checkbox" className='h-[20px] w-[20px]' onClick={(e) => clickedCheckBox(e)} />
                        </div>
                    })
                }

            </div> : <></>}

        </div>
    )
}
