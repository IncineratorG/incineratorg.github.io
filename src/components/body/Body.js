import React from 'react';
import withStyles from 'react-jss'
import bodyStyles from "./styles/bodyStyles";

const Body = ({classes}) => {
    /*
                        <p className={classes.text}>
                        Hello, I'm Chris!
                        A senior front-end
                        developer currently
                        making & mostly
                        breaking things at
                        Coalface.
                    </p>
     */

    return (
        <div className={classes.mainContainer}>
            <div className={classes.textArea}>
                <div className={classes.textContainer}>
                    <span className={classes.text}>
                        Hello, I'm Chris!
                        A senior front-end
                        developer currently
                        making & mostly
                        breaking things at
                        Coalface.
                    </span>
                </div>
            </div>
            <div className={classes.freeSpaceArea}/>
        </div>
    )
};

export default withStyles(bodyStyles)(Body);
