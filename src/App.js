import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import Resume from './Components/Resume';
import Contacts from './Components/Contacts';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js'

import {BrowserRouter, Link ,Switch, Route,} from 'react-router-dom';


function App() {
  return (
    <div>
        <BrowserRouter>
        <div className="demo-big-content">
            <Layout>
                <Header title="My Profile" className ="headerApp"  scroll>
                    <Navigation className="text">
                        <Link to="/Home">HOME</Link>
                        <Link to="/About">ABOUT</Link>
                        <Link to="/Projects">PROJECTS</Link>
                        <Link to="Resume">RESUME</Link>
                        <Link to="Contacts">CONTACTS</Link>


                    </Navigation>
                </Header>
                <Drawer title="My Profile" style={{backgroundColor:'grey'}}>
                    <Navigation className ="headerApp1" scroll>
                        <Link to="#">HOME</Link>
                        <Link to="#">ABOUT</Link>
                        <Link to="#">PROJECTS</Link>
                        <Link to="#">RESUME</Link>
                        <Link to="#">CONTACT</Link>
                    </Navigation>
                </Drawer>
                <Content>
                    <div className="page-content" style={{backgroundColor:'grey'}}>
                    <Switch>
                        <Route exact path="/Home" component={Home}></Route>
                        <Route exact path="/About" component={About}></Route>
                        <Route exact path="/Projects" component={Projects}></Route>
                        <Route exact path="/Resume" component={Resume}></Route>
                        <Route exact path="/Contacts" component={Contacts}></Route>
                    </Switch>
                    </div>
                </Content>
            </Layout>
        </div>

        </BrowserRouter>
    </div>

  )
}

export default App;