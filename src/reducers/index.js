// reducerを結合する関数
import { combineReducers } from 'redux'
import events from './events'

// ここで結合、当然reducerが増えれば下に増えていく
export default combineReducers({ events })