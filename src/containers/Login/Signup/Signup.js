import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import classes from './Signup.module.css';

class Signup extends React.Component {
    state = {
        firstName: '',
        lastName: '',
        contactNumber: 0,
        email: '',
        password: '',
        confirmPassword: ''
    }

    firstNameChangeHandler = (event) => {
        this.setState({firstName: event.target.value});
    }

    lastNameChangeHandler = (event) => {
        this.setState({lastName: event.target.value});
    }

    contactNumberChangeHandler = (event) => {
        this.setState({contactNumber: event.target.value});
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }
    passwordChangeHandler = (event) => {
        this.setState({password: event.target.value});
    }

    confirmPasswordChangeHandler = (event) => {
        this.setState({confirmPassword: event.target.value});
    }

    signupHandler = (event) => {
        event.preventDefault();
        if(this.state.password === this.state.confirmPassword) {
            const signup = {firstName: this.state.firstName,
                    lastName: this.state.lastName,
                    contactNumber: this.state.contactNumber,
                    email: this.state.email, 
                    password: this.state.password};
            console.log(signup);
            axios.post('http://localhost:8000/login/adduser', signup)
                .then(res => console.log(res)).catch(err => console.log(err));  
        } else {
            alert('Password and Confirm Password should be same');
        }
        
    }


    render () {
        return (
            <div >
                <form className={classes.Modal} onSubmit={this.signupHandler}>
                    <Form.Group controlId="formBasicFirstName">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter First Name" required
                            onChange={this.firstNameChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicLastName">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Last Name" required
                            onChange={this.lastNameChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required
                            onChange={this.emailChangeHandler}/>
                        
                    </Form.Group>
                    <Form.Group controlId="formBasicContactNumber">
                        <Form.Label>Contact Number</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact Number" required
                            onChange={this.contactNumberChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required
                            onChange={this.passwordChangeHandler}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicConfirmPassword">
                        <Form.Label> Confirm Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required
                            onChange={this.confirmPasswordChangeHandler}/>
                    </Form.Group>
                    <Form.Group>
                    <Button variant="info" type="submit">
                        SIGN UP
                    </Button>
                    </Form.Group>
                </form>
            </div>
        )
    }
}

export default Signup;