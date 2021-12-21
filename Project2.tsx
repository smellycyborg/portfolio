import React from "react";
import { Icon } from '@iconify/react';

interface Props {
    name: string,
    link1?: string,
}

export const Project2: React.FC<Props> = ( { name, link1 } ) => {

    return (
        <div>
            <h5>{ name }</h5>
            <ul data-type='circle'>
                <li>a video game hosted on roblox.</li>
                <li>
                    players can purchase and equip pets, 
                    grow their character through clicking, 
                    fight in arena, and teleport to different worlds.
                </li>
            </ul>
            <div className='icon--container'>
            <Icon className='icon' icon="uit:github-alt" height="22" />
            </div>
        </div>
    )
}