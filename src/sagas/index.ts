import {all} from "redux-saga/effects"
import {routeWatcher} from './RouteSaga'

export function* rootWatcher() {
    yield all([routeWatcher()]) //I have prepared a template in order to add new watchers
}