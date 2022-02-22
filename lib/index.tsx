import React from "react"
import ReactDOM from "react-dom";
import ButtonExample from "./button/button.example";
import DialogExample from "./dialog/dialog.example";
import IconExample from "./icon/icon.example";
import './icon/importIcon'

ReactDOM.render
(
<div>
    <IconExample />
    <DialogExample />
    <ButtonExample />
  </div>,
  
  document.querySelector("#root"))
