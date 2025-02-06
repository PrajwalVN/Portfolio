import React from 'react'
import Tech from './Tech';

function Skills(props) {
    window.addEventListener('scroll', function(){
        let a = this.scrollY
        let front = this.document.getElementById(props.id)
        if(a>front.scrollHeight-50 ){
          front.style.display = "flex";
        }
        else{
          front.style.display = "none";
        }
    })

    return (
        <>
            <span className='text-[2rem] text-[#ffffff] '>{props.id}</span>
            <div className='w-[100%] m-24 flex' id={props.id}>
                <Tech 
                skills = {props.skills}
                />
            </div>
        </>
    )
}

export default Skills