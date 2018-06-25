import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    checkUser,
} from '../obj/database.js/exchange_firebase.js';

class Login extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleToHome = this.handleToHome.bind(this);
        this.handleToSignUp = this.handleToSignUp.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleToHOme = () => {
        checkUser(this.state.value, (value) => {
            if(value){
                localStorage.setItem('sessionId', value);
                this.props.history.push('/');
            }
        });
    }

    handleToSignUp = () => {
        this.props.history.push('/SignUp');
    }

    render() {
        return (
            <div>
              <form>
                <label>
               user name:
               <input
                 type='text'
                 value={this.state.value}
                 onChange={this.handleChange}
              />
                </label>
              </form>
              <div>
             <button onClick={this.handleToHome}>ログイン</button>
             <button onClick={this.handleToSignUp}>新規登録</button>
              </div>
            </div>

        );
    }
}

export default withRouter(Login);