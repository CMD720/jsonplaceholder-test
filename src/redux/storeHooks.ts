import {AppDispatch, RootState} from "./store";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";


//создаём кастомные хуки для комфортной работы с типами
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
