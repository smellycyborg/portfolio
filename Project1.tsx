import React from "react";
import { Icon } from '@iconify/react';

interface Props {
    name: string,
    link1?: string,
    link2?: string,
}

export const Project1: React.FC<Props> = ( { name, link1, link2 } ) => {

    return (
        <div>
            <h5>{ name }</h5>
            <ul data-type='circle'>
                <li>a full stack website to help 
                    me keep track of my finances.
                </li>
                <li>has user authentication and crud elements.</li>
            </ul>
            <div className='icon--container'>
            <Icon className='icon' icon="uit:github-alt" height="22" />
            <Icon className='icon' icon="et:browser" height="20" />
            </div>
        </div>
    )
}