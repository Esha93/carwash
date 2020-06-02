import React from 'react';
import classes from './NavItems.module.css';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const navItem = (props) => (
 
        <ul className={classes.NavItems}>
            <li >
                <NavLink to='/cart' activeClassName={classes.active} >
                    <FaShoppingCart />  Cart</NavLink>
            </li>
            <li >
                <NavLink to='/packages' activeClassName={classes.active}>Packages</NavLink>
            </li>
            <li >
                <NavLink to='/login' activeClassName={classes.active}>Login</NavLink>
            </li>
        </ul>   
 
);

export default navItem;