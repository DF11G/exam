import { CHANGE_LOGIN } from './ActionType'

const dataState = {
    userName: '',
    password: ''
}

export default (state = dataState, action) => {
    if (action.type === CHANGE_LOGIN) {
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.userName=action
    }
}