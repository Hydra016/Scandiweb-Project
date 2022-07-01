export default (state={}, action) => {
    switch(action.type) {
        case 'get_single_item' :
            return action.payload
        default :
            return state
    }
}