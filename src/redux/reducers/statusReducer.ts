import {SET_STATUS, SET_STATUS_COMMENTS} from "../constans";
import {RootState} from "../store";


//status - отслеживание статуса запроса к api
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error'
}
type TActionStatus = {
    type:string
    payload:Status
}
export type TInitialState = {
    status:Status,
    statusComments:Status
}
const  initialState = {
    status:Status.LOADING,
    statusComments:Status.LOADING
}

const statusReducer = (state = initialState, {type, payload}:TActionStatus) => {
    switch (type) {
        case SET_STATUS:
            return {
                ...state,
                status: payload
            }
        case SET_STATUS_COMMENTS:
            return {
                ...state,
                statusComments: payload
            }
        default:
            return state
    }
}

export const statusSelector = (state:RootState) => state.statusType
export default statusReducer