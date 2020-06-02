import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {Link } from 'react-router-dom';
import classes from './Packages.module.css';


const packages = (props) => {
    let silverService = [];
    let goldService = [];
    let platinumService = [];
    let silverPackage = props.packages.silver;
    let goldPackage = props.packages.gold;
    let platinumPackage = props.packages.platinum;
    
    for(let key in props.silverServices) {
        silverService.push(key + ' : ' + props.silverServices[key]);
    }
   
    for(let key in props.goldServices) {
        goldService.push(key + ' : ' + props.goldServices[key]);
    }

    for(let key in props.platinumServices) {
        platinumService.push(key + ' : ' + props.platinumServices[key]);
    }

    console.log(silverPackage)
    
    const silverServOut = silverService.map(item => {
        return <ListGroup.Item key={item}>{item}</ListGroup.Item>
    })

    const goldServOut = goldService.map(item => {
        return <ListGroup.Item key={item} style={{color: '#f900cc'}}>{item}</ListGroup.Item>
    })

    const platinumServOut = platinumService.map(item => {
        return <ListGroup.Item key={item} style={{color: 'tomato'}}>{item}</ListGroup.Item>
    })

    
    return(
 
        <div className={classes.Packages}>  
            <Card style={{ width: '33%' }}>
                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(182, 163, 127)'}}>
                        SILVER PACKAGE</Card.Header>
                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(236, 216, 179)'}}>
                        Rs. 450/- ONWARDS</Card.Header>
                <ListGroup variant="flush">
                    {silverServOut}
                    {silverPackage.map(item => (
                        <ListGroup.Item className={classes.ListItem} key={item.id}>  
                            {item.carType}
                            <small>({item.carSize})</small> 
                            @{item.price}/- 
                            <Link onClick={props.clicked}>Book</Link>
                        </ListGroup.Item>
                    ))}
                    
                </ListGroup>
                
            </Card>
            <Card style={{ width: '33%' }}>
                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(192, 134, 26)'}}>
                        GOLD PACKAGE</Card.Header>
                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(252, 184, 59)'}}>
                        Rs. 950/- ONWARDS</Card.Header>
                <ListGroup variant="flush">
                    {silverServOut}
                    {goldServOut}
                    {goldPackage.map(item => (
                            <ListGroup.Item className={classes.ListItem} key={item.id}>  
                                {item.carType}
                                <small>({item.carSize})</small> 
                                @{item.price}/- 
                                <Link to={{pathname: '/contact-data', carDetails: item}}>Book</Link>
                            </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
            <Card style={{ width: '33%' }}>
                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(74, 192, 192)'}}>
                        PLATINUM PACKAGE</Card.Header>
                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(139, 226, 226)'}}>
                        Rs. 1200/- ONWARDS</Card.Header>
                <ListGroup variant="flush">
                    {silverServOut}
                    {goldServOut}
                    {platinumServOut}
                    {platinumPackage.map(item => (
                            <ListGroup.Item className={classes.ListItem} key={item.id}>  
                                {item.carType}
                                <small>({item.carSize})</small> 
                                @{item.price}/- 
                                <Link to={{pathname: '/contact-data', carDetails: item}}>Book</Link>
                            </ListGroup.Item>
                    ))}
                </ListGroup>
            </Card>
        </div>
     
    )
};

export default packages;