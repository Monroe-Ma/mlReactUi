import React, { Fragment } from "react"
import { Layout,Header,Aside, Content,Footer }from './layout';
import "./layout.example.scss"
const LayoutExample: React.FC = (props) => {
  return <Fragment>
    <h1 className="jb-title">布局示例</h1>
    
    <div className="jb-anchor">
       <h2>上中下布局</h2>
    </div>

     <div className="jb-example">
    <Layout style={{ height: 500, width: 500 }} >
      <Header className="x" >Header</Header>
      <Content className="y">Content</Content>
      <Footer className="x">Footer</Footer>
    </Layout>
    </div>
    
     <div className="jb-anchor">
      <h2>上左中右下布局</h2>
    </div>
    <div className="jb-example">
    <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" >Header</Header>
      <Layout>
        <Aside className="z"> Aside</Aside>
        <Content className="y">Content</Content>
      </Layout>
      <Footer className="x">Footer</Footer>
      </Layout>
    </div>
    <div className="jb-anchor">
      <h2>上右中左下布局</h2>
    </div>
     <div className="jb-example">
    <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" >Header</Header>
      <Layout>
        <Content className="y">Content</Content>
        <Aside className="z"> Aside</Aside>
      </Layout>
      <Footer className="x">Footer</Footer>
    </Layout>
    </div>
    <div className="jb-anchor">
      <h2>左上中下</h2>
    </div>
     <div className="jb-example">
     <Layout style={{ height: 500, width: 500 }}>
     <Aside className="z" > Aside</Aside>
      <Layout>
         <Header className="x" >Header</Header>
         <Content className="y">Content</Content>
         <Footer className="x">Footer</Footer>
        </Layout>
  
    </Layout>
      </div>
  


  </Fragment>

}
export default LayoutExample