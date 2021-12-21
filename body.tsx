import React from "react";
import { Project1 } from './Project1'
import { Project2 } from './Project2'

export const Body: React.FC = () => {
    
    return (
        <div className='body--container' >
            <div className='project--divs'>
                <Project1 name='takedeer'/>
            </div>

            <div className='project--divs'>
                <Project2 name='weight sim'/>
            </div>
        </div>
    )
}