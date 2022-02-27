import React from "react"
import Demo from "../Demo"
import IconExample from './IconExample';
import IconShow1 from "./IconSideShow";

const IconDemo =() => {
  return (
    <Demo code={( require("!!raw-loader!./icon.show1") ).default }>
     <IconShow1 />
    </Demo>)
 }
export default IconDemo 