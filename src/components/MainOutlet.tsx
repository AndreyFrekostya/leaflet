import { Col, Row } from 'antd'
import React,{useEffect} from 'react'
import Table from './Table'
import MapWrap from './MapWrap'
import { useAppSelector } from '../hooks/ToolkitHooks'
import Error from './Error'

const MainOutlet = () => {
  const error=useAppSelector(state=>state.errors)
  return (
    <>
      <Row gutter={[{ xs: 8, sm: 16, md: 24, lg: 32 },3]} justify={"center"} style={{height:'81vh',marginTop:'20px'}}>
        <Col  xs={23} sm={23} md={9} lg={9}  >
            <Table/>
        </Col>
        <Col  xs={23} sm={23} md={14} lg={14} >
            <MapWrap/>
        </Col>
      </Row>
      {error!=='' && <Error message={error}/>}
    </>
  )
}

export default MainOutlet