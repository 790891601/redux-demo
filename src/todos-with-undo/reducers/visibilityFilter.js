export default (state= "ALL", action) => {
  //根据filter筛选
  switch(action.type) {
    case "SET_FILTER":
      return action.filter
    default:
      return state
  }
}