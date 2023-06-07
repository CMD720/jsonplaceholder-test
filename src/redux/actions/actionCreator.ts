import {
    SET_POST_ID,
    SET_POSTS,
    SET_USER,
    SET_USER_ID,
    SET_USER_POSTS,
    SET_POST_COMMENTS,
    SET_STATUS,
    SET_STATUS_COMMENTS
} from "../constans";
import {TPost} from "../reducers/postsReducer";
import {TUser} from "../reducers/userReducer";
import {TComment} from "../reducers/commentsReduser";
import {Status} from "../reducers/statusReducer";


export const setPosts = (payload:TPost[]) => ({type:SET_POSTS, payload})
export const setUser = (payload:TUser) => ({type:SET_USER, payload})
export const setUserId = (payload:number) => ({type:SET_USER_ID, payload})
export const setPostId = (payload:number) => ({type:SET_POST_ID, payload})
export const setUserPosts = (payload:TPost[]) => ({type:SET_USER_POSTS, payload})
export const setPostComments = (payload:TComment[]) => ({type:SET_POST_COMMENTS, payload})
export const setStatus = (payload:Status) => ({type:SET_STATUS, payload})
export const setStatusComments = (payload:Status) => ({type:SET_STATUS_COMMENTS, payload})

