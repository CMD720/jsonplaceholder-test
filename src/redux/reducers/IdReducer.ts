import {SET_POST_ID, SET_USER_ID} from '../constans'
import {RootState} from "../store";
import {getCartLocalStorage} from "../../utils/getLocalStorage";



type TActionId = {
    type: string
    payload: number
}

export type TInitialState = {
    userIdSelected: number,
    postIdSelected: number
}
//устанавливаем значение при загрузке(перезагрузке) приложения из localStorage
const initValue = getCartLocalStorage()
const initialState: TInitialState = {
    userIdSelected: initValue,
    postIdSelected: 0,
}

const IdReducer = (state = initialState, {type, payload}: TActionId) => {
    switch (type) {
        case SET_USER_ID:
            return {...state, userIdSelected: payload}
        case SET_POST_ID:
            return {...state, postIdSelected: payload}
        default:
            return state
    }
}

export const idSelector = (state:RootState) => state.currentID

export default IdReducer