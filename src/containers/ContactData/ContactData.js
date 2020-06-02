import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import OrderSummary from '../../components/OrderSummary/OrderSummary';
import classes from './ContactData.module.css';
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
        return (
            <div className={classes.Form}>
                <h6>Your Order is :</h6>
                {this.props.location.carDetails ? 
                    <OrderSummary carDetails={this.props.location.carDetails}/> :
                    this.props.history.push('/')}
                <hr />
                <h6>Contact Details:</h6>
                <form onSubmit={this.submithandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" required name="name"
                            onChange={this.nameChangeHandler} value={this.state.name}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Email Id</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email id" required name="email"
                            onChange={this.emailChangeHandler} value={this.state.email}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="textarea" placeholder="Enter Address" required name="address"
                            onChange={this.addressChangeHandler} value={this.state.address}/>
                    </Form.Group>

                    <Form.Group controlId="formBasicContact">
                        <Form.Label>Contact No</Form.Label>
                        <Form.Control type="number" placeholder="Enter Contact no." required name="contactNo"
                            onChange={this.contactChangeHandler} value={this.state.contactNo}/>
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

export default ContactData;