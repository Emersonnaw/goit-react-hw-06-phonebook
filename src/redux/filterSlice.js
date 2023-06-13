import { createSlice } from "@reduxjs/toolkit";

const filterInitialState ='';
export const filterSlice = createSlice({
    name: 'filter',
    initialState: filterInitialState,
    reducers: {
        inputFilter(state, action) {
          return  state = action.payload;                       
        },
    },
});

export const { inputFilter} = filterSlice.actions;
