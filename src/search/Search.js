import './search.css'

function Search() {
    return (
        <div className='search_wrapper'>
            <input placeholder="What do you want to watch?" className="search_input"/>
            <button className="search_button">SEARCH</button>
        </div>
    );
}

export default Search;
