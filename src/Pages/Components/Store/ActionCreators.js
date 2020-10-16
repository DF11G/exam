import { GET_USER_INF, DELETE_REGISTER_INF, LOG_OUT, PASSWORD_CHANGE, HISTORY_URL, QUESTION, QUESTION_TYPE } from './ActionType'


export const handleGetUserInfAction = (name, value) => {
    return {
        type: GET_USER_INF,
        name,
        value
    }
}
export const handleUserLogout = () => {
    return {
        type: LOG_OUT
    }
}
export const handleDeleteRegisterInf = () => {
    return {
        type: DELETE_REGISTER_INF,
    }
}
export const handleChangePassword = () => {
    return {
        type: PASSWORD_CHANGE
    }
}
export const handleHistoryURL = (url) => {
    return {
        type: HISTORY_URL,
        url
    }
}
export const handleQuestion = (value) => {
    return {
        type: QUESTION,
        value
    }
}
export const handleQuestionType = (value) => {
    return {
        type: QUESTION_TYPE,
        value
    }
}

