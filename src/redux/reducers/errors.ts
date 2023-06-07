import {SET_COMMENTS_ERROR, SET_POST_ERROR, SET_USER_ERROR, SET_USER_POST_ERROR} from '../constans'
import {RootState} from "../store";


type TActionError = {
    type: string
    payload: string
}

export type TInitialState = {
    commentsError: string,
    userError: string,
    postsError: string,
    userPostError:string
}
const initialState: TInitialState = {
    commentsError: '',
    userError: '',
    postsError: '',
    userPostError:''
}

const errorsReducer = (state = initialState, {type, payload}: TActionError) => {
    switch (type) {
        case SET_COMMENTS_ERROR:
            return {
                ...state,
                commentsError: payload
            }
        case SET_POST_ERROR:
            return {
                ...state,
                postsError: payload
            }
        case SET_USER_ERROR:
            return {
                ...state,
                userError: payload
            }
        case SET_USER_POST_ERROR:
            return {
                ...state,
                userPostError: payload
            }
        default:
            return state
    }
}

export const errorsSelector = (state: RootState) => state.errors
export default errorsReducer