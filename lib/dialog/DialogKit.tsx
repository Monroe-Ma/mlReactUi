import React, { useState } from "react"
import Button from "../button/Button";
import Dialog from "./Dialog";

const DialogKit = () => {
  const [visible, setVisible] = useState(false)
  return (
  <div>
   <Button  theme="primary"  onClick={() => { setVisible(!visible)}} >我是对话框</Button>
   <Dialog title="提示"  visible={visible}
           buttons={[
             <Button theme="text" onClick={() => {  setVisible(!visible)}}
                     >取消</Button>,
             <Button theme="primary"
                     onClick={() => { setVisible(!visible)}}>确认</Button>
                   ]}
           onClose={() => {setVisible(!visible) } }
            
   >some</Dialog>
  </div>
  )
}
 export default DialogKit