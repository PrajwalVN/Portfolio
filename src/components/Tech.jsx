import React from 'react'
import Skills from './Skills';

function Tech({ skills }) {

    function con(value) {
        return parent(value)/100
    }

    let skill = Object.keys(skills).map((ele) =>
        
        <>
            <div className='relative '>
                <svg className='mt-10' key={ele}>
                    <circle className="circle " r="45" cx="50" cy="50" stroke='red' fill='none' strokeWidth={4} strokeDashoffset={283*(1- skills[ele])} strokeDasharray={283} />
                </svg>
                <span className='absolute top-20 left-8 text-[#04ffd8]'>{skills[ele]*100}</span>
                <span className='text-[#04ffd8] text-[1.3rem] mx-3'>{ele}</span>
            </div >
        </>

    )

    return (
        <>{skill}</>
    )
}

export default Tech