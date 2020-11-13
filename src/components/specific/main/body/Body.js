import React from 'react';
import {createUseStyles} from 'react-jss'
import BodyTextArea from "./text-area/BodyTextArea";

const Body = () => {
    const useStyles = createUseStyles(bodyStyles);
    const styles = useStyles();

    const textAreaComponent = <BodyTextArea />;
    const freeSpaceComponent = <div className={styles.freeSpaceArea} />;

    return (
        <div className={styles.mainContainer}>
            {textAreaComponent}
            {freeSpaceComponent}
        </div>
    )
};

const bodyStyles = {
    mainContainer: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    freeSpaceArea: {
        height: '100%',
        flex: '2',
    },
};

export default Body;
