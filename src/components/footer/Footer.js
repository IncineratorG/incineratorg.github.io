import React from 'react';
import withStyles from 'react-jss'
import footerStyles from "./styles/footerStyles";

const Footer = ({classes}) => {
    const emailPressHandler = () => {
        console.log('EMAIL_PRESS');
    };

    return (
        <div className={classes.mainContainer}>
            <div className={classes.emailArea}>
                <div
                    className={classes.emailTextArea}
                    onClick={emailPressHandler}>
                    <span className={classes.emailText}>alexander.v.dorokhov@yandex.ru</span>
                </div>
            </div>
        </div>
    )
};

export default withStyles(footerStyles)(Footer);
