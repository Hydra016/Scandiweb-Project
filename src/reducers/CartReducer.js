export default (state={}, action) => {
    switch(action.type) {
        case 'post_cart_items' :
            return action.payload
        default :
            return state 
    }
}