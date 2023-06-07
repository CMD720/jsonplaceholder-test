import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import MainLayouts from "./Layouts/MainLayouts";
import Posts from "./Pages/Posts";
import './App.scss'
import Loader from "./components/Loader/Loader";

//Lazy loading - импортируем компоненты роутов отдельными чанками, подгружаем при обращении к роуту
// (да для такого приложения это не нужно, но на больших проектах пригодится)
const About = React.lazy(() => import(/*webpackChunkName: "About"*/ './Pages/About'));
const User = React.lazy(() => import(/*webpackChunkName: "User"*/ './Pages/User'));
const NotFound = React.lazy(() => import(/*webpackChunkName: "NotFound"*/ './Pages/NotFound'));

const App = () => {
    return (
        //этот loader видим во время загрузки чанка
        <Suspense fallback={<Loader/>}>
            <Routes>
                <Route path="/" element={<MainLayouts/>}>
                    <Route path="/" element={<Posts/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/user/:id" element={<User/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;