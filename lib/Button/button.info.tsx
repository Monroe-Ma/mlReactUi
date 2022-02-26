import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "./basic.scss"
const ButtonInfo = () => {
const buttonName = scopedClassMaker("jb-button")
const bn = buttonName
  return (
  <div>
    <Button level={bn("info")}>信息按钮</Button>
    <Button level={bn("success")}>成功按钮</Button>
    <Button level={bn("warning")}>警告按钮</Button>
    <Button level={bn("error")}>错误按钮</Button>
  </div>
  )
}
 export default ButtonInfo