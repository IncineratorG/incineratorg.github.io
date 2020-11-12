import React from 'react';
import {createUseStyles} from 'react-jss'

const Footer = () => {
    const useStyles = createUseStyles(footerStyles);
    const styles = useStyles();

    const emailPressHandler = () => {
        console.log('EMAIL_PRESS');
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.emailArea}>
                <div
                    className={styles.emailTextArea}
                    onClick={emailPressHandler}>
                    <span className={styles.emailText}>alexander.v.dorokhov@yandex.ru</span>
                </div>
            </div>
        </div>
    )
};

const footerStyles = {
    mainContainer: {
        display: 'flex',
        height: '100%',
        width: '100%',
        backgroundColor: 'lightgrey',
    },
    emailArea: {
        display: 'flex',
        flexDirection: 'column-reverse',
        backgroundColor: 'grey',
    },
    emailTextArea: {
        display: 'inline-block',
        padding: '5px',
    },
    emailText: {
        display: 'inline-block',
        backgroundColor: 'green',
        fontSize: '18px',
    },
};

export default Footer;
