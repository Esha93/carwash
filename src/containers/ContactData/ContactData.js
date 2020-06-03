import React from 'react';
import { Form, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import classes from './ContactData.module.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


class ContactData extends React.Component {
    state = {
        name: '',
        email: '',
        address: '',
        contactNo: ''
    }
    nameChangeHandler = (event) => {
        this.setState({name: event.target.value});
    }

    addressChangeHandler = (event) => {
        this.setState({address: event.target.value})
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value})
    }

    contactChangeHandler = (event) => {
        this.setState({contactNo: event.target.value});
        
    }

    submithandler = (event) => {
        event.preventDefault();
        const contactDetails = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            contactNo: this.state.contactNo
        }
        console.log(contactDetails);
        axios.post('https://car-wash-16a2b.firebaseio.com/orders.json', contactDetails)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        let orderSummary;
        if(this.props.location.carDetails) {
            orderSummary = <>
            <h6>Your Order : </h6>
            <OrderSummary carDetails={this.props.location.carDetails}/>
            <hr />
                <h6>Contact Details:</h6>
                <form onSubmit={this.submithandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required name="name"
                            onChange={this.nameChangeHandler} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter Address" required name="address"
                            onChange={this.addressChangeHandler} value={this.state.address}/>
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formBasicPassword">
                            <Form.Label>Email Id</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email id" required name="email"
                                onChange={this.emailChangeHandler} value={this.state.email}/>
                        </Form.Group>
                    
                        <Form.Group as={Col} controlId="formBasicContact">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="number" placeholder="Enter Contact no." required name="contactNo"
                                onChange={this.contactChangeHandler} value={this.state.contactNo}/>
                        </Form.Group>
                    </Form.Row>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </form>
            </>
        } else {

            orderSummary = <>
                <h5>Cart is empty !!!</h5>
                <Button onClick={() => this.props.history.push('/packages')}>
                    Click here to book a wash</Button>
                </>
            
        }
        return (
            <div className={classes.Form}>
                
                {orderSummary}
                
            </div>
        )
    }
}



export default ContactData;