import React from "react";
import {createUseStyles} from 'react-jss'
import HoveredLetter from "../hovered-letter/HoveredLetter";

const HoveredTextLine = ({
        textLine,
        fontSize,
        fontWeight,
        defaultTextLineColor,
        hoveredTextLineColors,
    }) => {
    const defaultFontSize = '2vw';

    const useStyles = createUseStyles(hoveredTextLineStyles);
    const styles = useStyles();

    const textArray = Array.from(textLine);

    let keyCounter = 1;
    const hoveredLettersComponent = textArray.map(letter => {
        const regularColor = defaultTextLineColor;
        let hoveredColor = 'yellow';
        if (hoveredTextLineColors) {
            hoveredColor = hoveredTextLineColors[keyCounter % hoveredTextLineColors.length];
        }

        const key = keyCounter.toString();
        ++keyCounter;
        return (
            <HoveredLetter
                key={key}
                letter={letter}
                fontSize={fontSize ? fontSize : defaultFontSize}
                fontWeight={fontWeight}
                regularColor={regularColor}
                hoveredColor={hoveredColor}
            />
        )
    });

    return (
        <div className={styles.mainContainer}>
            {hoveredLettersComponent}
        </div>
    );
};

const hoveredTextLineStyles = {
    mainContainer: {
        // display: 'inline-block',
        display: 'flex',
        flex: 1,
        // backgroundColor: 'red',
    },
};

export default HoveredTextLine;
