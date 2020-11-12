import {useDispatch, useSelector} from 'react-redux';

export const useMainPageModel = () => {
    const dispatch = useDispatch();

    const backgroundColor = useSelector(
        (storeState) => storeState.app.app.backgroundColor,
    );

    return {
        data: {
            backgroundColor,
        },
        dispatch,
    }
};
