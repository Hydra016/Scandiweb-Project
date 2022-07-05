export default (state = 'all', action) => {
    switch(action.type) {
        case 'get_title_val' :
            return action.payload
        default :
            return state
    }
}