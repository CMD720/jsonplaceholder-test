import {SET_POSTS, SET_POST_COMMENTS, SET_USER_POSTS} from '../constans'
import {RootState} from "../store";

export type TComment = {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string,
}
type TActionComments = {
    type: string
    payload: []
}

export type TInitialState = {
    postComments:TComment[],

}
const initialState:TInitialState = {
    postComments:[],
}

const commentsReducer = (state = initialState, {type, payload}:TActionComments) => {
    switch (type) {
        case SET_POST_COMMENTS:
            return {
                ...state,
                postComments: [...payload]
            }
        default:
            return state
    }
}

export const commentSelector = (state:RootState) => state.commentsPost
export default commentsReducer