import { createSlice } from '@reduxjs/toolkit';
const initialState:string = ''

const errorsSlice = createSlice({
  name: 'errors',
  initialState,
  reducers: {
    setError(state, action){
      return action.payload
    }
  },
});
export const { setError } = errorsSlice.actions;

export default errorsSlice.reducer;