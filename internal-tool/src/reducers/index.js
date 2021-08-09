import { combineReducers } from 'redux';
import UseReducer from '../reducers/user';
import ProductsReducer from '../reducers/product';

const rootReducer = combineReducers({
 isUserLoggedIn:UseReducer,
 products:ProductsReducer,
 currentProduct:ProductsReducer
});

export default rootReducer;
