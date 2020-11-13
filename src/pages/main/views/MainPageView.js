import React from "react";
import {createUseStyles} from 'react-jss'
import mainPageStyles from "../styles/mainPageStyles";
import Header from "../../../components/specific/main/header/Header";
import Body from "../../../components/specific/main/body/Body";
import Footer from "../../../components/specific/main/footer/Footer";

const MainPageView = ({model, controller}) => {
    const {backgroundColor} = model.data;

    const {headerSwitchPressHandler} = controller;

    const useStyles = createUseStyles(mainPageStyles);
    const styles = useStyles({mainContainerBackgroundColor: backgroundColor});

    return (
        <div className={styles.mainContainer}>
            <div className={styles.header}>
                <Header onSwitchPress={headerSwitchPressHandler} />
            </div>
            <div className={styles.body}>
                <Body />
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
};

export default MainPageView;
