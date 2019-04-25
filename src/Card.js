import React from 'react';

const Card = (props) => {
    const { name, email, id } = props;
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow shadow-5'>
            <img src={ `http://robohash.org/${id}?200*200` } alt='robot' />
            <div>
                <h2>{ name }</h2>
                <p>{ email }</p>
            </div>
        </div>
    )
}

export default Card;