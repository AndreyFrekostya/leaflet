import { Alert } from 'antd'
import React,{FC} from 'react'
interface IError{
    message:string
}
const Error:FC<IError> = ({message}) => {
  return (
    <>
      <Alert message={message} type="error" style={{position:'absolute',top:'20px',right:'20px'}}/>
    </>
  )
}

export default Error