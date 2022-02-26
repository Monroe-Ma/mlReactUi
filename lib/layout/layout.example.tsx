import React, { Fragment } from "react"
import Demo from "../Demo";
import { Layout,Header,Aside, Content,Footer }from './layout';
import AsideLeft from "./layout.asideLeft";
import "./layout.example.scss"
import LayoutLeft from "./layout.left";
import LayoutRight from "./layout.right";
import LayoutUp from "./layout.up";
const LayoutExample: React.FC = (props) => {
  return <Fragment>
    <h1 className="jb-title">布局示例</h1>
    
    <div className="jb-anchor">
       <h2>上中下布局</h2>
    </div>
     <div className="jb-example">
      <Demo code={( require("!!raw-loader!./layout.up") ).default }>
        <LayoutUp />
      </Demo>
    </div>
    
     <div className="jb-anchor">
      <h2>上左中右下布局</h2>
    </div>
    <div className="jb-example">
      <Demo code={( require("!!raw-loader!./layout.left") ).default }>
        <LayoutLeft />
      </Demo>
    </div>

    <div className="jb-anchor">
      <h2>上右中左下布局</h2>
    </div>
     <div className="jb-example">
      <Demo code={( require("!!raw-loader!./layout.right") ).default }>
        <LayoutRight />
      </Demo>
    </div>

    <div className="jb-anchor">
      <h2>左上中下</h2>
    </div>
     <div className="jb-example">
     <Demo code={( require("!!raw-loader!./layout.asideLeft") ).default }>
        <AsideLeft />
      </Demo>
    </div>
  


  </Fragment>

}
export default LayoutExample