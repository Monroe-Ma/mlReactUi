import * as  React from "react"
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


const Button: React.FC<Props> = (props) => { 
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
  return (
  <Fragment>
      <button className={ x(props)}
        {...otherProps}  >
        {children}</button>
    </Fragment>
  )
}
export default Button