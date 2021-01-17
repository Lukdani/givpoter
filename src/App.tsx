import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './components/Home';
import Reviews from './components/Reviews';
import { Column, Row, Container } from './components/Common/components/grid';
import NavBar from './components/UI/NavBar';
import Header from './components/UI/Header';
import CreateReview from './components/CreateReview';

const App = () => 
<>
<Row>
  <Header />
</Row>
<BrowserRouter>
<Row>
  <NavBar/>
</Row>

<Row>
  <Column>
  <Switch>
  <Route exact path="/" component={Home}/>
    <Route exact path="/reviews" component={Reviews}/>
    <Route exact path="/createReview" component={CreateReview}/>
  </Switch>
  </Column>
  </Row>
</BrowserRouter>
</>


export default App;
