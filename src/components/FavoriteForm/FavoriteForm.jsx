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

            <div>
                {giphyFavoriteReducer.map((favorite) => {
                    return (
                        <img key={favorite.id} src={favorite.url}/> 
                    );
                })}
            </div>



        </div>
    )
}

export default FavoriteForm;