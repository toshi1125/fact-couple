import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {
    setNewUser,
    checkUser,
} from '../obj/database.js/exchnage_firebase.js';


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            value: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleToHome = this.handleToHome.bind(this);
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleToHome = () => {
        setNewUser(this.state.value);
        checkUser(this.state.value, (value) => {
            if(value){
                localStorage.setItem('sessionId', value);
                this.props.hitory.push('/');
            }
        });
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
                <button onClick={this.handleToHome}>登録</button>
            </div>        
        );
    }
}

export default withRouter(SignUP);