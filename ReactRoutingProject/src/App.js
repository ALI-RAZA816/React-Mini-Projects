import About from "./Component/About/About";
import Navbar from "./Component/Navbar/Navbar";
import React, { Component } from 'react';
import Services from "./Component/Services/Services";
import Post from "./Component/Post/Post";
import Contact from "./Component/Contact/Contact";
import Home from "./Component/Home/Home";
import PageNotFound from "./Component/404Page/PageNotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
            <Switch>
                <Route exact path="/contact">
                    <Contact/>
                </Route>
                <Route exact path="/posts">
                    <Post/>
                </Route>
                <Route exact path="/services">
                    <Services/>
                </Route>
                <Route exact path="/about">
                    <About/>
                </Route>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="*">
                    <PageNotFound/>
                </Route>
            </Switch>
        </Router>
      </div>
    )
  }
}

export default App
