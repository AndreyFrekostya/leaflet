import React from 'react'
import {  DataType, columns, dataSource } from '../../constants/ROUTES'
import { Table as TableData } from 'antd';
import { useAppDispatch } from '../../hooks/ToolkitHooks';
import { getRoute } from '../../slices/selectedRouteSlice';
import { changeRouteInTable } from '../../slices/selectedRouteInTableSlice';
const Table = () => {
    const dispatch=useAppDispatch()
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            dispatch(getRoute({point1:selectedRows[0].point1, point2:selectedRows[0].point2, point3:selectedRows[0].point3}))
            dispatch(changeRouteInTable({key:selectedRows[0].key,route:selectedRows[0].route,point1:selectedRows[0].point1, point2:selectedRows[0].point2, point3:selectedRows[0].point3}))
        },    
    };
  return (
    <TableData 
        dataSource={dataSource} 
        columns={columns} 
        pagination={false}
        rowSelection={{
            type: 'radio',
            ...rowSelection
        }}
        size='middle'
        scroll={{ x: true }}
    />
  )
}

export default Table