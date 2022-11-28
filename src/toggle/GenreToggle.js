import React from 'react';
import './genreToggle.css';

function GenreToggle() {
    const [toggle, setToggle] = React.useState(false);

    return (
        <div className='genre_toggle__wrapper'>
           <button className='genre_toggle__button' onClick={() => setToggle(e => !e)}>Select Genre</button>

            {toggle && <div className='genre_toggle__options'>
            <div className='genre_toggle__option'>
                <input type={'checkbox'} /> Crime
            </div>
            <div className='genre_toggle__option'>
                <input type={'checkbox'} /> Documentary
            </div>
            <div className='genre_toggle__option'>
                <input type={'checkbox'} /> Horror
            </div>
            <div className='genre_toggle__option'>
                <input type={'checkbox'} /> Comedy
            </div>
           </div>}
        </div>
    );
}

export default GenreToggle;
