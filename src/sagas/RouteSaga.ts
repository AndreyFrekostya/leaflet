import {put, takeEvery, call} from "redux-saga/effects"
import {getRoute, setRoute} from "../slices/selectedRouteSlice";
import { getRouteFromApi } from "../HTTP-services/getRouteFromApi";
import { PayloadAction } from "@reduxjs/toolkit";
import { setError } from "../slices/ErrorsSlice";



function* fetchRouteWorker(action: PayloadAction<{ point1: string, point2: string, point3: string }>):any {
    const { point1, point2, point3 } = action.payload;
    try{
        const data = yield call(()=>getRouteFromApi(point1, point2,point3))
        const json=yield call(()=>new Promise(res=>res(data.json())))
        yield put(setRoute(json))
    }catch(error){
        yield put(setError('Something went wrong!'))
    }
}

export function* routeWatcher() {
    yield takeEvery(getRoute.type, fetchRouteWorker)
}