import React from 'react';

import './signin.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password : ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handleChange = (event) => {
        const {value , name } = event.target;
        this.setState({ [name] : value });
    }

    render() {
        return (
            <div className='signin'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <label>Email</label>
                    <input type='email' name='email' value={this.state.email} onChange={this.handleChange} />
                    <label>Password</label>
                    <input type='password' name='password' value={this.state.password} onChange={this.handleChange} />
                    <input type='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default Signin;