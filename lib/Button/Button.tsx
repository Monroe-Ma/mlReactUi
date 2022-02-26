import * as  React from "react"
import {scopedClassMaker } from '../helper/classes';
import { Fragment } from "react"
import "./button.scss"

type Props = {
  theme?: string
  size?: string
  level?: string
  disabled?: boolean
  loading?: boolean
  className?:string
  onClick?:() => void
} & React.HTMLAttributes<HTMLButtonElement>
const Button: React.FC<Props> = (props) => { 
   const buttonName = scopedClassMaker("jb-button")
   const bn = buttonName
   const {className, theme,size,level, children, ...otherProps } = props;
  return (
  <Fragment>
      <button className={bn({'':true},{extra: className })}
        {...otherProps}  >
        {props.children}</button>
    </Fragment>
  )
}
export default Button