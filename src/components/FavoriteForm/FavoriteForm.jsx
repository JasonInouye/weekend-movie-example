import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

function FavoriteForm() {

    const categoryList = useSelector(store => store.giphyCategoryList)
    const dispatch = useDispatch();

    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        dispatch({
            type: 'FETCH_CATEGORIES'
        })
    }, []);

    const saveCategory = () => {
        dispatch({
            type: 'SET_CATEGORY',
            payload: newCategory
        })
    }

    return (
        <div>
            <h1>favoriting happens here</h1>
            
            <label htmlFor="categories">Choose a category:</label>
                <select id="categories" name="categories" onChange={(event) => setNewCategory(event.target.value)}>
                {categoryList.map(category => {
                    return (
                        <option 
                            key={category.id} 
                            value={category.id}
                        >{category.name}</option>
                    )
                })}
                </select>
            <button onClick={saveCategory}>save Category</button>
        </div>
    )
}
// 0: {id: 3, name: 'cartoon'}
// 1: {id: 2, name: 'cohort'}
// 2: {id: 1, name: 'funny'}
// 3: {id: 5, name: 'meme'}
// 4: {id: 4, name: 'nsfw'}
export default FavoriteForm;