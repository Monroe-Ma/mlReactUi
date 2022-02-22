import * as  React from "react"
import { scopedClassMaker } from '../helper/classes';
import "./button.scss"
type Props = {
  theme:string
}
const buttonName = scopedClassMaker("jb-button")
const bn =buttonName
const Button:React.FC<Props>=(props)=>{ 
  return (
    <div>
      <button className={bn("primary") } >
      
      </button>
      <button className={bn()} >{ props.children}</button>
    </div>
  )
}
export default Button