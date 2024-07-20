import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ContactState {
    fname : string, 
    lname : string , 
    email : string, 
    message : string
}

const initialState: ContactState = {
    fname : '',
    lname : '',
    email : '',
    message : ''
}

export const contactDataSlice = createSlice({
    name : 'contact',
    initialState,
    reducers: {
        setFname(state , action : PayloadAction<string>){
            state.fname = action.payload;
        },
        setLname(state , action : PayloadAction<string>){
            state.lname = action.payload;
        },
        setEmail(state , action : PayloadAction<string>){
            state.email = action.payload;
        },
        setMessage(state , action : PayloadAction<string>){
            state.message = action.payload;
        },
        resetContactForm(state){
            state.fname = '',
            state.lname = '',
            state.email = '',
            state.message = ''
        }


    }
})


export const { setFname , setLname , setEmail , setMessage , resetContactForm } = contactDataSlice.actions

export default contactDataSlice.reducer;