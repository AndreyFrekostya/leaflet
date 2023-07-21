import {put, takeEvery, call} from "redux-saga/effects"
import {getRoute, setRoute} from "../slices/selectedRouteSlice";
import { getRouteFromApi } from "../HTTP-services/getRouteFromApi";
import { PayloadAction } from "@reduxjs/toolkit";



function* fetchRouteWorker(action: PayloadAction<{ point1: string, point2: string, point3: string }>):any {
    const { point1, point2, point3 } = action.payload;
    const data = yield getRouteFromApi(point1, point2,point3).then(res=>res.json())
    yield put(setRoute(data))
}

export function* routeWatcher() {
    yield takeEvery(getRoute.type, fetchRouteWorker)
}