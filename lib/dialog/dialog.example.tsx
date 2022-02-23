import React from "react"
import { useState } from "react"
import Dialog from "./dialog"
import Button from '../Button/button';

const DialogExample = () => { 
const[visible,setVisible]=useState(false)

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
  </div>
  
}
export default DialogExample