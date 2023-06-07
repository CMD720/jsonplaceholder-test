import {SET_USER} from '../constans'
import {RootState} from "../store";

export type TUser = {
    address: {
        city: string,
        geo: {
            lat: string,
            lng: string,
        },
    },
    company: {
        bs: string,
        catchPhrase: string,
        name: string,
    },
    email:string,
    id:number,
    name:string,
    phone:string,
    username:string,
    website:string,
}
type TActionUser = {
    type: string
    payload: TUser
}

export type TInitialState = {
    currentUser:TUser,
}
const initialState:TInitialState = {
    currentUser:{
        address:{
            city:"",
            geo:{
                lat:"",
                lng:"",
            },
        },
        company:{
            bs:"",
            catchPhrase:"",
            name:"",
        },
        email:"",
        id:0,
        name:"",
        phone:"",
        username:"",
        website:"",
    },
}

const userReducer = (state = initialState, {type, payload}:TActionUser) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                currentUser: payload
            }
        default:
            return state
    }
}

export const userSelector = (state:RootState) => state.user.currentUser
export default userReducer