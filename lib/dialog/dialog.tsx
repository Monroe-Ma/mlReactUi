import React, { Fragment, ReactElement } from "react"
import "./dialog.scss"
import {scopedClassMaker } from "../helper/classes"
import Icon from '../icon/Icon';
import  "../index.scss"
import ReactDOM from "react-dom";
  type Props = {
    visible: boolean
    // onClick:()=>void
    buttons: Array<ReactElement> 
    onClose:()=>void
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
    ReactDOM.createPortal(
      x, document.body)
    )
     }
export default Dialog