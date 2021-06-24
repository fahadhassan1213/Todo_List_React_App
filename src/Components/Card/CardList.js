import React from 'react';
import Card from './Card';
import './CardList.css'

export default function CardList(props) {
    
    return (
        
        <Card className = 'card-list'>

            {props.userData.map(data =>(

               <li key = {data.id}>
               {data.name} ({data.age} Years old)
               </li> 

            ))}
                
            
        </Card>
        
    )
}
