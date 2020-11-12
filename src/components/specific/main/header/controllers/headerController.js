import {switchAppBackgroundColorAction} from "../../../../../store/actions/creators/app/appActionCreators";

export const useHeaderController = (model) => {
    const switcherPressHandler = () => {
        console.log('switcherPressHandler()');
        model.dispatch(switchAppBackgroundColorAction());
    };

    return {
        switcherPressHandler,
    }
};
