import './css/App.css';
import './css/index.css'
import './css/fun.css'
import React from "react";
import {BrowserRouter as Router, Route, Link, useHistory, Switch} from 'react-router-dom'
import Home from './views/Home';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Gettingstarted from './views/Gettingstarted';
import Footer from './components/Footer';
import Colors from './views/Colors';
import Typography from './views/Typography';
import Helpers from './views/Helpers';
import Container from './views/Container';
import Grid from './views/Grid';
import Buttons from './views/Buttons';
import Card from './views/Card';
import Icons from './views/Icons';
import Slidepanels from './views/Slidepanels';
import Input from './views/Input';
import Table from './views/Table';
import List from './views/List';
import Modal from './views/Modal';
import FourOFour from './404/FourOFour';
import Dropdown from './views/Dropdown';
import Introduction from './views/Introduction';
import Navigation from './views/Navigation';
import Slider from './views/Slider';
function App() {
  
  return (
    <Router>
      <div className="App">
        <section className="Page">
          <Sidebar />
          <div className="Content"> 
          <Switch>
          <Route exact path="/" > <Home /> </Route>
          <Route  path="/gettingstarted" > <Gettingstarted /> </Route>
          <Route  path="/colors" > <Colors /> </Route>
          <Route  path="/typography" > <Typography /> </Route>
          <Route  path="/helpers" > <Helpers /> </Route>
          <Route  path="/container" > <Container /> </Route>
          <Route  path="/grid" > <Grid /> </Route>
          <Route  path="/buttons" > <Buttons/> </Route>
          <Route  path="/card" > <Card/> </Route>
          <Route  path="/icons" > <Icons/> </Route>
          <Route  path="/slidepanel" > <Slidepanels/> </Route>
          <Route  path="/inputs" > <Input/> </Route>
          <Route  path="/table" > <Table /> </Route>
          <Route  path="/list" > <List /> </Route>
          <Route  path="/modal" > <Modal /> </Route>
          <Route  path="/dropdown"><Dropdown /></Route>
          <Route  path="/introduction"><Introduction /></Route>
          <Route  path="/navigationbar"><Navigation /></Route>
          <Route  path="/slider"><Slider/></Route>
          <Route exact path="*" > <FourOFour /> </Route>
          </Switch>
          </div>
        </section>

      </div>


    </Router>

  );
}

export default App;
