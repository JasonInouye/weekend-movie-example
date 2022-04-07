import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'

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
            {giphySearchList.map((giphy, index) => {
                return (
                    <div key={index}>
                    <img src={giphy?.images?.original?.url} />
                    <button>favorite</button>
                    </div>
                );
            })}
            </div>
        </div>
    )
}

export default SearchForm;