import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import SearchItem from '../SearchItem/SearchItem';

function SearchForm() {
    const giphySearchList = useSelector(store => store.giphySearchList);
    const dispatch = useDispatch();

    const [searchString, setSearchString] = useState('')

    const handleSearchGiphy = () => {
        dispatch({ type: 'FETCH_GIPHYS', payload: searchString });
        setSearchString('');
    }

    return (
        <div>
            <h1>Giphy Search!</h1>
            <input type="text" placeholder="search" value={searchString} onChange={(event) => setSearchString(event.target.value)} />
            <button onClick={handleSearchGiphy}>Search</button>
            <div>
                {giphySearchList.map((giphySearchList, index) => {
                    return (
                        <SearchItem 
                            key={giphySearchList.id} 
                            searchItem={giphySearchList.images.original.url} 
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default SearchForm;