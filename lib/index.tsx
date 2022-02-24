import React from "react"
import ReactDOM from "react-dom";
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import ButtonExample from "./button/button.example";
import DialogExample from "./dialog/dialog.example";
import IconExample from "./icon/icon.example";
import LayoutExample from "./layout/layout.example";
import './icon/importIcon'
import  { Header,Layout, Aside,Footer, Content} from "./layout/layout";

ReactDOM.render
(
<Router>
    <Layout>
      <Header>
        <div className="logo">
          JUI
        </div>

      </Header>
      <Layout>
        <Aside>
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
        <Content>
          <Route path="/icon" component={IconExample}/>
          <Route path="/button" component={ButtonExample}/>
          <Route path="/dialog" component={DialogExample}/>
          <Route path="/layout" component={LayoutExample}/>
        </Content>
      </Layout>
      <Footer></Footer>
    </Layout>
  </Router>,
  
  document.querySelector("#root"))
