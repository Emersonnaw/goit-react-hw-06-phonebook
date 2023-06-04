import { createStore } from 'redux';
import { devToolsEnhancer } from "@redux-devtools/extension";
import { nanoid } from 'nanoid';
const initialState = {
    contacts: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: "",
};

const rootReducer = (state = initialState, action) => {
    console.log(state);

    switch (action.type) {
        case 'form/addFormValue':
            return {
                ...state,
                contacts: [{ ...action.payload, id: nanoid() }, ...state.contacts]
            };
        case 'render/removeItem':
            return {
                ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
            };
        case 'filter/inputFilter':
            return {
                ...state,
                filter: action.payload
            };
    
        default:
            return state;
    };
    
};
const enchancer = devToolsEnhancer();

export const store = createStore(rootReducer, enchancer);