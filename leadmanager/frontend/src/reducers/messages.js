import { GET_MESSAGES, CREATE_MESSAGE } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_MESSAGES:
            return action.payload;
        case CREATE_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}