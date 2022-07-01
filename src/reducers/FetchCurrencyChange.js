export default (state="USD", action) => {
    switch(action.type) {
        case 'get_currency_val' :
            return action.payload
        default :
            return state
    }
}