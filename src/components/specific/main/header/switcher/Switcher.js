import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const Switcher = () => {
    const [switchedToDark, setSwitchedToDark] = useState(false);

    const useStyles = createUseStyles(switcherStyles);
    const styles = useStyles();

    const switcherPressHandler = () => {
        console.log('Switcher->switcherPressHandler()');
        setSwitchedToDark(!switchedToDark);
    };

    return (
        <div className={styles.mainContainer}>
            <div
                className={styles.switchArea}
                onClick={switcherPressHandler} >
                <div className={switchedToDark ? styles.switcherCircleRight : styles.switcherCircleLeft}>

                </div>
            </div>
        </div>
    )
};

const switcherStyles = {
    mainContainer: {
        width: '40px',
        height: '18px',
        // backgroundColor: 'blue',
    },
    switchArea: {
        width: '100%',
        height: '100%',
        backgroundColor: 'lightgrey',
        borderRadius: '10px',
        position: 'relative',
    },
    switcherCircleLeft: {
        width: '18px',
        height: '18px',
        backgroundColor: 'red',
        borderRadius: '9px',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'left 300ms',
    },
    switcherCircleRight: {
        width: '18px',
        height: '18px',
        backgroundColor: 'red',
        borderRadius: '9px',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        left: 22,
        top: 0,
        transition: 'left 300ms',
    }
};

export default Switcher;
