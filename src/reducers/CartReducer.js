const initialState = {
    arr: []
}
export default (state=[], action) => {
    switch(action.type) {
        case 'post_cart_items' :
            state = [...state, action.payload]
        case 'quantity_inc': 
        let tempInc = state.map((item) => {
            if(item.itemId === action.payload.itemId){
                return {...item, qty: item.qty + 1}
            } return item
        })
        return tempInc;
        case 'quantity_dec': 
        let tempDec = state.map((item) => {
            if(item.itemId === action.payload.itemId){
                return {...item, qty: item.qty - 1}
            } return item
        })
        return tempDec;
        case 'remove_item': 
            return state.filter(item => item.itemId !== action.payload.itemId)
        default :
            return state 
    }
}