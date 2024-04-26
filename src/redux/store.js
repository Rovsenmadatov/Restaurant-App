import {applyMiddleware,combineReducers,createStore} from "redux";
import productReducer from "./reducers/productReducer";
import basketReducer from "./reducers/basketReducer";
import {thunk} from 'redux-thunk';
import restaurantReducer from "./reducers/restaurantReducer";



const rootReducer = combineReducers({
    products : productReducer,
    cart : basketReducer,
    restaurants : restaurantReducer,
});

export default createStore(rootReducer,applyMiddleware(thunk));