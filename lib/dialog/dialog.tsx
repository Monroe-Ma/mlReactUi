import React, { Fragment, ReactElement, ReactNode } from "react"
import "./dialog.scss"
import {scopedClassMaker } from "../helper/classes"
import Icon from '../icon/Icon';
import  "../index.scss"
import ReactDOM from "react-dom";
import Button from '../Button/button';
  type Props = {
    visible: boolean
    buttons?: Array<ReactElement> 
    onClose?:()=>void
  }

const scopedClass = scopedClassMaker("jb-dialog")
const sc = scopedClass

const Dialog: React.FC<Props> = (props) => {
  const x = props.visible ?
    <Fragment>
      <div className={sc("mask")} onClick={props.onClose}>
      </div>
      <div className={sc()}>
        <span>
          <header className={sc("header")} >提示</header>
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

const alert = (content:string) => { 
  const component = <Dialog visible={true}
    onClose={() => {
      ReactDOM.render(React.cloneElement(component,{visible:false}), div);
      ReactDOM.unmountComponentAtNode(div)
      div.remove()
    }}>{content}</Dialog>
  const div = document.createElement("div")
  document.body.append(div)
  ReactDOM.render(component, div);
}  
const confirm = (content: string, yes: () => void, no: () => void) => {
  const onYes =()=> {
     ReactDOM.render(React.cloneElement(component,{visible:false}), div);
      ReactDOM.unmountComponentAtNode(div)
    div.remove()
    yes &&yes()
  }
   const onNo =()=> {
     ReactDOM.render(React.cloneElement(component,{visible:false}), div);
     ReactDOM.unmountComponentAtNode(div)
    div.remove()
    no&&no()
  }
  const component = <Dialog visible={true}
    onClose={onNo}
    buttons={[
      <Button theme="jb-button"
              onClick={onYes}>yes</Button>,
      <Button theme="jb-button-primary"
              onClick={onNo}>no</Button>,
    ] }
    >{content}</Dialog>
  const div = document.createElement("div")
    document.body.append(div)
    ReactDOM.render(component, div);
 }
const model = (content: ReactNode) => { 
  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, { visible: false }), div);
    ReactDOM.unmountComponentAtNode(div)
    div.remove()}
    const component = <Dialog visible={true}
    onClose={onClose }>{content}</Dialog>
    const div = document.createElement("div")
    document.body.append(div)
    ReactDOM.render(component, div);
  return onClose
}
export {alert,confirm, model }

export default Dialog