import React from 'react';
import withStyles from 'react-jss'
import headerStyles from "./styles/headerStyles";

const Header = ({classes}) => {
    const switcherPressHandler = () => {
        console.log('SWITCHER_PRESS');
    };

    return (
        <div className={classes.mainContainer}>
            <div className={classes.themeSwitcherArea}>
                <div
                    className={classes.themeSwitcherContainer}
                    onClick={switcherPressHandler}/>
            </div>
        </div>
    );
};

export default withStyles(headerStyles)(Header);
