import { LatLngTuple } from 'leaflet'
import React,{useState,useEffect,FC} from 'react'
import { useAppSelector } from '../hooks/ToolkitHooks';
import { Polyline, useMap } from 'react-leaflet';
interface IMyPolyLine{
  coords:LatLngTuple[]
}
const MyPolyline:FC<IMyPolyLine> = ({coords}) => {
  const map=useMap()
  useEffect(()=>{
      map.fitBounds(coords)
  },[coords])
  return (
    <>
      <Polyline positions={coords}/>
    </>
  );
};

export default MyPolyline