function undoableTodos(reducers) {
  const undoableInit = {
    past: [],
    present: reducers(undefined, {}),
    future: []
  }

  return (state= undoableInit, action) => {
    const { past, present, future } = state 

    switch(action.type) {
      case "UNDO":
        /*
          撤销: present = past最后一项   present = future第一项, future 
        */
        const prev = past[past.length-1]
        const newPast = past.slice(0, past.length-1)  
        return {
          past: newPast,
          present: prev,
          future: [...future, present]
        }
      case "REDO":
        /*
          未来: past增加present, present = future第一项
        */
        const next = future[0]
        const newFuture = future.slice(1)
        return {
          past: [past, present],
          present: next,
          future: newFuture
        }
      default:
        /*
          其他action：添加
        */
        const newPresent = reducers(present)
        if(newPresent === present) {
          return state
        }
        
        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }

}