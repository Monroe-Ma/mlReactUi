import React from "react"
import Demo from "../Demo"
import IconExample from './icon.example';
import IconShow1 from "./icon.SideShow";

const IconDemo =() => {
  return (
    <Demo code={( require("!!raw-loader!./icon.show1") ).default }>
     <IconShow1 />
    </Demo>)
 }
export default IconDemo 