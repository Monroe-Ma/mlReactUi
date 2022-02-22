import * as  React from "react"
import { ButtonHTMLAttributes } from "react";
import { Fragment } from "react"
import {classes } from '../helper/classes';
import "./button.scss"

type Props = {
  theme?: string
  size?: string
  level?: string
  disabled?: boolean
  loading?: boolean
  onClick?:() => void
} 
const Button: React.FC<Props> = (props) => { 
  const { theme,size,level, children, ...otherProps } = props;
  return (
  <Fragment>
      <button
        className={classes(theme, size, level)}
        {...otherProps}  >
        {props.children}</button>
    </Fragment>
  )
}
export default Button