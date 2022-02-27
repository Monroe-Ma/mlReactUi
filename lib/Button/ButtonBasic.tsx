import React from "react"
import Button from "./button"
import "./basic.scss"
const ButtonBasic = () => {

  return (
  <div>
   <Button >普通按钮</Button>
   <Button theme="primary">颜色按钮</Button>
   <Button theme="link">链接按钮</Button>
   <Button theme="text">文字按钮</Button>
  </div>
  )
}
 export default ButtonBasic