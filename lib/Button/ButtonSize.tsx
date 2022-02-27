import React from "react"
import Button from "./Button"
import "./basic.scss"
const ButtonSize = () => {
  return (
  <div>
   <Button size="small">小按钮</Button>
   <Button theme='ordinary'>普通按钮</Button>
    <Button size="big">大按钮</Button>
  </div>
  )
}
 export default ButtonSize