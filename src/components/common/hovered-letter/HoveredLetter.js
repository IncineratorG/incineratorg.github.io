import React, {useState} from "react";
import {createUseStyles} from 'react-jss'

const HoveredLetter = ({letter, fontSize}) => {
    const hoveredColor = 'yellow';
    const regularColor = 'black';
    const [letterColor, setLetterColor] = useState(regularColor);

    const useStyles = createUseStyles(hoveredLetterStyles);
    const styles = useStyles({
        letterAreaFonSize: fontSize,
        letterAreaColor: letterColor,
    });

    const mouseEnterHandler = () => {
        console.log('mouseEnterHandler');
        setLetterColor(hoveredColor);
    };

    const mouseLeaveHandler = () => {
        console.log('mouseLeaveHandler');
        setLetterColor(regularColor);
    };

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
