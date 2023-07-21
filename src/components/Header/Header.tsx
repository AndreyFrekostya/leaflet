import React from 'react'
import { Divider, Typography } from 'antd';

const { Title  } = Typography;
const Header = () => {
  return (
    <>
        <Title level={2} style={{marginLeft:'0.3em',marginBottom:'0'}}>Route Map</Title>
        <Divider style={{margin:'8px'}}/>
    </>
  )
}

export default Header