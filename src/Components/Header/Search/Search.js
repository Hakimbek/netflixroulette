import './search.css';

function Search() {
    return(
        <>
            <p className='search_text'>FIND YOUR MOVIE</p>
            <div>
                <input className='search_input' type={'text'} placeholder={'What do you want to watch?'} />
                <button className='search_button'>SEARCH</button>
            </div>
        </>
    );
}

export default Search;
