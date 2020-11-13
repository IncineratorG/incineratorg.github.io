import React from 'react';
import {createUseStyles} from 'react-jss'
import HoveredLetter from "../../../common/hovered-letter/HoveredLetter";

const Header = ({onSwitchPress}) => {
    const useStyles = createUseStyles(headerStyles);
    const styles = useStyles();

    const switchPressHandler = () => {
        console.log('switchPressHandler()');
        if (onSwitchPress) {
            onSwitchPress();
        }
    };

    return (
        <div className={styles.mainContainer}>
            <div className={styles.freeArea}>
                <div className={styles.testArea}>
                    <HoveredLetter
                        letter={'H'}
                        fontSize={'2vw'}
                        regularColor={'black'}
                        hoveredColor={'yellow'} />
                    <HoveredLetter letter={'e'} fontSize={'2vw'} />
                    <HoveredLetter letter={'l'} fontSize={'2vw'} />
                    <HoveredLetter letter={'l'} fontSize={'2vw'} />
                    <HoveredLetter letter={'o'} fontSize={'2vw'} />
                </div>
            </div>
            <div className={styles.themeSwitcherArea}>
                <div
                    className={styles.themeSwitcherContainer}
                    onClick={switchPressHandler}/>
            </div>
        </div>
    );
};

const headerStyles = {
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'grey',
        height: '100%',
        width: '100%',
    },
    freeArea: {
        display: 'flex',
        flex: 1,
    },
    testArea: {
        display: 'flex',
        // height: '30px',
        // width: '100px',
        backgroundColor: 'lightgrey',
        justifySelf: 'center',
        alignSelf: 'center',
    },
    themeSwitcherArea: {
        display: 'flex',
        height: '100%',
        width: '10vw',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    themeSwitcherContainer: {
        height: '20px',
        width: '50px',
        backgroundColor: 'white',
    },
};

export default Header;


// import React from 'react';
// import HeaderView from "./views/HeaderView";
// import {useHeaderModel} from "./models/headerModel";
// import {useHeaderController} from "./controllers/headerController";
//
// const Header = ({classes}) => {
//     const model = useHeaderModel();
//     const controller = useHeaderController(model);
//
//     return (
//         <HeaderView model={model} controller={controller} />
//     );
// };
//
// export default Header;
