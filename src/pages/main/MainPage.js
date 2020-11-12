import React from 'react';
import {useMainPageModel} from "./models/mainPageModel";
import {useMainPageController} from "./controllers/mainPageController";
import MainPageView from "./views/MainPageView";

const MainPage = () => {
    const model = useMainPageModel();
    const controller = useMainPageController(model);

    return (
        <MainPageView model={model} controller={controller} />
    );
};

export default MainPage;
