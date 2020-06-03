import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import classes from './Login.module.css';
import Nav from 'react-bootstrap/Nav';

class Login extends React.Component {
    state = {
        email: '',
        password: '',
        user: true
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
            .then(res => {
                console.log(res);
                this.props.history.push('/');
            })
            .catch(err => {
                alert('Please enter valid credentials');
            });
    }

    signupHandler = (event) => {
        this.props.history.push('/signup');
    }

    responseFacebook = (response) => {
        console.log(response);
    }
  
    responseGoogle = (response) => {
        console.log(response);
        console.log(response.profileObj);
        // this.props.history.goBack();
    }

    selectHandler = (eventKey, activeKey) => {
        eventKey === 'user' ? this.setState({user: true}) : this.setState({user: false})
    }


    render () {
        let dispGoogleLogin = null;
        if(this.state.user) {
            dispGoogleLogin = <div>
                <GoogleLogin className={classes.socialLogin} 
                    clientId="206827218168-8m9l1vjrj55b1ne2qc2r1anls3v8sj6o.apps.googleusercontent.com" 
                    buttonText="LOGIN WITH GOOGLE"
                    onSuccess={this.responseGoogle}
                    onFailure={this.responseGoogle}
                    cookiePolicy={'single_host_origin'}   
                />
        
                <div>Not having account ?   
                    <Button size="sm" variant="secondary" type="button" style={{marginLeft: '15px'}}
                        onClick={this.signupHandler} >SIGN UP</Button>
                </div>
                </div>
        } 

        return (
            <div className={classes.Modal}>
                <Nav variant="tabs" onSelect={this.selectHandler} defaultActiveKey="user"
                    style={{marginBottom: '20px'}}>
                    <Nav.Item>
                        <Nav.Link eventKey="user">User</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="admin">Admin</Nav.Link>
                    </Nav.Item>
                </Nav>
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
                </form>
                {dispGoogleLogin}
            </div>
        )
    }
}

export default Login;
