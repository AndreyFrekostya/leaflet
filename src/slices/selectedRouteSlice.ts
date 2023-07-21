import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DataType } from '../constants/ROUTES';
interface IWayPoints{
  hint:string,
  distance:number,
  name:string,
  location:number[]
}
interface IGeometry{
  geometry:string
}
interface IRouteFromApi{
  code:string,
  routes:IGeometry[]
  waypoints:IWayPoints[]
}
const initialState:IRouteFromApi = {
  code:'',
  routes:[],
  waypoints:[
    {
      hint:'',
      distance:0,
      name:'',
      location:[]
    }
  ]
}

const selectedRouteSlice = createSlice({
  name: 'selectedRoute',
  initialState,
  reducers: {
    setRoute(state,action){
      return action.payload
    },
    getRoute(state,action){

    }
  },
});
export const { setRoute,getRoute } = selectedRouteSlice.actions;

export default selectedRouteSlice.reducer;