import { Col, Row } from 'antd'
import React from 'react'
import Table from './Table'
import MapWrap from './MapWrap'

const MainOutlet = () => {
  return (
    <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },3]} justify={"center"} style={{height:'81vh',marginTop:'20px'}}>
        <Col  xs={23} sm={23} md={9} lg={9}  >
            <Table/>
        </Col>
        <Col  xs={23} sm={23} md={14} lg={14} >
            <MapWrap/>
        </Col>
    </Row>
  )
}

export default MainOutlet