import './App.css';
import React, { Component } from 'react';
import SignUp from './Component/SignUp/SignUp';
import LogIn from './Component/LogIn/LogIn';
import Navbar from './Component/Navbar/Navbar';
import HeroSection from './Component/HeroSection/HeroSection';

export class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
         page:false, 
         email:null,
         password:null,
         isRegister:false,
         reEnterPassword:null,
         message:null,
      };
    };

    pageSwitchHandler = (event)=>{
        event.preventDefault();
        this.setState({
            page:!this.state.page,
        },()=>{
            console.log(this.state.page);
        });
    };

    registerFormHandler = (event)=>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const reEnterPassword = event.target.repassword.value;
        if (!event.target.email.value) {
            alert("Email is required");
            return;
        }

        if (!event.target.password.value && !event.target.repassword.value) {
            alert("Password is required");
            return;
        }

        if(event.target.password.value.length < 6){
            alert("Password should be 6 characters.");
            return;
        }

        if (password !== reEnterPassword) {
            alert("Password does not match");
            return;
        };

        
        this.setState({
            email,
            password,
            reEnterPassword,
            isRegister:!this.state.isRegister
        },()=>{
            console.log(this.state);
            event.target.email.value = " ";
            event.target.password.value = " ";
            event.target.repassword.value = " ";
        });

    }

    logInFormHandler = (event)=>{
        event.preventDefault();
        const email = event.target.email.value
        const password = event.target.password.value
        if(this.state.email === null){
            alert("Account not Found");
            return
        }

        if(this.state.email !== email){
            alert("enter correct email");
            return;
        }

        if(this.state.password !== password){
            alert("enter correct password");
            return;
        }
        alert("Login");
    }
    
  render() {
    return (
      <>
        {this.state.page === false && this.state.isRegister === false ? <SignUp switch = {this.pageSwitchHandler} submit={this.registerFormHandler}/> : this.state.isRegister === true ? <><Navbar/><HeroSection/></> : <LogIn switch = {this.pageSwitchHandler} logIn = {this.logInFormHandler}/>}
      </>
    )
  }
}
export default App
