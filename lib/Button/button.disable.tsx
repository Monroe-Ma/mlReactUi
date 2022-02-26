import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "./basic.scss"
const ButtonDisable = () => {
const buttonName = scopedClassMaker("jb-button")
const bn = buttonName
  return (
  <div>
   <Button theme={bn("primary")} disabled >禁用多色按钮</Button>
   <Button theme={bn("button")} disabled>禁用按钮</Button>
   <Button theme={bn("link")} disabled>禁用链接按钮</Button>
   <Button theme={bn("text")} disabled>禁用文字按钮</Button>
  </div>
  )
}
 export default ButtonDisable