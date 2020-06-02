import React from 'react';
import { Link } from 'react-router-dom';
import carwashImg from '../../assets/images/carwash.png';
import classes from './Home.module.css';

const home = (props) => (
    <div className={classes.Home}>
        <img className={classes.Img} src={carwashImg} alt="CarWash" />
        <div className={classes.Div}>
            <Link to={{pathname:'/packages',search: 'now'}}>
                <button className={[classes.Btn, classes.Now].join(' ')}>WASH NOW</button>
            </Link>
            <Link to={{pathname:'/packages',search: 'later '}}>
                <button className={[classes.Btn, classes.Later].join(' ')}>SCHEDULE LATER</button>
            </Link>
        </div>
        
    </div>
);

export default home;