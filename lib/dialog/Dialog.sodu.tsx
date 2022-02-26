import React, { useState } from "react"
import Button from "../button/button";
import  {alert,confirm,model } from "./dialog"

const DialogSodu = () => {
  const openModal = () => {
    const close = model(
      <h1>你好 <Button onClick={() => {close() }} theme="jb-button">close</Button></h1>
      )
   }
  return (
  <div>
    <Button theme="jb-button-primary"
             onClick={() => { alert("弹窗") }}
    >alert</Button >

    <Button theme="jb-button-primary"
        onClick={() => {
          confirm("弹窗", () => { console.log("你点击了yes") },
                         () => { console.log("你点击了no"); })}
               }
      >confirm</Button >

     <Button theme="jb-button-primary" onClick={openModal}>model</Button >
  </div>
  )
}
 export default DialogSodu