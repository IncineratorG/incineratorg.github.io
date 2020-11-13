import React, {useState, useEffect} from "react";
import {createUseStyles} from 'react-jss'

const HoveredLetter = ({
        letter,
        fontSize,
        fontWeight,
        regularColor,
        hoveredColor
    }) => {
    const transparentColor = 'transparent';
    const [letterColor, setLetterColor] = useState('black');
    const [overflowLetterColor, setOverflowLetterColor] = useState('black');
    const [letterSet, setLetterSet] = useState(false);
    const [mouseHovering, setMouseHovering] = useState(false);

    const useStyles = createUseStyles(hoveredLetterStyles);
    const styles = useStyles({
        letterAreaFonSize: fontSize,
        letterAreaFontWeight: fontWeight,
        letterAreaColor: letterColor,
        overflowLetterAreaColor: overflowLetterColor,
    });

    let letterToDraw = letter;
    if (letterToDraw === ' ') {
        letterToDraw = '_';
    }

    const mouseEnterHandler = () => {
        setMouseHovering(true);
    };

    const mouseLeaveHandler = () => {
        setMouseHovering(false);
    };

    useEffect(() => {
        if (letter === ' ') {
            setLetterColor(transparentColor);
            setOverflowLetterColor(transparentColor);
        } else {
            setLetterColor(regularColor);
            setOverflowLetterColor(hoveredColor);
        }
        setLetterSet(true);
    }, [regularColor, hoveredColor, letter]);

    if (!letterSet) {
        return null;
    }

    const overflowComponent = (
        <div className={mouseHovering ? styles.overflowAreaFadeIn : styles.overflowAreaFadeOut}>
            <span
                className={styles.overflowLetterArea}
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}>
                {letterToDraw}
            </span>
        </div>
    );

    return (
        <div className={styles.mainContainer}>
            <span
                className={styles.letterArea}>
                {letterToDraw}
            </span>
            {overflowComponent}
        </div>
    );
};

const hoveredLetterStyles = {
    mainContainer: {
        position: 'relative',
        // borderStyle: 'solid',

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
        color: ({letterAreaColor}) =>
            letterAreaColor ? letterAreaColor : 'black',
        fontSize: ({letterAreaFonSize}) =>
            letterAreaFonSize ? letterAreaFonSize : '18px',
        fontWeight: ({letterAreaFontWeight}) =>
            letterAreaFontWeight ? letterAreaFontWeight : 'bold',
    },
    overflowAreaFadeIn: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: 1.0,
    },
    overflowAreaFadeOut: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 10,
        top: 0,
        left: 0,
        opacity: 0.0,
        transition: 'opacity 5s 1s',
    },
    overflowLetterArea: {
        alignSelf: 'center',
        justifySelf: 'center',
        display: 'inline-block',
        fontFamily: 'Arial',
        color: ({overflowLetterAreaColor}) =>
            overflowLetterAreaColor ? overflowLetterAreaColor : 'red',
        fontSize: ({letterAreaFonSize}) =>
            letterAreaFonSize ? letterAreaFonSize : '18px',
        fontWeight: ({letterAreaFontWeight}) =>
            letterAreaFontWeight ? letterAreaFontWeight : 'bold',
    },
};

export default HoveredLetter;

