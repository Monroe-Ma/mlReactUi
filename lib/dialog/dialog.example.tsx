import React from "react"
import  {alert,confirm,model } from "./dialog"
import Button from '../Button/button';
import Demo from "../Demo";
import DialogKit from "./Dialog.kit";
import DialogSodu from "./Dialog.sodu";

const DialogExample = () => { 


  return <div>
    <h1 className="jb-title">对话框</h1>
    
    <div className="jb-anchor">
       <h2>组件式使用</h2>
    </div>

    <div className="jb-example">
        <Demo code={( require("!!raw-loader!./Dialog.kit") ).default }>
        <DialogKit />
       </Demo>
    </div>
    
     <div className="jb-anchor">
       <h2>命令式使用</h2>
    </div>
    <div className="jb-example">
      
    <Demo code={( require("!!raw-loader!./Dialog.kit") ).default }>
        <DialogSodu />
    </Demo>
</div>
  </div>
  
}
export default DialogExample