import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
// import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import GooogleAuthorize from 'react-google-authorize';
import classes from './Login.module.css';

class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }
    
    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    loginHandler = (event) => {
        event.preventDefault();
        const login = {email: this.state.email, password: this.state.password};
        axios.post('http://localhost:8000/login/auth', login)
            .then(res => console.log(res)).catch(err => console.log(err));
    }

    signupHandler = (event) => {
        this.props.history.push('/signup');
    }

    responseFacebook = (response) => {
        console.log(response);
    }
  
    responseGoogle = (response) => {
        console.log(response);
        this.props.history.goBack();
    }

    render () {
        return (
            <div className={classes.Modal} >
                <form onSubmit={this.loginHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                            onChange={this.emailChangeHandler}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required
                            onChange={this.passwordChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                    <Button variant="info" type="submit">
                        LOGIN
                    </Button>
                    </Form.Group>
               
                    {/* <FacebookLogin 
                        appId="" //APP ID NOT CREATED YET
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                    /> */}

                    <GooogleAuthorize className={classes.socialLogin} 
                        clientId="413523546698-icnld97bf2lqcrhce5hrii0mg6h1t9b5.apps.googleusercontent.com" 
                        buttonText="LOGIN WITH GOOGLE"
                        onSuccess={this.responseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                       
                    />
            
                    <div>Not having account ?   
                        <Button size="sm" variant="secondary" type="button" style={{marginLeft: '15px'}}
                            onClick={this.signupHandler} >SIGN UP</Button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;