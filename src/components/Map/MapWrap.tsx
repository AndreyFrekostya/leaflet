import { Card } from 'antd'
import React, { useEffect, useRef } from 'react'
import Map from './Map'
const MapWrap = () => {
  const refCard=useRef<HTMLDivElement>(null)
  return (
    <Card ref={refCard} style={{ width: '100%',textAlign:'center', height:'100%' }} >
      <Map cardElement={refCard}/>
    </Card>
  )
}

export default MapWrap