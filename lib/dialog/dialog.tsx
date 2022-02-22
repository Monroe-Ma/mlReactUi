import React, { Fragment, ReactElement } from "react"
import "./dialog.scss"
import {scopedClassMaker } from "../helper/classes"
import Icon from '../icon/Icon';
import  "../index.scss"
import { ButtonHTMLAttributes } from "react";
  type Props = {
    visible: boolean
    // onClick:()=>void
    buttons: Array<ReactElement> 
    onClose:()=>void
  }

const scopedClass = scopedClassMaker("jb-dialog")
const sc = scopedClass

const Dialog:React.FC<Props> = (props) => { 
  return (
    props.visible ?
      <Fragment>
        <div className={sc("mask")}>
        </div>
        <div className={sc()}>
          <span>
           <header className={sc("header")} >提示</header>
            <div className={sc("close")}>
              <Icon name="guanbi" className="dialogClose" />
            </div>
            </span>
          <main className={sc("main")}> {props.children }</main>
          <footer className={sc("footer")}>
            {props.buttons }
          </footer>
       
        </div>
      </Fragment>
        :null
    )
}
export default Dialog