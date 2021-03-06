import { request } from 'graphql-request';
import { getAllItems, getSingleItem, getItemsByCategory } from '../Queries';

export const fetchAll = () => dispatch =>  {
    request('http://localhost:4000/', getAllItems).then((data) => dispatch({
        type: 'get_all_items',
        payload: data
    }))
}

export const fetchSingleItem = (id) => dispatch =>  {
    request('http://localhost:4000/', getSingleItem(id)).then((data) => dispatch({
        type: 'get_single_item',
        payload: data
    }))
}

export const getCategoryItems = (cat) => dispatch => {
    request('http://localhost:4000/', getItemsByCategory(cat)).then(data => dispatch({
        type: 'get_items_by_category',
        payload: data
    }))
}

export const fetchCurrencyChange = (val) => dispatch =>  {
    dispatch({
        type: 'get_currency_val',
        payload: val
    })
}

export const fetchTitleChange = (val) => dispatch =>  {
    dispatch({
        type: 'get_title_val',
        payload: val
    })
}

export const postCartItems = (obj) => dispatch => {
    dispatch({
        type: 'post_cart_items',
        payload: obj
    })
}
