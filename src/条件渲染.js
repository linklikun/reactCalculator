import React from 'react'
import ReactDOM from 'react-dom'
function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
function LoginIn(props) {
    return <button onClick={props.onClick}>login</button>
}
function LoginOut(props) {
    return <button onClick={props.onClick}>logout</button>
}
function Greeting(props) {
    const isLoginIN = props.isLoginIN;
    if (isLoginIN) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
class LoginControl extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLoginIN:false
        }
        this.handleLoginClick=this.handleLoginClick.bind(this)
        this.handleLogoutClick=this.handleLogoutClick.bind(this)
    }
    handleLoginClick(){
        this.setState({isLoginIN:true})
    }
    handleLogoutClick(){
        this.setState({isLoginIN:false})
    }
    render(){
        const isLoginIN=this.state.isLoginIN
        let button
        if (isLoginIN) {
            
            button=<LoginOut onClick={this.handleLogoutClick} ></LoginOut>
        } else {
            button=<LoginIn onClick={this.handleLoginClick}></LoginIn>
        }
        return (
        <div>
        <Greeting isLoginIN={isLoginIN}></Greeting>
        {button}
        </div>
        )

    }
}


ReactDOM.render(
    <div>
        <LoginControl></LoginControl>
    </div>,
    document.getElementById('app')

)
