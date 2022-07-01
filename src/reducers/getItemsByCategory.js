export default (state = {}, action) => {
    switch(action.type) {
        case 'get_items_by_category' :
            return action.payload
        default :
            return state
    }
}