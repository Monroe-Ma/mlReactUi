import React, { Fragment } from "react"
import Demo from "../Demo";
import { Layout,Header,Aside, Content,Footer }from './Layout';
import AsideLeft from "./LayoutAsideLeft";
import "./layout.example.scss"
import LayoutLeft from "./LayoutLeft";
import LayoutRight from "./LayoutRight";
import LayoutUp from "./LayoutUp";
const LayoutExample: React.FC = (props) => {
  return <Fragment>
    <h1 className="jb-title">布局示例</h1>
    
    <div className="jb-anchor">
       <h2>上中下布局</h2>
    </div>
     <div className="jb-example">
      <Demo code={( require("!!raw-loader!./LayoutUp") ).default }>
        <LayoutUp />
      </Demo>
    </div>
    
     <div className="jb-anchor">
      <h2>上左中右下布局</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./LayoutLeft") ).default }>
        <LayoutLeft />
      </Demo>
    </div>

    <div className="jb-anchor">
      <h2>上右中左下布局</h2>
    </div>
     <div className="jb-example">
      <Demo code={( require("!!raw-loader!./LayoutRight") ).default }>
        <LayoutRight />
      </Demo>
    </div>

    <div className="jb-anchor">
      <h2>左上中下</h2>
    </div>
     <div className="jb-example">
     <Demo code={( require("!!raw-loader!./LayoutAsideLeft") ).default }>
        <AsideLeft />
      </Demo>
    </div>
  


  </Fragment>

}
export default LayoutExample