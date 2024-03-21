import React from 'react'
import './Make_works.css'


export const Task = () => 
{
    return(
        <div className='containerlist'>
        <ul className="tasklist">
            <li className="task"> <div className='point'></div> /BAÑAR/ Baña tu mascota. <input className='check' type="checkbox" name="check" id="complet" /></li>
            <li className="task"> <div className='point'></div> /BAÑAR/ Baña tu mascota. <input className='check' type="checkbox" name="check" id="complet" /></li>
            <li className="task"> <div className='point'></div> /BAÑAR/ Baña tu mascota. <input className='check' type="checkbox" name="check" id="complet" /></li>
            <li className="task"> <div className='point'></div> /BAÑAR/ Baña tu mascota. <input className='check' type="checkbox" name="check" id="complet" /></li>
        </ul>
        </div>
    )
}