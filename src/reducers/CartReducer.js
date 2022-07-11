const initialState = {
    arr: []
}
export default (state=[], action) => {
    switch(action.type) {
        case 'post_cart_items' :
            // console.log(action.payload)
            state = [...state, action.payload]
            return state
        default :
            return state 
    }
}