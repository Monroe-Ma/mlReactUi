import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "./basic.scss"
const ButtonBasic = () => {
const buttonName = scopedClassMaker("jb-button")
const bn = buttonName
  return (
  <div>
   <Button theme={bn({'': true })}>普通按钮</Button>
   <Button theme={bn("primary")}>颜色按钮</Button>
   <Button theme={bn("link")}>链接按钮</Button>
   <Button theme={bn("text")}>文字按钮</Button>
  </div>
  )
}
 export default ButtonBasic