import React, { Component } from "react";

class Login extends Component {
    constructor(){
        super();
        this.state ={
            username: '',
            password: ''
        };
    }

    handleUsernameChange(e){
        this.setState({username: e})
    }

    handlePasswordChange(e){
        this.setState({password: e})
    }

    handleLogin(){
        return alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }


    render(){
        return(
            <div>
                <input onChange={e => this.handleUsernameChange(e.target.value)}/>
                <input onChange={e => this.handlePasswordChange(e.target.value)}/>
                <button onClick={() => this.handleLogin()}>Login</button>
            </div>
        )
    }

}

export default Login;