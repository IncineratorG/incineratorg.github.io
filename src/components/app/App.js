import React from 'react';
import withStyles from 'react-jss'
import appStyles from "./styles/appStyles";
import Header from "../header/Header";
import Body from "../body/Body";
import Footer from "../footer/Footer";

const App = ({classes}) => {
    return (
        <div className={classes.mainContainer}>
            <div className={classes.header}>
                <Header />
            </div>
            <div className={classes.body}>
                <Body />
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    )
};

export default withStyles(appStyles)(App);
