import React, { Fragment, HTMLAttributes } from "react"
import { scopedClassMaker } from "../helper/classes"
type Props = {

} & HTMLAttributes<HTMLElement>
 const layoutName = scopedClassMaker("jb-layout")
const ly = layoutName
const Footer: React.FC<Props> = (props) => {
   const { className, ...rest }=props
return <Fragment>
<div className={[ly("footer"),className].join(" ")} {...rest}>footer</div>
  </Fragment>
}
export default Footer