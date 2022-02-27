import React from "react"
import "../demo.scss"
import Demo from "../Demo";
import ButtonBasic from "./ButtonBasic";
import ButtonSize from "./ButtonSize";
import ButtonInfo from "./ButtonInfo";
import ButtonDisable from "./ButtonDisable";
const ButtonExample = () => { 
  return <div>
    <h1 className="jb-title">Button 示例</h1>
    <div className="jb-anchor">
       <h2>基本按钮</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./ButtonBasic") ).default }>
        <ButtonBasic />
      </Demo>
    </div>
    
    <div className="jb-anchor">
       <h2>按钮尺寸</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./ButtonSize") ).default }>
        <ButtonSize />
      </Demo>
    </div>

     <div className="jb-anchor">
        <h2>按钮类型</h2>
    </div>
  
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./ButtonInfo") ).default }>
        <ButtonInfo />
      </Demo>
    </div>
    
    <div className="jb-anchor">
        <h2>不可用按钮</h2>
    </div>

  <div className="jb-example">
     <Demo code={( require("!!raw-loader!./ButtonDisable") ).default }>
        <ButtonDisable />
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
export default ButtonExample 