import React from "react"
import Button from "./Button"
import "./basic.scss"
const ButtonBasic = () => {

  return (
  <div>
   <Button theme="ordinary"  >普通按钮</Button>
   <Button theme="primary">颜色按钮</Button>
   <Button theme="link">链接按钮</Button>
   <Button theme="text">文字按钮</Button>
  </div>
  )
}
 export default ButtonBasic