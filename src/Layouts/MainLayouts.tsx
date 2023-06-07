import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../components/Header";

//описываем родительский и дочерние роуты
const MainLayouts = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export default MainLayouts;

