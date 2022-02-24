import React, { Fragment, HTMLAttributes } from "react"
import { scopedClassMaker } from "../helper/classes"
type Props = {

} & HTMLAttributes<HTMLElement>
 const layoutName = scopedClassMaker("jb-layout")
const ly = layoutName
const Content: React.FC<Props> = (props) => {
   const { className, ...rest }=props
  return <Fragment>
     <div className={[ly("content"),className].join(" ")} {...rest}> {props.children}</div>
  </Fragment>
}
export default Content