import React from "react"
import Demo from "../Demo"
import IconExample from './icon.example';

// const x =
const IconDemo =() => {
  return (
    <Demo code={( require("!!raw-loader!./icon.example.tsx") ).default }>
      <IconExample/>
    </Demo>)
 }
export default IconDemo 