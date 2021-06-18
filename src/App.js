import React from 'react';
import Nav from './components/Nav';
import Topics from './components/Topics';
import './App.css';
import HeroS from './components/herofocus3D';
import i from './components/img/mbg.jpg';
import Home from './Home.js';
import Sports from './components/TOPICS/Sports.js';
import Eco from './components/TOPICS/Eco.js'
import Edu from './components/TOPICS/Edu.js'
import Space from './components/TOPICS/Space.js'
import Tech from './components/TOPICS/Tech.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

function App() {
    return (
        <>
    < Router>
    <Nav/>
    <Switch>
       <Route path='/' exact component={Home}/>
       <Route path='/Sports' exact component={Sports}/>
       <Route path='/Eco' exact component={Eco}/>
       <Route path='/Edu' exact component={Edu}/>
       <Route path='/Space' exact component={Space}/>
       <Route path='/tech' exact component={Tech}/>
    </Switch>
    </Router>
    </>
    );
}

export default App;
