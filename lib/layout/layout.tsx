import React, { Fragment, HTMLAttributes, ReactElement } from "react"
import {scopedClassMaker } from '../helper/classes';
import Aside from "./aside";
import './layout.scss';
type Props = {
  children: ReactElement | Array<ReactElement>
} & HTMLAttributes<HTMLElement>
 const layoutName = scopedClassMaker("jb-layout")
 const ly = layoutName
const Layout: React.FC<Props> = (props) => {
  const { className, ...rest } = props;
  const children = props.children as Array<ReactElement>;
  const hasAside = 'length' in children &&
  children.reduce((result, node) => result || node.type === Aside, false);
 
  return <Fragment>
    <div className={ly({ '': true, hasAside }, { extra: className })} {...rest}>
      {props.children}
    </div>
   
  </Fragment>
}
export default Layout
export { Layout } 
export { default as Header } from "./header"
export { default as Content } from "./content"
export { default as Aside } from "./aside"
export { default as Footer } from "./footer"


 
