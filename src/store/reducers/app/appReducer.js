import {SWITCH_BACKGROUND_COLOR} from "../../actions/types/app/appTypes";

const initialState = {
    app: {
        backgroundColor: 'white',
    },
};

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_BACKGROUND_COLOR: {
            const backgroundColor =
                state.app.backgroundColor === 'white' ? 'black' : 'white';

            return {
                ...state,
                app: {
                    ...state.app,
                    backgroundColor,
                }
            }
        }

        default: {
            return state;
        }
    }
};
