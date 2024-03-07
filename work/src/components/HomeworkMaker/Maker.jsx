import React from 'react'
import './Maker.css'


export const Maker = () =>
 {
    return(
        <div className='makework'>
        <input className='smbhomework' type="submit" value="Set a homework" />
        <input className='butthomework' type="button" value="Make Homework" />
        <hr className='linespace'/>
        </div>
    )
 }