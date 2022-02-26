import React from "react"
import Button from "./button"
import { scopedClassMaker } from '../helper/classes';
import "../demo.scss"
const ButtonExample = () => { 
  const buttonName = scopedClassMaker("jb-button")
const bn = buttonName
  return <div>
    <h1 className="jb-title">Button 示例</h1>
    <div className="jb-anchor">
       <h2>基本按钮</h2>
    </div>
    <div className="jb-example">
    <Button theme={bn({ '': true })}>普通按钮</Button>
    <Button theme={bn("primary")}>颜色按钮</Button>
    <Button theme={bn("link")}>链接按钮</Button>
      <Button theme={bn("text")}>文字按钮</Button>
    </div>
    
    <div className="jb-anchor">
       <h2>按钮尺寸</h2>
    </div>
    <div className="jb-example">
    <Button size={bn("small")}>小按钮</Button>
       <Button size={bn({ '': true })}>普通按钮</Button>
    <Button size={bn("big")}>大按钮</Button>
    </div>
     <div className="jb-anchor">
        <h2>按钮类型</h2>
    </div>
  
    <div className="jb-example">
     <Button level={bn("info")}>信息按钮</Button>
       <Button level={bn("success")}>成功按钮</Button>
       <Button level={bn("warning")}>警告按钮</Button>
      <Button level={bn("error")}>错误按钮</Button>
    </div>
    
    <div className="jb-anchor">
        <h2>不可用按钮</h2>
    </div>

  <div className="jb-example">
     <Button theme={bn("primary")} disabled >禁用多色按钮</Button>
       <Button theme={bn("button")} disabled>禁用按钮</Button>
       <Button theme={bn("link")} disabled>禁用链接按钮</Button>
      <Button theme={bn("text")} disabled>禁用文字按钮</Button>
      </div>
    {/* <h2>加载状态</h2>
     <Button loading >加载中</Button>
    <Button theme={bn("loadingIndicator") } loading>加载完成</Button> */}
</div>
}
export default ButtonExample 