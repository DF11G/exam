import { GET_USER_INF, DELETE_REGISTER_INF } from './ActionType'


export const handleGetUserInfAction = (value) => {
    return {
        type: GET_USER_INF,
        value
    }
}
export const handleDeleteRegisterInf = () => {
    return {
        type: DELETE_REGISTER_INF,
    }
}