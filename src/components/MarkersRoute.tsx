import { LatLngTuple } from 'leaflet'
import React,{FC} from 'react'
import MyMarker from './MyMarker'
interface IMarkersRoute{
  markersCoords:LatLngTuple[]
}
const MarkersRoute:FC<IMarkersRoute> = ({markersCoords}) => {
  return (
    <>
      {markersCoords.map((coord,index)=>(
        <MyMarker key={index} coords={coord}/>
      ))}
    </>
  )
}

export default MarkersRoute