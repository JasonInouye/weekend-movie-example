import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';

function SearchForm() {
    const giphySearchList = useSelector(store => store.giphySearchList);
    const dispatch = useDispatch();

    const [searchString, setSearchString] = useState('')

    const handleSearchGiphy = () => {
        dispatch({ type: 'FETCH_GIPHYS', payload: searchString });
        setSearchString('');
    }

    const handleSubmit = () => {
        //console.log('inside of handleSubmit', feeling, under, support, comment);
        axios.post('/api/favorite', {
            feeling: feeling,
            understanding: under,
            support: support,
            comments: comment
        }).then(response => {
            //console.log('feedback submitted');
            getFeedback();
        }).catch(err => {
            console.log(err);
        })
        // clear feedback data from store after sending to database
        history.push('/thanks');
        dispatch({ type: 'CLEAR_FEEDBACK_DATA' });
    }

    return (
        <div>
            <h1>Giphy Search!</h1>
            <input type="text" placeholder="search" value={searchString} onChange={(event) => setSearchString(event.target.value)} />
            <button onClick={handleSearchGiphy}>Search</button>
            <div>
                {giphySearchList.map((giphy, index) => {
                    return (
                        <SearchItem giphyItem={giphyItem} />
                    );
                })}
            </div>
        </div>
    )
}

export default SearchForm;