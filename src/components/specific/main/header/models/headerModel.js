import {useDispatch, useSelector} from 'react-redux';

export const useHeaderModel = () => {
    const dispatch = useDispatch();

    return {
        dispatch
    }
};
