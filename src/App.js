import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const HatsPage = (props) => (
  <diV>
    <h1>Hats page</h1>
  </diV>
)
function App() {
  return (
    <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop/hats' component={HatsPage}/>  
    </div>
  );
}

export default App;
