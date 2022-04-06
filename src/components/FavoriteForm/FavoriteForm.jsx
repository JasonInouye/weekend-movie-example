import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function FavoriteForm() {

    const dispatch = useDispatch();

    const giphyFavoriteReducer = useSelector(store => store.giphyFavoriteList);


    useEffect(() => {


        dispatch({ type: 'GET_FAVORITES' })
    }, []);


    return (

        <div>
            <h1>favoriting happens here</h1>

            <ul>
                {giphyFavoriteReducer.map((favorite) => {
                    return (
                        <li key={favorite.id}> {favorite.url} </li>
                    );
                })}
            </ul>



        </div>
    )
}

export default FavoriteForm;