// import { nanoid } from 'nanoid';

export const addFormValues = (value) => ({
    type: 'form/addFormValue',
    payload: value
});

export const delContact = (del) => ({
    type: 'render/removeItem',
    payload: del
});

export const filterContact = (input) => ({
    type: 'filter/inputFilter',
    payload: input
})
