import React from 'react';
import {createUseStyles} from 'react-jss'
import headerStyles from "../styles/headerStyles";
import HoveredLetter from "../../../../common/hovered-letter/HoveredLetter";

const HeaderView = ({model, controller}) => {
    const {switcherPressHandler} = controller;

    const useStyles = createUseStyles(headerStyles);
    const styles = useStyles();

    const onSwitchPress = () => {
        if (switcherPressHandler) {
            switcherPressHandler();
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.freeArea}>
                <div className={styles.testArea}>
                    <HoveredLetter letter={'H'} fontSize={'2vw'} />
                    <HoveredLetter letter={'e'} fontSize={'2vw'} />
                    <HoveredLetter letter={'l'} fontSize={'2vw'} />
                    <HoveredLetter letter={'l'} fontSize={'2vw'} />
                    <HoveredLetter letter={'o'} fontSize={'2vw'} />
                </div>
            </div>
            <div className={styles.themeSwitcherArea}>
                <div
                    className={styles.themeSwitcherContainer}
                    onClick={onSwitchPress}/>
            </div>
        </div>
    );
};

export default HeaderView;
