import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "./basic.scss"
const ButtonInfo = () => {

  return (
  <div>
    <Button level="info">信息按钮</Button>
    <Button level="success">成功按钮</Button>
    <Button level="warning">警告按钮</Button>
    <Button level="error">错误按钮</Button>
  </div>
  )
}
 export default ButtonInfo