import React, {useState} from 'react';
import {createUseStyles} from 'react-jss'

const Footer = () => {
    const [emailCopyConfirmationMessageVisible, setEmailCopyConfirmationMessageVisible] = useState(false);

    const useStyles = createUseStyles(footerStyles);
    const styles = useStyles();

    const emailPressHandler = () => {
        console.log('EMAIL_PRESS');
        setEmailCopyConfirmationMessageVisible(!emailCopyConfirmationMessageVisible);
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
            <div className={styles.popupArea}>
                <div
                    className={emailCopyConfirmationMessageVisible ? styles.popupTextAreaVisible : styles.popupTextAreaInvisible}>
                    <span
                        className={emailCopyConfirmationMessageVisible ? styles.popupTextVisible : styles.popupTextInvisible}>
                        <b>alexander.v.dorokhov@yandex.ru</b> скопирован
                    </span>
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
        // justifyContent: 'center',
        // backgroundColor: 'grey',
    },
    emailTextArea: {
        // display: 'inline-block',
        // padding: '5px',
        marginBottom: '3vh',
    },
    emailText: {
        display: 'inline-block',
        backgroundColor: 'green',
        fontSize: '1.3vw',
    },
    popupArea: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row-reverse',
        height: '100%',
        // backgroundColor: 'green',
    },
    popupTextAreaVisible: {
        display: 'flex',
        flexDirection: 'column-reverse',
        // justifyContent: 'center',
        // flex: 1,
        // height: '100%',
        // backgroundColor: 'red',
        // transition: 'opacity 1s 0s',
        opacity: 1.0,
        transition: 'margin-bottom 500ms, opacity 500ms',
        marginBottom: '3vh',
    },
    popupTextAreaInvisible: {
        display: 'flex',
        flexDirection: 'column-reverse',
        // backgroundColor: 'red',
        // justifyContent: 'center',
        opacity: 0,
        transition: 'margin-bottom 500ms, opacity 500ms',
        marginBottom: '0vh',
    },
    popupTextVisible: {
        // backgroundColor: 'cyan',
        fontSize: '1.3vw',
    },
    popupTextInvisible: {
        // backgroundColor: 'red',
        fontSize: '1.3vw',

        // position: 'absolute',
        // bottom: 0,
        // right: 0,
    }
};

export default Footer;
