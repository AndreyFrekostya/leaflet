import { createSlice } from '@reduxjs/toolkit';
import { DataType } from '../constants/ROUTES';

const initialState:DataType = {
    key:0,
    route: '',
    point1: '',
    point2: '',
    point3: '',
}

const selectedRouteInTableSlice = createSlice({
  name: 'routeInTable',
  initialState,
  reducers: {
    changeRouteInTable(state,action){
      return action.payload
    },
  },
});
export const { changeRouteInTable } = selectedRouteInTableSlice.actions;

export default selectedRouteInTableSlice.reducer;