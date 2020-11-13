import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const Switcher = ({switchedToLeft, onSwitchPress}) => {
    const [whiteCircleToRight, setWhiteCircleToRight] = useState(true);

    const useStyles = createUseStyles(switcherStyles);
    const styles = useStyles();

    const switcherPressHandler = () => {
        if (onSwitchPress) {
            onSwitchPress();
        }
    };

    useEffect(() => {
        if (switchedToLeft) {
            setWhiteCircleToRight(false);
        } else {
            setWhiteCircleToRight(true);
        }
    }, [switchedToLeft]);

    // return (
    //     <div className={styles.mainContainer}>
    //         <div
    //             className={styles.switchArea}
    //             onClick={switcherPressHandler} >
    //             <div
    //                 className={switchedToLeft ? styles.switcherCircleLeft : styles.switcherCircleRight}
    //             />
    //         </div>
    //     </div>
    // )

    return (
        <div className={styles.mainContainer}>
            <div
                className={styles.switchArea}
                onClick={switcherPressHandler} >
                <div className={whiteCircleToRight ? styles.whiteCircleRight : styles.whiteCircleLeft} />
                <div className={whiteCircleToRight ? styles.blackCircleLeft : styles.blackCircleRight} />
            </div>
        </div>
    )
};

const switcherStyles = {
    mainContainer: {
        width: '18px',
        height: '14px',
        // backgroundColor: 'blue',
    },
    whiteCircleLeft: {
        width: '12px',
        height: '12px',
        backgroundColor: 'white',
        borderRadius: '8px',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'left 300ms',
        borderColor: 'white',
        border: 'solid',
        borderWidth: '1px',
        zIndex: 10,
    },
    whiteCircleRight: {
        width: '12px',
        height: '12px',
        backgroundColor: 'white',
        borderRadius: '8px',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        left: 8,
        top: 0,
        transition: 'left 300ms',
        border: 'solid',
        borderColor: 'black',
        borderWidth: '1px',
        zIndex: 10,
    },
    blackCircleLeft: {
        width: '12px',
        height: '12px',
        backgroundColor: 'black',
        borderRadius: '8px',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        left: 0,
        top: 0,
        transition: 'left 300ms',
        border: 'solid',
        borderColor: 'white',
        borderWidth: '1px',
        // zIndex: 10,
    },
    blackCircleRight: {
        width: '12px',
        height: '12px',
        backgroundColor: 'black',
        borderRadius: '8px',
        alignSelf: 'center',
        justifySelf: 'center',
        position: 'absolute',
        left: 8,
        top: 0,
        transition: 'left 300ms',
        border: 'solid',
        borderColor: 'white',
        borderWidth: '1px',
    },
    switchArea: {
        width: '100%',
        height: '100%',
        // backgroundColor: 'lightgrey',
        borderRadius: '10px',
        position: 'relative',
    },
    // switcherCircleLeft: {
    //     width: '18px',
    //     height: '18px',
    //     backgroundColor: 'red',
    //     borderRadius: '9px',
    //     alignSelf: 'center',
    //     justifySelf: 'center',
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     transition: 'left 300ms',
    // },
    // switcherCircleRight: {
    //     width: '18px',
    //     height: '18px',
    //     backgroundColor: 'red',
    //     borderRadius: '9px',
    //     alignSelf: 'center',
    //     justifySelf: 'center',
    //     position: 'absolute',
    //     left: 12,
    //     top: 0,
    //     transition: 'left 300ms',
    // }
};

export default Switcher;
