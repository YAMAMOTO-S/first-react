// reducerを結合する関数
import { combineReducers } from 'redux'
import count from './count'

// ここで結合、当然reducerが増えれば下に増えていく
export default combineReducers({ count })