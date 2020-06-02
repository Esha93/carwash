import React from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.jpg';
import classes from './Logo.module.css';


const logo = (props) => (
    <Link className={classes.Logo} to="/">
        <img src={logoImg} alt="LOGO" />
    </Link>
);


export default logo;