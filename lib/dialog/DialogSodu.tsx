import React, { useState } from "react"
import Button from "../button/button";
import  {alert,confirm,model } from "./dialog"

const DialogSodu = () => {
  const openModal = () => {
    const close = model(
      <h1>你好 <button onClick={() => {close() }} >close</button></h1>
      )
   }
  return (
  <div>
    <button 
             onClick={() => { alert("弹窗") }}
    >alert</button >

    <button 
        onClick={() => {
          confirm("弹窗", () => { console.log("你点击了yes") },
                         () => { console.log("你点击了no"); })}
               }
      >confirm</button >

     <button  onClick={openModal}>model</button >
  </div>
  )
}
 export default DialogSodu