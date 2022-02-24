import React, { Fragment } from "react"
import Layout from './layout';
import Header from './header';
import Aside from './aside';
import Content from "./content";
import Footer from "./footer";
import "./layout.example.scss"
const LayoutExample: React.FC = (props) => {
  return <Fragment>
    <h4>我的第一个例子</h4>
    <Layout style={{ height: 500, width: 500 }} >
      <Header className="x" >Header</Header>
      <Content className="y">Content</Content>
      <Footer className="x">Footer</Footer>
    </Layout>

    <h4>我的第二个例子</h4>
    <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" >Header</Header>
      <Layout>
        <Aside className="z"> Aside</Aside>
        <Content className="y">Content</Content>
      </Layout>
      <Footer className="x">Footer</Footer>
    </Layout>
    <h4>我的第三个例子</h4>
    <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" >Header</Header>
      <Layout>
        <Content className="y">Content</Content>
        <Aside className="z"> Aside</Aside>
      </Layout>
      <Footer className="x">Footer</Footer>
    </Layout>
  
        <h4>我的第4个例子</h4>
    <Layout style={{ height: 500, width: 500 }}>
     <Aside className="z" > Aside</Aside>
      <Layout>
         <Header className="x" >Header</Header>
         <Content className="y">Content</Content>
         <Footer className="x">Footer</Footer>
      </Layout>
    </Layout>

  


  </Fragment>

}
export default LayoutExample