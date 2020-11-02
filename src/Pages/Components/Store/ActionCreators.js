import { GET_USER_INF, DELETE_REGISTER_INF, LOG_OUT, PASSWORD_CHANGE, HISTORY_URL, QUESTION, QUESTION_TYPE } from './ActionType'


export const handleGetUserInfAction = (userInfo, value) => {
    return {
        type: GET_USER_INF,
        userInfo,
        value
    }
}
export const handleUserLogout = () => {
    return {
        type: LOG_OUT
    }
}

