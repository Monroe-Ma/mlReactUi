import React from "react"
import { useState } from "react"
import Dialog from "./dialog"
import Button from '../Button/button';

const DialogExample = () => { 
const[visible,setVisible]=useState(false)

  return <div>
    <h1>对话框</h1>
    {/* <Button theme="jb-button" onClick={() => { setVisible(!visible)} } >我是对话框</Button> */}
    <Button
      theme="jb-button"
      onClick={() => {
        console.log("11111111")
        setVisible(!visible)
      }}
    >我是对话框</Button>
    <Dialog visible={visible}
            buttons={[
              <Button theme="jb-button">取消</Button>,
              <Button theme="jb-button-primary">确认</Button>
            ]}
            onClose={() => { } }
            
    >111</Dialog>
  </div>
  
}
export default DialogExample