import React, { Fragment } from "react"
import Layout from './layout';
import Header from './header';
import Aside from './aside';
import Content from "./content";
import Footer from "./footer";
import "./layout.scss"
import "./layout.example.scss"
type Props = {

}
const LayoutExample: React.FC<Props> = (props) => {
  return <Fragment>
    <h4>我的第一个例子</h4>
    <Layout style={{ height: 500, width: 500 }} >
      <Header className="x" ></Header>
      <Content className="y"></Content>
      <Footer className="x"></Footer>
    </Layout>

    <h4>我的第二个例子</h4>
    <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" ></Header>
      <Layout>
        <Aside className="z"></Aside>
        <Content className="y"></Content>
      </Layout>
      <Footer className="x"></Footer>
    </Layout>
    <h4>我的第三个例子</h4>
    <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" ></Header>
      <Layout>
        <Content className="y"></Content>
        <Aside className="z"></Aside>
      </Layout>
      <Footer className="x"></Footer>
    </Layout>
  
        <h4>我的第4个例子</h4>
    <Layout style={{ height: 500, width: 500 }}>
     <Aside className="z" > </Aside>
      <Layout>
         <Header className="x" ></Header>
         <Content className="y"></Content>
         <Footer className="x"></Footer>
      </Layout>
    </Layout>

  


  </Fragment>

}
export default LayoutExample