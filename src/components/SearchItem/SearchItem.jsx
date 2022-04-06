import { postgresMd5PasswordHash } from 'pg/lib/utils';
import React from 'react';
import { useDispatch } from 'react-redux';

function SearchItem({ searchItem }) {

    const dispatch = useDispatch();

    const favoriteItem = () => {
        dispatch({ type: 'MARK_FAVORITE', payload: props.searchItem.url });
    }

    return (
            <>
                <img key={index} src={giphy?.images?.original?.url} />
                <button onClick={handleSubmit}>favorite</button>
            </>
    )
}

export default FeedbackItem