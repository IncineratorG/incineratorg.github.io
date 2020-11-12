import React from 'react';
import {createUseStyles} from 'react-jss'

const Body = () => {
    const useStyles = createUseStyles(bodyStyles);
    const styles = useStyles();

    // return (
    //     <div className={styles.mainContainer}>
    //         <div className={styles.textArea}>
    //             <div className={styles.textContainer}>
    //                 <span className={styles.text}>
    //                     Hello, I'm Chris!
    //                     A senior front-end
    //                     developer currently
    //                     making & mostly
    //                     breaking things at
    //                     Coalface.
    //                 </span>
    //             </div>
    //         </div>
    //         <div className={styles.freeSpaceArea}/>
    //     </div>
    // )

    return (
        <div className={styles.mainContainer}>
            <div className={styles.textArea}>
                <div className={styles.textLinesArea}>
                    <div>
                        <span>Text in span</span>
                    </div>
                    <div>
                        <span>Text in span</span>
                    </div>
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
            <div className={styles.freeSpaceArea}/>
        </div>
    )
};

const bodyStyles = {
    mainContainer: {
        height: '100%',
        width: '100%',
        // backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'row',
    },
    textArea: {
        display: 'flex',
        flex: '1',
        alignItems: 'center',
        justifyContent: 'center',
        lineHeight: '4vw',
        backgroundColor: 'green',
        // margin: '5px',
    },
    textLinesArea: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'yellow',
        lineHeight: '20px',
    },
    firstTextLine: {
        display: 'flex',
        backgroundColor: 'lightgrey',
        height: 1,
    },
    // textArea: {
    //     display: 'flex',
    //     height: '100%',
    //     width: '40vw',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     lineHeight: '4vw',
    // },
    // textContainer: {
    //     display: 'flex',
    //     flex: '1',
    //     alignSelf: 'stretch',
    //     margin: '5px',
    //     backgroundColor: 'lightgrey',
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    text: {
        fontSize: '4vw',
        fontWeight: '900',
    },
    freeSpaceArea: {
        height: '100%',
        flex: '2',
    },
};

export default Body;
