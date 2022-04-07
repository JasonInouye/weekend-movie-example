import React from 'react';
import { useDispatch } from 'react-redux';

// SEARCH ITEM is actually favorite function
function SearchItem({ searchItem }) {
    console.log('inside of SearchItem', `${searchItem}` );

    const dispatch = useDispatch();

    const favoriteItem = () => {
        dispatch({ type: 'MARK_FAVORITE', payload: searchItem });
    }

    return (
            <>
                <img src={searchItem} />
                <button onClick={favoriteItem}>favorite</button>
            </>
    )
}

export default SearchItem;