// import React, {useState, useEffect} from "react";
// import {createUseStyles} from 'react-jss'
//
// const HoveredLetter = ({
//         letter,
//         fontSize,
//         fontWeight,
//         regularColor,
//         hoveredColor,
//     }) => {
//     const transparentColor = 'transparent';
//     const [letterColor, setLetterColor] = useState('black');
//     const [letterSet, setLetterSet] = useState(false);
//     const [hiddenLetterOpacity, setHiddenLetterOpacity] = useState(0.0);
//     const [mouseHovering, setMouseHovering] = useState(false);
//     const [overflowLetterColor, setOverflowLetterColor] = useState('black');
//
//     const useStyles = createUseStyles(hoveredLetterStyles);
//     const styles = useStyles({
//         letterAreaFonSize: fontSize,
//         letterAreaFontWeight: fontWeight,
//         letterAreaColor: letterColor,
//
//         overflowLetterAreaColor: overflowLetterColor,
//     });
//
//     let letterToDraw = letter;
//     if (letterToDraw === ' ') {
//         letterToDraw = '_';
//     }
//
//     const mouseEnterHandler = () => {
//         // if (letterColor === transparentColor) {
//         //     return;
//         // }
//         // setLetterColor(hoveredColor);
//
//         // setHiddenLetterOpacity(1.0);
//         setMouseHovering(true);
//     };
//
//     const mouseLeaveHandler = () => {
//         // if (letterColor === transparentColor) {
//         //     return;
//         // }
//         // setLetterColor(regularColor);
//
//         // setHiddenLetterOpacity(0.0);
//         setMouseHovering(false);
//     };
//
//     useEffect(() => {
//         if (letter === ' ') {
//             setLetterColor(transparentColor);
//             setOverflowLetterColor(transparentColor);
//         } else {
//             setLetterColor(regularColor);
//             setOverflowLetterColor(hoveredColor);
//         }
//         setLetterSet(true);
//     }, [regularColor, hoveredColor, letter]);
//
//     if (!letterSet) {
//         return null;
//     }
//
//     const overflowComponent = (
//         <div className={mouseHovering ? styles.overflowAreaFadeIn : styles.overflowAreaFadeOut}>
//             <span
//                 className={styles.overflowLetterArea}
//                 onMouseEnter={mouseEnterHandler}
//                 onMouseLeave={mouseLeaveHandler}>
//                 {letterToDraw}
//             </span>
//         </div>
//     );
//
//     return (
//         <div className={styles.mainContainer}>
//             <span
//                 className={styles.letterArea}
//                 onMouseEnter={mouseEnterHandler}
//                 onMouseLeave={mouseLeaveHandler}>
//                 {letterToDraw}
//             </span>
//             {overflowComponent}
//         </div>
//     );
// };
//
// const hoveredLetterStyles = {
//     mainContainer: {
//         position: 'relative',
//         // borderStyle: 'solid',
//
//         // display: 'flex',
//         // flex: 1,
//         // display: 'inline-block',
//         // padding: '1px',
//     },
//     letterArea: {
//         alignSelf: 'center',
//         justifySelf: 'center',
//         display: 'inline-block',
//         fontFamily: 'Arial',
//         // backgroundColor: 'green',
//         color: ({letterAreaColor}) =>
//             letterAreaColor ? letterAreaColor : 'black',
//         fontSize: ({letterAreaFonSize}) =>
//             letterAreaFonSize ? letterAreaFonSize : '18px',
//         fontWeight: ({letterAreaFontWeight}) =>
//             letterAreaFontWeight ? letterAreaFontWeight : 'bold',
//     },
//     overflowArea: {
//         position: 'absolute',
//         // // width: '100%',
//         // // height: '100%',
//         width: '100%',
//         height: '100%',
//         // backgroundColor: 'blue',
//         // zIndex: 10,
//         top: 0,
//         left: 0,
//
//         opacity: ({overflowAreaOpacity}) =>
//             overflowAreaOpacity ? overflowAreaOpacity : 0.0,
//     },
//     overflowAreaFadeIn: {
//         position: 'absolute',
//         // // width: '100%',
//         // // height: '100%',
//         width: '100%',
//         height: '100%',
//         // backgroundColor: 'blue',
//         // zIndex: 10,
//         top: 0,
//         left: 0,
//
//         opacity: 1.0,
//         transitionProperty: 'opacity',
//         transitionDuration: '1',
//     },
//     overflowAreaFadeOut: {
//         position: 'absolute',
//         // // width: '100%',
//         // // height: '100%',
//         width: '100%',
//         height: '100%',
//         // backgroundColor: 'blue',
//         zIndex: 10,
//         top: 0,
//         left: 0,
//
//         opacity: 0.0,
//         transition: 'opacity 5s 1s',
//     },
//     overflowLetterArea: {
//         alignSelf: 'center',
//         justifySelf: 'center',
//         display: 'inline-block',
//         fontFamily: 'Arial',
//         color: ({overflowLetterAreaColor}) =>
//             overflowLetterAreaColor ? overflowLetterAreaColor : 'red',
//         fontSize: ({letterAreaFonSize}) =>
//             letterAreaFonSize ? letterAreaFonSize : '18px',
//         fontWeight: ({letterAreaFontWeight}) =>
//             letterAreaFontWeight ? letterAreaFontWeight : 'bold',
//     },
//     // overflowLetterArea: {
//     //     position: 'absolute',
//     //     // width: '20px',
//     //     // height: '20px',
//     //     backgroundColor: 'red',
//     //     zIndex: '10',
//     //     // display: 'inline-block',
//     //     // color: 'pink',
//     // },
// };
//
// export default HoveredLetter;


