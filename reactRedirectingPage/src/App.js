import React, { Component } from 'react'
import Navbar from './Component/Navbar/Navbar'
import HeroSection from './Component/HeroSection/HeroSection'
import AboutPage from './Component/About/AboutPage'
import PostPage from './Component/Post/PostPage'
import Contact from './Component/Contact/Contact'
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      auth: false
    }
  }

  registerHandler = () => {
    this.setState({
      auth: !this.state.auth,
    }, () => {
      console.log(this.state.auth);
    });
  };
  
  render() {
    return (
      <div>
        <Router>
          <Navbar login={this.registerHandler} status={this.state.auth}/>
          <Switch>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/post">
              {this.state.auth === false ? <Redirect to="/" /> : <PostPage/>}
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/">
              <HeroSection />
            </Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
