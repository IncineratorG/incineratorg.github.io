import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'
import HoveredTextLine from "../../../../common/hovered-text-line/HoveredTextLine";

const BodyTextArea = () => {
    const useStyles = createUseStyles(bodyTextAreaStyles);
    const styles = useStyles();

    const hoveredTextLineColors = ['cyan', 'red', '#bc6ff1', 'yellow', 'orange'];

    return (
        <div className={styles.mainContainer}>
            <div className={styles.textLinesArea}>
                <div>
                    <HoveredTextLine
                        textLine={'Hello, I\'m Chris!'}
                        fontSize={'3.5vw'}
                        fontWeight={'bold'}
                        defaultTextLineColor={'black'}
                        hoveredTextLineColors={hoveredTextLineColors}
                    />
                </div>
                <div>
                    <HoveredTextLine
                        textLine={'A senior front-end'}
                        fontSize={'3.5vw'}
                        fontWeight={'bold'}
                        defaultTextLineColor={'grey'}
                        hoveredTextLineColors={hoveredTextLineColors}
                    />
                </div>
                <div>
                    <HoveredTextLine
                        textLine={'developer currently'}
                        fontSize={'3.5vw'}
                        fontWeight={'bold'}
                        defaultTextLineColor={'grey'}
                        hoveredTextLineColors={hoveredTextLineColors}
                    />
                </div>
                <div>
                    <HoveredTextLine
                        textLine={'making & mostly'}
                        fontSize={'3.5vw'}
                        fontWeight={'bold'}
                        defaultTextLineColor={'grey'}
                        hoveredTextLineColors={hoveredTextLineColors}
                    />
                </div>
                <div>
                    <HoveredTextLine
                        textLine={'breaking things at'}
                        fontSize={'3.5vw'}
                        fontWeight={'bold'}
                        defaultTextLineColor={'grey'}
                        hoveredTextLineColors={hoveredTextLineColors}
                    />
                </div>
                <div>
                    <HoveredTextLine
                        textLine={'Coalface.'}
                        fontSize={'3.5vw'}
                        fontWeight={'bold'}
                        defaultTextLineColor={'black'}
                        hoveredTextLineColors={hoveredTextLineColors}
                    />
                </div>
            </div>
        </div>
    );
};

const bodyTextAreaStyles = {
    mainContainer: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '10vw',
        // backgroundColor: 'green',
        // margin: '5px',
    },
    textLinesArea: {
        display: 'flex',
        flexDirection: 'column',
        // backgroundColor: 'lightgrey',
        lineHeight: '3vw',
        margin: '5px',
    },
};

export default BodyTextArea;
