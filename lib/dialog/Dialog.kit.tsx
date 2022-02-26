import React, { useState } from "react"
import Button from "../button/button";
import Dialog from "./dialog";

const DialogKit = () => {
  const [visible, setVisible] = useState(false)
  return (
  <div>
   <Button theme="jb-button"   onClick={() => { setVisible(!visible)}} >我是对话框</Button>
   <Dialog title="提示"  visible={visible}
           buttons={[
             <Button onClick={() => {  setVisible(!visible)}}
                     theme="jb-button">取消</Button>,
             <Button theme="jb-button-primary"
                     onClick={() => { setVisible(!visible)}}>确认</Button>
                   ]}
           onClose={() => {setVisible(!visible) } }
            
   >some</Dialog>
  </div>
  )
}
 export default DialogKit