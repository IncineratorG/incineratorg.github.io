import React from 'react';
import withStyles from 'react-jss'
import footerStyles from "./styles/footerStyles";

const Footer = ({classes}) => {
    return (
        <div className={classes.mainContainer}></div>
    )
};

export default withStyles(footerStyles)(Footer);
