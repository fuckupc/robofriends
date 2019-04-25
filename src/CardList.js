import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    /*Each child in a loop should have a unique "key"*/
    return (
        <div>   
            {
                /* map() loop through all the data in robots, 
                user means each item, i means the index of user */
                robots.map((user, i) => {
                    return (
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email} 
                        />
                    );
                })
            }
        </div> 
    );
}

export default CardList;