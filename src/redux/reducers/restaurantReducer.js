import ActionTypes from "../actionTypes";

const initialState = {
    isLoading: false,
    error: false,
    restaurants: [],
}

const restaurantReducer = (state = initialState, action) => {

    console.log(action)
    switch (action.type) {
        case ActionTypes.REST_LOADING:
            return { ...state,isLoading:false};

        case ActionTypes.REST_ERROR:
            return {...state,isLoading:false,error:action.payload};

        case ActionTypes.REST_SUCCESS:
            return {...state,isLoading:false,error:false,restaurants:action.payload};

        default:
            return state;
    }

};


export default restaurantReducer;