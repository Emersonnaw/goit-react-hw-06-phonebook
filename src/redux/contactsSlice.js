import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

export const contactsSlice = createSlice({
    name: 'form',
    initialState: {contacts:[]},
    reducers:{
        addFormValue(state, action) {
            state.contacts.push({...action.payload, id: nanoid() })  
        },
        deleteContacts (state, action){
             state.contacts = state.contacts.filter(contact => contact.id !== action.payload);
        },
    },
});

export const { addFormValue, deleteContacts } = contactsSlice.actions;

