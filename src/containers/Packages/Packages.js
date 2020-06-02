import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ListGroup, Card } from 'react-bootstrap';
import classes from './Packages.module.css';

class Packages extends React.Component {

    state = {
        silverServices: null,
        packages: null,
        goldServices: null,
        platinumServices: null,
    }
    

    componentDidMount() {
        //silver
        const silver = [];
        axios.get('https://car-wash-16a2b.firebaseio.com/services.json')
        .then(res=> {
            console.log(res.data);
            this.setState({silverServices: {...res.data}});
            for(let key in res.data) {
                silver.push(key + ' : ' + res.data[key])
                
            }
            this.setState({silverServices: silver});
            
        })
        .catch(err => console.log(err));

        //gold
        axios.get('https://car-wash-16a2b.firebaseio.com/gold-services.json')
        .then(res=> {
            const gold = [];
            console.log(res.data);
            
            for(let key in res.data) {
                gold.push(key + ' : ' + res.data[key]);
            }
            this.setState({goldServices: gold});
           
        })
        .catch(err => console.log(err));

        //platinum
        axios.get('https://car-wash-16a2b.firebaseio.com/platinum-services.json')
        .then(res=> {
            const platinum = [];
            console.log(res.data);
            
            for(let key in res.data) {
                platinum.push(key + ' : ' + res.data[key]);
                console.log(platinum);
            }
            this.setState({platinumServices: platinum});
            
        })
        .catch(err => console.log(err));

        //packages
        axios.get('package-data.json')
        .then(res=> {
            console.log(res.data);
            this.setState({packages: {...res.data}});    
        })
        .catch(err => console.log(err))
    }

    render () {
        let packageOutput = <h1>Loading....</h1>
        if(this.state.silverServices && this.state.packages && this.state.goldServices
            && this.state.platinumServices) {
            const silverServ = this.state.silverServices;
            const goldServ = this.state.goldServices;
            const platinumServ = this.state.platinumServices;
            console.log(silverServ, platinumServ, goldServ);
            const silverServOut = silverServ.map(item => {
                return <ListGroup.Item key={item}>{item}</ListGroup.Item>
            })

            const goldServOut = goldServ.map(item => {
                return <ListGroup.Item key={item} style={{color: '#f900cc'}}>{item}</ListGroup.Item>
            })

            const platinumServOut = platinumServ.map(item => {
                return <ListGroup.Item key={item} style={{color: 'tomato'}}>{item}</ListGroup.Item>
            })

            packageOutput = (
               <div >
                    <div className={classes.Content}>
                        <h5 >Please Select package: </h5>
                   
                            Get complete detailing / upholstery services at your door step on affordable prices. 
                            Take charge of your car's health today with our affordable cleaning packages.
                    </div>
                    <br />
                        <div className={classes.Packages}>  
                            <Card style={{ width: '33%' }}>
                                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(182, 163, 127)'}}>
                                        SILVER PACKAGE</Card.Header>
                                <Card.Header className={classes.CardHeader} style={{backgroundColor: 'rgb(236, 216, 179)'}}>
                                        Rs. 450/- ONWARDS</Card.Header>
                                <ListGroup variant="flush">
                                    {silverServOut}
                                    {this.state.packages.silver.map(item => (
                                        <ListGroup.Item className={classes.ListItem} key={item.id}>  
                                            {item.carType}
                                            <small>({item.carSize})</small> 
                                            @{item.price}/- 
                                            <button >Book</button>
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
                                    {this.state.packages.gold.map(item => (
                                        <ListGroup.Item className={classes.ListItem} key={item.id}>  
                                            {item.carType}
                                            <small>({item.carSize})</small> 
                                            @{item.price}/- 
                                            <button >Book</button>
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
                                    {this.state.packages.platinum.map(item => (
                                        <ListGroup.Item className={classes.ListItem} key={item.id}>  
                                            {item.carType}
                                            <small>({item.carSize})</small> 
                                            @{item.price}/- 
                                            <button >Book</button>
                                        </ListGroup.Item>
                                ))}
                                </ListGroup>
                            </Card>
                        </div>
                </div>
            )}
        return (
            <div>
                {packageOutput}
            </div>
        )
    }

}

export default Packages