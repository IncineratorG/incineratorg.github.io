import {switchAppBackgroundColorAction} from "../../../store/actions/creators/app/appActionCreators";

export const useMainPageController = (model) => {
    const headerSwitchPressHandler = () => {
        model.dispatch(switchAppBackgroundColorAction());
    };

    return {
        headerSwitchPressHandler
    }
};
