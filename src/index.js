import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';


function* sagaWatcher() {
    yield takeEvery('FETCH_GIPHYS', fetchGiphys);
    yield takeEvery('FETCH_CATEGORIES', fetchCategories);
}

function* fetchCategories() {
    try {
        let response = yield axios.get(`/api/category`);
        
        yield put({
            type: 'SET_CATEGORIES',
            payload: response.data
        })
    } catch (err) {
        console.log(err);
        
    }
}

function* fetchGiphys(action) {
    try {
        let response = yield axios.get(`/api/giphy/${action.payload}`);
        yield put({
            type: 'SET_GIPHYS',
            payload: response.data.data
        })
    } catch (err) {
        console.log(err);
        
    }
}

const giphySearchList = (state = [], action) => {
    if (action.type === 'SET_GIPHYS') {
        return action.payload;
    }
    return state
}

const giphyCategoryList = (state = [], action) => {
    if (action.type === 'SET_CATEGORIES') {
        return action.payload;
    }
    return state
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        giphySearchList,
        giphyCategoryList
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(sagaWatcher);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
