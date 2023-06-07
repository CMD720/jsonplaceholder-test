import {SET_POSTS, SET_USER_POSTS} from '../constans'
import {RootState} from "../store";

export type TPost = {
    body: string,
    id: number,
    title: string,
    userId: number,
}
type TActionPosts = {
    type: string
    payload: []
}

export type TInitialState = {
    responsePosts:TPost[],
    userPosts:TPost[],
}
const initialState:TInitialState = {
    responsePosts:[],
    userPosts:[],
}

const postsReducer = (state = initialState, {type, payload}:TActionPosts) => {
    switch (type) {
        case SET_POSTS:
            return {
                ...state,
                //развёртываем payload в responsePosts попутно перемешиваем
                responsePosts: [...payload.sort(()=>Math.random()-0.5)]
            }
        case SET_USER_POSTS:
            return {
                ...state,
                userPosts: [...payload]
            }
        default:
            return state
    }
}

export const postSelector = (state:RootState)=>state.posts
export default postsReducer