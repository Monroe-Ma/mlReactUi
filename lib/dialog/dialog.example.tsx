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
      
    <Demo code={( require("!!raw-loader!./Dialog.sodu") ).default }>
        <DialogSodu />
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
          <td>设置Dialog的样式名</td>  
          <td>string</td>
          <td>-</td>  
        </tr>
         <tr>
          <td>title</td>  
          <td>标题</td>  
          <td>string | ReactNode</td>
          <td>提示</td>  
        </tr>
        <tr>
          <td>visible</td>  
          <td>对话框是否可见</td>  
          <td>boolean</td>
          <td>false</td>  
        </tr>
        <tr>
          <td>onClick</td>  
          <td>对话框是否可见</td>  
          <td>boolean</td>
          <td>false</td>  
        </tr>
      </tbody>
    </table>
  </div>
  
}
export default DialogExample