import {all, call, delay, fork, put, select, takeEvery} from '@redux-saga/core/effects'
import {GET_POST_COMMENTS, GET_POSTS, GET_USER, GET_USER_POSTS, SET_COMMENTS_ERROR, SET_POST_ERROR, SET_USER_ERROR, SET_USER_POST_ERROR} from '../constans'
import {getAxiosPosts, getPostsComments, getUser, getUserPosts} from '../../api'
import {setPostComments, setPosts, setStatus, setUser, setUserPosts, setStatusComments} from '../actions/actionCreator'
import {TPost} from "../reducers/postsReducer";
import {TUser} from "../reducers/userReducer";
import {TComment} from "../reducers/commentsReduser";
import {Status} from "../reducers/statusReducer";


//обработанные ошибки выводятся в консоль и в приложение
export function* handlePosts() {
    try {
        //старт запроса - статус загрузки
        yield put(setStatus(Status.LOADING))
        //обнуление ошибки
        yield put({type: SET_POST_ERROR, payload:''})
        //вызов запроса
        const data:TPost[] =yield call(getAxiosPosts)
        //задержка (крутим спинер)
        yield delay(500)
        //отправляем ответ в стор
        yield put(setPosts(data))
        //статус - успешно
        yield put(setStatus(Status.SUCCESS))
    }catch (e) {
        //запрос не выполнен статус - ошибка
        yield put(setStatus(Status.ERROR))
        //инф-ия об ошибке на экран
        yield put({type: SET_POST_ERROR, payload:'sagas/handlePosts - ERROR'})
        //инф-ия об ошибке в консоль
        console.log('sagas/handlePosts - ERROR',e)
    }
}
export function* handleUser() {
    const userid:number = yield select(state => state.currentID.userIdSelected)
    try {
        yield put(setStatus(Status.LOADING))
        yield put({type: SET_USER_ERROR, payload:''})
        const data:TUser = yield call(getUser, userid)
        yield delay(500)
        yield put(setUser(data))
        yield put(setStatus(Status.SUCCESS))
    }catch (e) {
        yield put(setStatus(Status.ERROR))
        yield put({type: SET_USER_ERROR, payload:'sagas/handleUser - ERROR'})
        console.log('sagas/handleUser - ERROR', e)
    }
}
export function* handleUserPosts() {
    const userid:number = yield select(state => state.currentID.userIdSelected)
    try {
        yield put(setStatus(Status.LOADING))
        yield put({type: SET_USER_POST_ERROR, payload:''})
        const data:TPost[] = yield call(getUserPosts, userid)
        yield delay(500)
        yield put(setUserPosts(data))
        yield put(setStatus(Status.SUCCESS))
    }catch (e) {
        yield put(setStatus(Status.ERROR))
        yield put({type: SET_USER_POST_ERROR, payload:'sagas/handleUserPosts - ERROR'})
        console.log('sagas/handleUserPosts - ERROR',e)
    }
}
export function* handlePostsComments() {
    const postId:number = yield  select(state => state.currentID.postIdSelected)
    try {
        yield put(setStatusComments(Status.LOADING))
        yield put({type: SET_COMMENTS_ERROR, payload:''})
        const data:TComment[] = yield call(getPostsComments, postId)
        yield put(setPostComments(data))
        yield delay(500)
        yield put(setStatusComments(Status.SUCCESS))
    }catch (e) {
        yield put(setStatusComments(Status.ERROR))
        yield put({type: SET_COMMENTS_ERROR, payload:'sagas/handlePostsComments - ERROR'})
        console.log('sagas/handlePostsComments - ERROR',e)
    }
}

export function* watchPostsSaga() {
    yield takeEvery(GET_POSTS, handlePosts);
}
export function* watchUserSaga() {
    yield takeEvery(GET_USER, handleUser);
}
export function* watchUserPostsSaga() {
    yield takeEvery(GET_USER_POSTS, handleUserPosts);
}
export function* watchPostCommentsSaga() {
    yield takeEvery(GET_POST_COMMENTS, handlePostsComments);
}

export default function* rootSaga() {
    yield all([
        fork(watchPostsSaga),
        fork(watchUserSaga),
        fork(watchUserPostsSaga),
        fork(watchPostCommentsSaga)
    ]);
}