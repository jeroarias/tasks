import React, { useState } from 'react'
import './Maker.css'


export const Maker = () =>

 {

    return(
        <> 

            <div className='makework'>
                <input className='smbhomework' placeholder='Set a task' type="text"/>
                <input className='smbhomework' placeholder='Describe u task' type="text" />
                <input onClick={ ()=> settask(task)} className='butthomework' type="button" value="Make Homework" />

                    
            <div className='reportmsj'>
                <h2>You have (X) tasks pending and (X) completed.</h2>
            </div>

                <hr className='linespace'/>
            </div>

            <div className='filter'>           

                <select id="state">
                <option label="All"></option>
                <option label="Completed"></option>
                <option label="Pending"></option>
                </select>

            </div>

        </>
    )
 }