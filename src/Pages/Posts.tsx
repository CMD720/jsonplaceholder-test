import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../redux/storeHooks";
import {Container} from "react-bootstrap";
import {GET_POSTS} from "../redux/constans";
import Post from "../components/Post";
import Loader from "../components/Loader/Loader";
import {statusSelector} from "../redux/reducers/statusReducer";
import {errorsSelector} from "../redux/reducers/errors";

const Posts = () => {

    const dispatch = useAppDispatch()
    const posts = useAppSelector(state => state.posts.responsePosts)
    const {status} = useAppSelector(statusSelector)
    const {postsError} = useAppSelector(errorsSelector)


    //Отрисовываем посты
    const drawPosts = postsError
        ? <Container>
            <h1>Error posts loading! Sorry about that.</h1>
            <h5>{postsError} - (details in console)</h5>
          </Container>
        : posts.map((post) => (
            <Post key={post.id} post={post}/>
            ))

    useEffect(() => {
        dispatch({type: GET_POSTS, payload: []})
    }, [dispatch])

    return (
        <Container>
            <h1>POSTS</h1>
            {
                status === 'loading'
                    ? <Loader/>
                    : drawPosts
            }
        </Container>
    );
};

export default Posts;