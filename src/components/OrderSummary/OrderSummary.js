import React from 'react';
import {ListGroup} from 'react-bootstrap';
import classes from './OrderSummary.module.css';
import { BsFillXCircleFill } from 'react-icons/bs'

const orderSummary = (props) => (
        <div className={classes.Summary}>
            <ListGroup>
                <ListGroup.Item className={classes.ListItem}>
                    <span>Car: {props.carDetails.carType}</span>
                    <span>Size: {props.carDetails.carSize}</span>
                    <span>Price: {props.carDetails.price}</span> 
                    <span><BsFillXCircleFill /></span>
                </ListGroup.Item>
            </ListGroup>
        </div>
)


export default orderSummary;