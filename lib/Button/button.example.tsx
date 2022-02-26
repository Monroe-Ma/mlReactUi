import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "../demo.scss"
import Demo from "../Demo";
import ButtonBasic from "./button.basic";
import ButtonSize from "./button.size";
import ButtonInfo from "./button.info";
import ButtonDisable from "./button.disable";
const ButtonExample = () => { 
  const buttonName = scopedClassMaker("jb-button")
const bn = buttonName
  return <div>
    <h1 className="jb-title">Button 示例</h1>
    <div className="jb-anchor">
       <h2>基本按钮</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./button.basic") ).default }>
        <ButtonBasic />
      </Demo>
    </div>
    
    <div className="jb-anchor">
       <h2>按钮尺寸</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./button.size") ).default }>
        <ButtonSize />
      </Demo>
    </div>

     <div className="jb-anchor">
        <h2>按钮类型</h2>
    </div>
  
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./button.info") ).default }>
        <ButtonInfo />
      </Demo>
    </div>
    
    <div className="jb-anchor">
        <h2>不可用按钮</h2>
    </div>

  <div className="jb-example">
     <Demo code={( require("!!raw-loader!./button.disable") ).default }>
        <ButtonDisable />
      </Demo>
      </div>
    {/* <h2>加载状态</h2>
     <Button loading >加载中</Button>
    <Button theme={bn("loadingIndicator") } loading>加载完成</Button> */}
</div>
}
export default ButtonExample 