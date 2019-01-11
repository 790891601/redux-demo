export default function counterList(state= [], action) {  
  switch(action.type) {
    case "ADD_TO_LIST":
      state.push({ n: 0})
      return state
    case "DEL_TO_LIST":
      state.pop()
      return state
    case "INC_TO_LIST":
      ++state[action.index].n
      return state
    case "DEC_TO_LIST":
      --state[action.index].n
      return state
    default:
      return state
  }
}