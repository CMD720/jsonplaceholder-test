import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Container} from "react-bootstrap";
import {GET_USER, GET_USER_POSTS} from "../redux/constans";
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {userSelector} from "../redux/reducers/userReducer";
import {statusSelector} from "../redux/reducers/statusReducer";
import {postSelector} from "../redux/reducers/postsReducer";
import Post from "../components/Post";
import Loader from "../components/Loader/Loader";
import {errorsSelector} from "../redux/reducers/errors";
import {idSelector} from "../redux/reducers/IdReducer";

const User = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const user = useAppSelector(userSelector)
    const {userError, userPostError} = useAppSelector(errorsSelector)
    const {status} = useAppSelector(statusSelector)
    const {userPosts} = useAppSelector(postSelector)

    //проверяем на ошибку, выводим на экран ошибку или посты юзера
    const drawPosts = userPostError
        ? <Container>
            <h1>Error posts loading! Sorry about that.</h1>
            <h5>{userPostError}</h5>
        </Container>
        : userPosts.map((post) => (<Post key={post.id} post={post}/>))

    //проверяем на ошибку, выводим на экран ошибку или данные юзера
    const userData = userError
        ? <Container>
            <h1>Error User loading! Sorry about that.</h1>
            <h5>{userError} - (details in console)</h5>
        </Container>
        : <>
            <h1>{user?.username}</h1>
            <h6>userID - {user?.id}</h6>
            <h6>name - {user?.name}</h6>
            <h6>phone - {user?.phone}</h6>
            <h6>email - {user?.email}</h6>
            <h6>website - {user?.website}</h6>
        </>

    useEffect(() => {
        //запрос на данные пользователя, посты пользователя, сохранение userId в localStorage
        dispatch({type: GET_USER, payload: 1})
        dispatch({type: GET_USER_POSTS, payload: []})
    }, [dispatch])

    return (
        <>
            {   //условная отрисовка, следим за статусом отображаем лоадер пока не получим ответ от запроса
                status === 'loading'
                    ? <Loader/>
                    : <Container>
                        {userData}
                        <Button className="mb-3" onClick={() => navigate('/')}>Go Back</Button>
                        {drawPosts}
                    </Container>
            }
        </>
    );
};

export default User;