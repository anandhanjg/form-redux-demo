import {createStore,combineReducers,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {reducer as fReducer, startAsyncValidation} from 'redux-form';
import { act } from 'react-dom/test-utils';
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) || compose;


const initialState={};
export const actionTypes={
    basic:{
        store:"STORE"
    }
}

export const dataHandler=(state=initialState,action)=>{
   const {basic}=actionTypes;
    switch(action.type){
        case basic.store:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const storeData = obj=>({
    type:actionTypes.basic.store,
    payload:obj
});


const rootReducer=combineReducers({
    form:fReducer,
    data:dataHandler
});

const store = createStore (
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);




export default store;


