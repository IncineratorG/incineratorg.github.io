import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const HoveredLetter = ({
        letter,
        fontSize,
        fontWeight,
        regularColor,
        hoveredColor,
    }) => {
    const transparentColor = 'transparent';
    const [letterColor, setLetterColor] = useState('black');

    const useStyles = createUseStyles(hoveredLetterStyles);
    const styles = useStyles({
        letterAreaFonSize: fontSize,
        letterAreaFontWeight: fontWeight,
        letterAreaColor: letterColor,
    });

    let letterToDraw = letter;
    if (letterToDraw === ' ') {
        letterToDraw = '_';
    }

    const mouseEnterHandler = () => {
        if (letterColor === transparentColor) {
            return;
        }
        setLetterColor(hoveredColor);
    };

    const mouseLeaveHandler = () => {
        if (letterColor === transparentColor) {
            return;
        }
        setLetterColor(regularColor);
    };

    useEffect(() => {
        if (letter === ' ') {
            setLetterColor(transparentColor);
        } else {
            setLetterColor(regularColor);
        }
    }, [regularColor, hoveredColor, letter]);

    return (
        <div className={styles.mainContainer}>
            <span
                className={styles.letterArea}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}>
                {letterToDraw}
            </span>
        </div>
    );
};

const hoveredLetterStyles = {
    mainContainer: {
        // display: 'flex',
        // flex: 1,
        // display: 'inline-block',
        // padding: '1px',
    },
    letterArea: {
        alignSelf: 'center',
        justifySelf: 'center',
        display: 'inline-block',
        fontFamily: 'Arial',
        // backgroundColor: 'green',
        color: ({letterAreaColor}) =>
            letterAreaColor ? letterAreaColor : 'black',
        fontSize: ({letterAreaFonSize}) =>
            letterAreaFonSize ? letterAreaFonSize : '18px',
        fontWeight: ({letterAreaFontWeight}) =>
            letterAreaFontWeight ? letterAreaFontWeight : 'bold',
    },
};

export default HoveredLetter;
