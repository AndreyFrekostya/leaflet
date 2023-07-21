import { LatLngTuple } from 'leaflet'
import React,{FC} from 'react'
import { Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import iconMarker from "leaflet/dist/images/marker-icon.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
L.Icon.Default.mergeOptions({
  iconRetinaUrl: iconRetina,
  iconUrl: iconMarker,
  shadowUrl: iconShadow,
});
interface IMyMarker{
    coords:LatLngTuple,
    dot:number
}
const MyMarker:FC<IMyMarker> = ({coords,dot}) => {
  return (
    <>
      <Marker position={coords}>
      <Popup>
        {coords[0]},<br/>{coords[1]},<br/> Точка {dot}
      </Popup>
    </Marker>
    </>
  )
}

export default MyMarker;