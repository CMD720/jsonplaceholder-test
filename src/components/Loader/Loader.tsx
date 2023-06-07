import React from 'react';
import {Spinner} from "react-bootstrap";

const Loader = () => {
    return (
        <div style={{height:'calc(100vh - 145px)'}} className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loader;