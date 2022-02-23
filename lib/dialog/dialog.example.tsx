import React from "react"
import { useState } from "react"
import Dialog, {alert,confirm,model } from "./dialog"
import Button from '../Button/button';

const DialogExample = () => { 
  const [visible, setVisible] = useState(false)
  const openModal = () => {
    const close = model(
      <h1>你好 <Button onClick={() => {close() }} theme="jb-button">close</Button></h1>
  )
   }
  return <div>
    <h1>对话框</h1>
    <Button
      theme="jb-button"
      onClick={() => {
        setVisible(!visible)
      }}
    >我是对话框</Button>
    <Dialog visible={visible}
           buttons={[
             <Button onClick={() => {  setVisible(!visible)}}
                     theme="jb-button">取消</Button>,
             <Button theme="jb-button-primary"
                     onClick={() => { setVisible(!visible)}}
             >确认</Button>
            ]}
            onClose={() => {setVisible(!visible) } }
            
    >some</Dialog>
    <h4>命令式使用</h4>
    <Button theme="jb-button-primary"
             onClick={() => { alert("弹窗") }}
    >alert</Button >

    <Button theme="jb-button-primary"
      onClick={() => {
        confirm("弹窗", () => {
        console.log("你点击了yes");
        
       }, () => { console.log("你点击了no"); }) }
      } >confirm</Button >

     <Button theme="jb-button-primary" onClick={openModal}>model</Button >

  </div>
  
}
export default DialogExample