// =====
// =======
// import React, {useState, useEffect} from "react";
// import {createUseStyles} from 'react-jss'
//
// const HoveredLetter = ({
//         letter,
//         fontSize,
//         fontWeight,
//         regularColor,
//         hoveredColor,
//         param,
//     }) => {
//     const transparentColor = 'transparent';
//     const [letterColor, setLetterColor] = useState('black');
//     const [letterSet, setLetterSet] = useState(false);
//
//     const useStyles = createUseStyles(hoveredLetterStyles);
//     const styles = useStyles({
//         letterAreaFonSize: fontSize,
//         letterAreaFontWeight: fontWeight,
//         letterAreaColor: letterColor,
//     });
//
//     let letterToDraw = letter;
//     if (letterToDraw === ' ') {
//         letterToDraw = '_';
//     }
//
//     const mouseEnterHandler = () => {
//         if (letterColor === transparentColor) {
//             return;
//         }
//         setLetterColor(hoveredColor);
//     };
//
//     const mouseLeaveHandler = () => {
//         if (letterColor === transparentColor) {
//             return;
//         }
//         setLetterColor(regularColor);
//     };
//
//     useEffect(() => {
//         if (letter === ' ') {
//             setLetterColor(transparentColor);
//         } else {
//             setLetterColor(regularColor);
//         }
//         setLetterSet(true);
//     }, [regularColor, hoveredColor, letter]);
//
//     if (!letterSet) {
//         return null;
//     }
//
//     const overflowComponent = param ? (
//         <div className={styles.overflowArea}>
//             <span
//                 className={styles.letterArea}>
//                 {'B'}
//             </span>
//         </div>
//     ) : null;
//
//     return (
//         <div className={styles.mainContainer}>
//             <span
//                 className={styles.letterArea}
//                 onMouseEnter={mouseEnterHandler}
//                 onMouseLeave={mouseLeaveHandler}>
//                 {letterToDraw}
//             </span>
//             {overflowComponent}
//         </div>
//     );
// };
//
// const hoveredLetterStyles = {
//     mainContainer: {
//         position: 'relative',
//         borderStyle: 'solid',
//
//         // display: 'flex',
//         // flex: 1,
//         // display: 'inline-block',
//         // padding: '1px',
//     },
//     letterArea: {
//         alignSelf: 'center',
//         justifySelf: 'center',
//         display: 'inline-block',
//         fontFamily: 'Arial',
//         // backgroundColor: 'green',
//         color: ({letterAreaColor}) =>
//             letterAreaColor ? letterAreaColor : 'black',
//         fontSize: ({letterAreaFonSize}) =>
//             letterAreaFonSize ? letterAreaFonSize : '18px',
//         fontWeight: ({letterAreaFontWeight}) =>
//             letterAreaFontWeight ? letterAreaFontWeight : 'bold',
//     },
//     overflowArea: {
//
//         position: 'absolute',
//         // // width: '100%',
//         // // height: '100%',
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'blue',
//         // zIndex: 10,
//         top: 0,
//         left: 0,
//     },
//     // overflowLetterArea: {
//     //     position: 'absolute',
//     //     // width: '20px',
//     //     // height: '20px',
//     //     backgroundColor: 'red',
//     //     zIndex: '10',
//     //     // display: 'inline-block',
//     //     // color: 'pink',
//     // },
// };
//
// export default HoveredLetter;
// =======
// =====
