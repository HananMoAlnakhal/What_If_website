import React from 'react';
import Nav from './components/Nav';
import Topics from './components/Topics';
import './App.css';
import HeroS from './components/herofocus3D';
import Home from './Home.js';
import Sports from './components/TOPICS/Sports.js';
import Eco from './components/TOPICS/Eco.js'
import Edu from './components/TOPICS/Edu.js'
import Space from './components/TOPICS/Space.js'
import Tech from './Tech'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Hero from './components/Hero';
import HeroTwo from './componentsTwo/HeroTwo'
import Ideas from './components/Ideas';
import IdeasTwo from './componentsTwo/IdeasTwo';
import { ideaData } from './components/Ideas/data';
import { ideaTwoData } from './componentsTwo/IdeasTwo/data';
function App() {
    return (
        <>
    < Router>
    <Nav/>
    <Switch>
       <Route path='/' exact component={Home}/>
       <Route path="/Sports">
          <GlobalStyle />
          <HeroTwo />
        <Route path="/Sports/Ideas">
          <IdeasTwo heading='DID YOU KNOW ‽' data={ideaTwoData} />
        </Route>
      </Route>
       <Route path='/Eco' exact component={Eco}/>
       <Route path='/Edu' exact component={Edu}/>
       <Route path='/Space' exact component={Space}/>
       <Route path='/tech'>
       <GlobalStyle />
          <Hero />
          <Route path="/tech/Ideas">
          <Ideas heading='DID YOU KNOW ‽' data={ideaData} />
        </Route>
          </Route>
    </Switch>
    </Router>
    </>
    );
}

export default App;
