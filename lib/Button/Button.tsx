import * as  React from "react"
// import {scopedClassMaker} from '../helper/classes';
import { Fragment } from "react"
import "./button.scss"

type Props = {
  ordinary?:string
  theme?: string
  size?: string
  level?: string
  disabled?: boolean
  loading?: boolean
  className?:string
  onClick?:() => void
} & React.HTMLAttributes<HTMLButtonElement>
  // const classes ={`jb-theme-${ props.theme}`}

const Button: React.FC<Props> = (props) => { 
  //  const buttonName = scopedClassMaker("jb-button")
  // const bn = buttonName
  const { className, size, level, children, ...otherProps } = props;
  const x = (props:Props) => {
    if (props.theme) {
      return `jb-button-${props.theme}`
    } else if (props.size) {
      return `jb-button-${props.size}`
    } else if (props.level) {
      return `jb-button-${props.level}`
    } else (props.ordinary)
    { 
      `jb-button`
    }
    
  }
  // console.log("------",x(props));
  
  // <div className={ly({ '': true, hasAside }, { extra: className })} {...rest}>
  // [`joinbe-theme-${theme}`]: theme,
  // [`joinbe-size-${size}`]: size,
  // [`joinbe-level-${level}`]: level,
  // theme={`jb-theme-${theme}`}
  // size={`jb-size-${size}`}
  // level={`jb-level-${level}`}
  return (
  <Fragment>
      <button className={ x(props)}
        {...otherProps}  >
        {children}</button>
    </Fragment>
  )
}
export default Button