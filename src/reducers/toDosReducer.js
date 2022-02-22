import { GET_TODOS } from "../actions/types";

const initialState = {
    toDos: null
};

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_TODOS:
            return {
                ...state,
                toDos: action.payload
            }
        default:
            return state;
    }
}