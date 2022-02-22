import React from "react"
import { useState } from "react"
import Dialog from "./dialog"

const DialogExample = () => { 
const[visible,setVisible]=useState(false)

  return <div>
    <h1>对话框</h1>
    <button onClick={() => { setVisible(!visible)} } >我是对话框</button>
    <Dialog visible={visible} >111</Dialog>
  </div>
  
}
export default DialogExample