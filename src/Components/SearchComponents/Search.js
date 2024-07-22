import {  useState } from "react";
import { useDispatch } from "react-redux";
import { search } from "../../redux/searchSlice";
import  searchIcon  from "./searchIcon.png";

const Search = () => {

    const [word, setWord] = useState('');
    const dispatch = useDispatch()

    const finalSearch = (e) => {
        e.preventDefault()
        dispatch(search(word.toLowerCase()))
    }

    return(
        <div className="searchContainer">
            <form className="searchForm" onSubmit={finalSearch}>
                <input onChange={(event) => setWord(event.target.value)} type='text' placeholder="Search"/>
                <button onClick={()=> dispatch(search(word))} className='searchButton'>
                    <img className="iconSearch" src={ searchIcon } alt='icon'/>
                </button>
            </form>
        </div>
    )
}

export default Search;