import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "./basic.scss"
const ButtonSize = () => {
const buttonName = scopedClassMaker("jb-button")
const bn = buttonName
  return (
  <div>
   <Button size={bn("small")}>小按钮</Button>
   <Button size={bn({'': true })}>普通按钮</Button>
    <Button size={bn("big")}>大按钮</Button>
  </div>
  )
}
 export default ButtonSize