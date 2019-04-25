import React from 'react';

const Card = (props) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img src={ `http://robohash.org/${props.id}?200*200` } alt='robot' />
            <div>
                <h2>{ props.name }</h2>
                <p>{ props.email }</p>
            </div>
        </div>
    )
}

export default Card;