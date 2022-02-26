import React from "react"
import Demo from "../Demo"
import IconSideShow from "./icon.SideShow"
import IconColorShow from "./icon.Color"

const IconExample = () => { 
  return <div>
    <h1 className="jb-title">Icon 示例</h1>
    
     <div className="jb-anchor">
       <h2>面性ICON</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./icon.SideShow") ).default }>
        <IconSideShow />
      </Demo>
    </div>
    
    <div className="jb-anchor">
       <h2>双色ICON</h2>
    </div>
      <div className="jb-example">
          <Demo code={( require("!!raw-loader!./icon.Color") ).default }>
        <IconColorShow />
      </Demo>
      </div>
  </div>

}
export default IconExample