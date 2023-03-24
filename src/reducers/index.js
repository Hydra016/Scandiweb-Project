import { combineReducers } from 'redux';
import allItemsReducers from './allItemsReducers';
import getSingleItem from './getSingleItem';
import FetchCurrencyChange from './FetchCurrencyChange';
import getItemsByCategory from './getItemsByCategory';
import titleReducer from './titleReducer';
import CartReducer from './CartReducer';
import quantityChanger from './quantityChanger';

export default combineReducers ({
    allItems: allItemsReducers,
    singleItem: getSingleItem,
    currency: FetchCurrencyChange,
    categoryItems: getItemsByCategory,
    title: titleReducer,
    cartItems: CartReducer,
});