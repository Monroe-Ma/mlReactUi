import React from "react"
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ButtonExample from "./lib/button/button.example";
import DialogExample from "./lib/dialog/dialog.example";
import LayoutExample from "./lib/layout/layout.example";
import './lib/icon/importIcon'
import  { Header,Layout, Aside,Footer, Content} from "./lib/layout/layout";
import IconDemo from "./lib/icon/icon.demo";

ReactDOM.render
(
<Router>
    <Layout className="site-page">
      <Header className="site-header">
        <div className="logo">
          JUI
        </div>

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
          <Route path="/icon" component={IconDemo}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer className="site-footer"></Footer>
    </Layout>
  </Router>,
  
  document.querySelector("#root"))
