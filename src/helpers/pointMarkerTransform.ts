import { LatLngTuple } from "leaflet";

export function pointMarkerTransform(point1:string, point2:string,point3:string):LatLngTuple[]{
    const newPoint1=point1.split(',')
    const newPoint2=point2.split(',')
    const newPoint3=point3.split(',')
    const latlngArr=[newPoint1,newPoint2,newPoint3]
    let result:LatLngTuple[]=[]
    for (let i=0; i<latlngArr.length; i++){
        let iterrated=latlngArr[i]
        let numbersArr=[]
        for (let j=0; j<iterrated.length;j++){
            numbersArr.push(Number(iterrated[j]))
        }
        result=[...result,numbersArr as LatLngTuple]
    }
    return result
}