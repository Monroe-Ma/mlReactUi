import React from "react"
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import './lib/icon/importIcon'
import  { Header,Layout, Aside,Footer, Content} from "./lib/layout/layout";
import "./example.scss"
import Icon from './lib/icon/Icon';
import IconExample from "./lib/icon/icon.example";
ReactDOM.render
(
<Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          <Icon className="iconLogo" name="JUI-KIT" />
        </div>
        <ul className="site-nav">
          <li>
            <Link to=" ">React版</Link>
          </li>
          <li>
             <Link to=" ">VUE版</Link>
          </li>
          <li>
            <Link to=" "> <Icon className="" name="githu" /> </Link>
           </li>
        </ul>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <Link to="/icon">Icon</Link>
            </li>
            <li>
              <Link to="/button">Button</Link>
            </li>
            <li>
              <Link to="/dialog">对话框</Link>
            </li>
            <li>
              <Link to="/layout">布局</Link>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
         
      </Layout>
      <Footer className="site-footer">
       < Icon className="logoGrey" name="jui-grey"/>
     </Footer>
    </Layout>
  </Router>,
  
  document.querySelector("#root"))
