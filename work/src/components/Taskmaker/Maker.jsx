import React, { useState } from 'react'
import './Maker.css'


export const Maker = () =>

 {
    const [task, settask] = useState('')

    return(
        <> 
            <div className='makework'>
                <input className='smbhomework' placeholder='Set a task' type="text" />
                <input className='smbhomework' placeholder='Describe u task' type="text" />
                <input onClick={ ()=> settask(task)} className='butthomework' type="button" value="Make Homework" />
                <hr className='linespace'/>
            </div>

            <div className='Workslist'>
                <ul>
                    <li>{task}</li>
                </ul>
            </div>
        </>
    )
 }