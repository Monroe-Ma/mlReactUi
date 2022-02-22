import React, { Fragment } from "react"
import "./dialog.scss"
import {scopedClassMaker } from "../helper/classes"
import Icon from '../icon/Icon';
import  "../index.scss"
  type Props = {
    visible: boolean
    // onClick:()=>void
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
            <button>1</button>
            <button>2</button>
          </footer>
       
        </div>
      </Fragment>
        :null
    )
}
export default Dialog