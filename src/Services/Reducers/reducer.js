import {ADD_TO_CART} from '../Constant';

const initialState={
    cartData:[]
}


export default function cardItem(State=[],action){
    switch(action.type){
        case ADD_TO_CART:
            // console.warn('reducer',action);
            return[
                ...State,
                {cardData:action.data}
    ]
            break;
            default:
                return State


    }
}