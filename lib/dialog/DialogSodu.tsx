import React, { useState } from "react"
import Button from "../button/Button";
import  {alert,confirm,model } from "./Dialog"

const DialogSodu = () => {
  const openModal = () => {
    const close = model(
      <h1>你好 <Button theme="ordinary" onClick={() => {close() }} >close</Button></h1>
      )
   }
  return (
  <div>
    <Button theme="primary"
             onClick={() => { alert("弹窗") }}
    >alert</Button >

    <Button theme="primary"
        onClick={() => {
          confirm("弹窗", () => { console.log("你点击了yes") },
                         () => { console.log("你点击了no"); })}
               }
      >confirm</Button >

     <Button  theme="primary" onClick={openModal}>model</Button >
  </div>
  )
}
 export default DialogSodu