import React, { useState } from "react"
import Button from "../button/button";
import Dialog from "./dialog";

const DialogKit = () => {
  const [visible, setVisible] = useState(false)
  return (
  <div>
   <button    onClick={() => { setVisible(!visible)}} >我是对话框</button>
   <Dialog title="提示"  visible={visible}
           buttons={[
             <button onClick={() => {  setVisible(!visible)}}
                     >取消</button>,
             <button 
                     onClick={() => { setVisible(!visible)}}>确认</button>
                   ]}
           onClose={() => {setVisible(!visible) } }
            
   >some</Dialog>
  </div>
  )
}
 export default DialogKit