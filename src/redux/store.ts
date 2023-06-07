import {combineReducers, legacy_createStore, compose, applyMiddleware,} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas";
import postsReducer from "./reducers/postsReducer";
import userReducer from "./reducers/userReducer";
import IdReducer from "./reducers/IdReducer";
import commentsReducer from "./reducers/commentsReduser";
import statusReducer from "./reducers/statusReducer";
import errorsReducer from "./reducers/errors";

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(sagaMiddleware),

    // Required! Enable Redux DevTools with the monitors you chose
    // I don't understand how to connect DevTools. But I will!
    // DevTools.instrument()
);


const rootReducer = combineReducers({
    errors: errorsReducer,
    statusType:statusReducer,
    commentsPost: commentsReducer,
    currentID:IdReducer,
    user:userReducer,
    posts: postsReducer,
})


const store = legacy_createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default store

//получаем типы с помощью которых будем взаимодействовать с store
export type RootState = ReturnType<typeof rootReducer>  //тип состояния
export type AppDispatch = typeof store.dispatch  //тип dispatch для предотвращения отправки неопределённых экшенов