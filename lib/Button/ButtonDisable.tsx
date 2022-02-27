import React from "react"
import Button from "./Button"
import "./basic.scss"
const ButtonDisable = () => {
  return (
  <div>
   <Button theme="primary" disabled >禁用多色按钮</Button>
   <Button theme="button" disabled>禁用按钮</Button>
   <Button theme="link" disabled>禁用链接按钮</Button>
   <Button theme="text" disabled>禁用文字按钮</Button>
  </div>
  )
}
 export default ButtonDisable