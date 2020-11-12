import React from 'react';
import withStyles from 'react-jss'
import headerStyles from "./styles/headerStyles";

const Header = ({classes}) => {
    return (
        <div className={classes.mainContainer}>
        </div>
    );
};

export default withStyles(headerStyles)(Header);
