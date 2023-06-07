import React from 'react';
import {useAppSelector} from "../redux/storeHooks";
import {Alert, Card, Col, Container, Row} from "react-bootstrap";
import {commentSelector} from "../redux/reducers/commentsReduser";
import {statusSelector} from "../redux/reducers/statusReducer";
import Loader from "./Loader/Loader";
import {errorsSelector} from "../redux/reducers/errors";


const Comments = () => {

    const {postComments} = useAppSelector(commentSelector)
    const {statusComments} = useAppSelector(statusSelector)
    const {commentsError} = useAppSelector(errorsSelector)

    //проверяем на ошибку, выводим на экран ошибку или комментарии
    const comments = commentsError
        ? <Container>
            <h1>Error comments loading! Sorry about that.</h1>
            <h5>{commentsError} - (details in console)</h5>
        </Container>
        : postComments.map(comment => (
        <Alert key={comment.id} variant='warning'>
            <h6>{comment.name}</h6>
            <Container className="row-cols-md-1">
                <Row>
                    <Col>{comment.body}</Col>
                </Row>
                <Row className="justify-content-end">
                    {comment.email}
                </Row>
            </Container>
        </Alert>
    ))

    return (
        <Card>
            <Card.Body>
                {
                    statusComments === 'loading'
                        ? <Loader/>
                        : comments
                }
            </Card.Body>
        </Card>
    );
};

export default Comments;