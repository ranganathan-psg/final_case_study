import { APPYJOB, CONTACTUS, GETALLJOBS } from "./actions";

const initialState = {
    jobs: [],
    appliedMessage:"",
    contactMsg:""
}


function reducer(state = initialState, action) {
    switch (action.type) {
        case GETALLJOBS:
            return {
                ...state,
                jobs: action.data,
            };
        case APPYJOB:
            return {...state, appliedMessage: action.data};
        case CONTACTUS:
            return {...state, contactMsg: action.data};
        default:
            return state;
    }

}

export default reducer;