import React from 'react';
import HeaderView from "./views/HeaderView";
import {useHeaderModel} from "./models/headerModel";
import {useHeaderController} from "./controllers/headerController";

const Header = ({classes}) => {
    const model = useHeaderModel();
    const controller = useHeaderController(model);

    return (
        <HeaderView model={model} controller={controller} />
    );
};

export default Header;
