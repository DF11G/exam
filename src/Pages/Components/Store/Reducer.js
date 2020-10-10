import Register from '../Register'
import { GET_USER_INF, DELETE_USER_REGISTER } from './ActionType'

const dataState = {
    userName: '',//登录用户名
    userPassword: '',//登录用户密码
    registerName: '',//注册用户名
    registerPassword: '',//注册用户密码
    registerType: ''//注册用户类型
}

export default (state = dataState, action) => {
    if (action.type === GET_USER_INF) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.userName = action.value
        newState.userPassword = ''
        console.log(newState.userName)
        return newState
    }
    return state
}