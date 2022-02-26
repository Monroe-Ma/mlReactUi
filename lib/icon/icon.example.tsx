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
     <div className="jb-anchor">
       <h2>API</h2>
    </div>
    <table className="jb-table">
      <thead className="jb-thead">
        <tr>
          <th>参数</th>
          <th>说明</th>
          <th>类型</th>
          <th>默认值</th>
        </tr>
      </thead>
      <tbody className="jb-tbody">
        <tr>
          <td>className</td>  
          <td>设置图标的样式名</td>  
          <td>string</td>
          <td>-</td>  
        </tr>
         <tr>
          <td>style</td>  
          <td>设置图标的样式，例如 fontSize 和 color</td>  
          <td>CSSProperties</td>
          <td>-</td>  
        </tr>
        <tr>
          <td>fill</td>  
          <td>设置图标的yanse</td>  
          <td>string</td>
          <td>-</td>  
        </tr>
      </tbody>
    </table>
  </div>

}
export default IconExample