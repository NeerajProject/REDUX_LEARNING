import { createStore } from 'redux'
 const reducerFn = (state={counter:99},action) =>{

    // sychronous Function
    // we should not mutate the original state
    if (action.type==='INC'){

        return {counter: state.counter + 1}
    }

    if (action.type==='DIC'){

        return {counter: state.counter - 1}
    }
    return state

 }
 const store = createStore(reducerFn);
 export default store