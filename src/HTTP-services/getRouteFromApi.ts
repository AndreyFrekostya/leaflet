export const getRouteFromApi=(point1:string, point2:string,point3:string)=>{
    const newPoint1=point1.split(',').reverse().join(',')
    const newPoint2=point2.split(',').reverse().join(',')
    const newPoint3=point3.split(',').reverse().join(',')
    return fetch(`http://router.project-osrm.org/route/v1/driving/${newPoint1};${newPoint2};${newPoint3}?alternatives=true&geometries=polyline&overview=full&annotations=true` )
}