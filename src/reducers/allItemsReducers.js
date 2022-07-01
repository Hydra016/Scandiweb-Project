export default (state = {}, action) => {
  switch (action.type) {
    case "get_all_items":
      return action.payload;
    case "get_single_item":
      return action.payload;
    case "get_items_by_category":
      return action.payload;
    default:
      return state;
  }
};
