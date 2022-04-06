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
import { HashRouter as Router, Route } from 'react-router-dom';


function* sagaWatcher() {
    yield takeEvery('FETCH_GIPHYS', fetchGiphys);
    yield takeEvery('GET_FAVORITES', getFavorites);
}

function* fetchGiphys(action) {
    try {
        let response = yield axios.get(`/api/giphy/${action.payload}`);
        console.log('fetchGiphys: ', response.data);

        yield put({
            type: 'SET_GIPHYS',
            payload: response.data.data
        })
    } catch (err) {
        console.log(err);

    }
}

function* getFavorites() {
    //GET REQUEST!
    try {
        let response = yield axios.get('/api/favorite')
        console.log(response.data);
        //Dispatch
        yield put({ type: 'SET_FAVORITES', payload: response.data });
    } catch (err) {
        console.log(err)
    }

}

const giphyFavoriteList = (state = [], action) => {
    if (action.type === 'SET_FAVORITES') {
        return action.payload;
    }
    return state
}

const giphySearchList = (state = [], action) => {
    if (action.type === 'SET_GIPHYS') {
        return action.payload;
    }
    return state
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        giphySearchList,
        giphyFavoriteList
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(sagaWatcher);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
