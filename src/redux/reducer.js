import { APPYJOB, CONTACTUS, GETALLJOBS } from "./actions";

// initialising redux state
const initialState = {
    jobs: [],
    appliedMessage:"",
    contactMsg:""
}

// reducer for all action checing with switch case
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