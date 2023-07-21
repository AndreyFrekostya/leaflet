import { LatLngTuple } from 'leaflet'
import React,{FC} from 'react'
import { Marker, Popup } from 'react-leaflet'
interface IMyMarker{
    coords:LatLngTuple
}
const MyMarker:FC<IMyMarker> = ({coords}) => {
  return (
    <>
      <Marker position={coords}>
      <Popup>
        {coords[0]},<br/>{coords[1]}
      </Popup>
    </Marker>
    </>
  )
}

export default MyMarker;