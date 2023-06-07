import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

const NotFound = () => {

    const navigate = useNavigate()

    return (
        <Container>
            <h1>NOT FOUND =)</h1>
            <Button className="m-5" onClick={() => navigate('/')}>Go Back</Button>
        </Container>
    );
};

export default NotFound;