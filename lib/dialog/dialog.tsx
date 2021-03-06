import React, { Fragment, ReactElement, ReactNode } from "react"
import "./dialog.scss"
import {scopedClassMaker } from "../helper/classes"
import Icon from '../icon/Icon';
import ReactDOM from "react-dom";
import Button from '../button/Button';
  type Props = {
    visible: boolean
    buttons?: Array<ReactElement> 
    onClose?: () => void
    title: string
   
  }

const scopedClass = scopedClassMaker("jb-dialog")
const sc = scopedClass

const Dialog: React.FC<Props> = (props) => {
  const x = props.visible ?
    <Fragment>
      <div className={sc("mask")} onClick={props.onClose}>
      </div>
      <div className={sc({ '': true })}>
        <span>
          <header className={sc("header")} >{props.title }</header>
          <div className={sc("close")} onClick={props.onClose}>
            <Icon name="guanbi" className="dialogClose" />
          </div>
        </span>
        <main className={sc("main")}> {props.children}</main>
        <footer className={sc("footer")}>
          {props.buttons && props.buttons.map((button, index) => {
           return React.cloneElement(button,{ key: index })
          })}
        </footer>
      </div>
    </Fragment>
    : null
  return (
    ReactDOM.createPortal(x, document.body)
    )
}
const model = (content: ReactNode,buttons?:Array<ReactElement>,afterClose?:()=>void  ) => { 
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div)
    div.remove()}
  const component = <Dialog visible={true} title="提示"
                            onClose={() => {onClose(); afterClose && afterClose()}}
                           buttons={ buttons} 
                    >{content}</Dialog>
  
  const div = document.createElement("div")
  document.body.append(div)
  ReactDOM.render(component, div);
  return onClose
}

const alert = (content: string) => { 
  const buttons = [<Button onClick={() => {close() }} theme="ordinary" >OK</Button>]
  const close = model(content,buttons)
}  

const confirm = (content: string, yes: () => void, no: () => void) => {
  const onYes =()=> {
    close()
    yes &&yes()
  }
   const onNo =()=> {
    close()
    no&&no()
   }
   const buttons =[
      <Button theme="primary"
              onClick={onYes}>yes</Button>,
      <Button theme="text"
              onClick={onNo}>no</Button>
    ]
   const close = model(content,buttons ,no)
 }

export {alert,confirm, model }

export default Dialog