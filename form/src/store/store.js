import {createStore,combineReducers} from 'redux'
import usersReducer from './reducers/userReducer'

const reducers =combineReducers({
    users: usersReducer ,
})

const store = createStore(reducers)

store.subscribe(() => {
    console.log('state:' ,store.getState())
})
export {store}