import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import FavoriteForm from '../FavoriteForm/FavoriteForm'

function App() {

  return (

    <Router>
      <Route path="/" exact>
        <SearchForm />
      </Route>

      <Route path="/favoriteForm">
        <FavoriteForm />
      </Route>
    </Router>
  );
}

export default App;
