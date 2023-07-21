import React,{FC, useEffect,RefObject,useState} from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { decode } from '@mapbox/polyline';
import { LatLngTuple } from 'leaflet';
import { useAppSelector } from '../hooks/ToolkitHooks';
import MyPolyline from './MyPolyline';
import { pointMarkerTransform } from '../helpers/pointMarkerTransform';
import MarkersRoute from './MarkersRoute';
interface IMap{
  cardElement: RefObject<HTMLDivElement>;
}
const MyMap:FC<IMap> = ({cardElement}) => {
  const center:LatLngTuple=[51.505, -0.09]
  const selectedRoute=useAppSelector(state=>state.selectedRoute)
  const routeInTable=useAppSelector(state=>state.routeInTable)
  const [polyline, setPolyline] = useState<LatLngTuple[]>([]); 
  const [markersCoords, setMarkersCoords]=useState<LatLngTuple[]>([])
  useEffect(()=>{
    if(selectedRoute.waypoints.length!==0 && selectedRoute.routes.length!==0){
      const newPolyline: LatLngTuple[] = [];
      const arr=decode(selectedRoute.routes[0].geometry)
      const newarr=newPolyline.concat(arr)
      setPolyline((prev)=>newarr);
      //точки для маркеров
      setMarkersCoords((prev)=>pointMarkerTransform(routeInTable.point1,routeInTable.point2,routeInTable.point3))
    }
  },[selectedRoute])

  return (
    <div style={{width:'100%', height:"80vh"}}>
      <MapContainer center={center} zoom={13} style={{width:'100%', height:"80vh"}} >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
       {polyline.length!==0 &&<MyPolyline coords={polyline}/>}
       <MarkersRoute markersCoords={markersCoords}/>
      </MapContainer>
    </div>
  );
};

export default MyMap;