import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const HoveredLetter = ({letter, fontSize, regularColor, hoveredColor}) => {
    const [letterColor, setLetterColor] = useState('black');

    const useStyles = createUseStyles(hoveredLetterStyles);
    const styles = useStyles({
        letterAreaFonSize: fontSize,
        letterAreaColor: letterColor,
    });

    const mouseEnterHandler = () => {
        setLetterColor(hoveredColor);
    };

    const mouseLeaveHandler = () => {
        setLetterColor(regularColor);
    };

    useEffect(() => {
        setLetterColor(regularColor);
    }, [regularColor, hoveredColor]);

    return (
        <div className={styles.mainContainer}>
            <span className={styles.letterArea}
                  onMouseEnter={mouseEnterHandler}
                  onMouseLeave={mouseLeaveHandler}>
                {letter}
            </span>
        </div>
    );
};

const hoveredLetterStyles = {
    mainContainer: {
        display: 'flex',
        // flex: 1,
        // display: 'inline-block',
        // padding: '5px',
    },
    letterArea: {
        alignSelf: 'center',
        justifySelf: 'center',
        display: 'inline-block',
        backgroundColor: 'green',
        color: ({letterAreaColor}) =>
            letterAreaColor ? letterAreaColor : 'black',
        fontSize: ({letterAreaFonSize}) =>
            letterAreaFonSize ? letterAreaFonSize : '18px',
    },
};

export default HoveredLetter;
