import React from 'react';
import ToolBar from '../Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = (props) => (
    <div>
    <ToolBar />
    <main className={classes.Content}>
        {props.children}
    </main>
    </div>
);

export default layout;