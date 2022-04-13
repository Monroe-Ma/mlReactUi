import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link,
  NavLink,
  Redirect,
} from 'react-router-dom'
import ButtonExample from './lib/button/ButtonExample'
import DialogExample from './lib/dialog/DialogExample'
import LayoutExample from './lib/layout/LayoutExample'
import './lib/icon/importIcon'
import { Header, Layout, Aside, Footer, Content } from './lib/layout/Layout'
import './example.scss'
import Icon from './lib/icon/Icon'
import IconExample from './lib/icon/IconExample'
ReactDOM.render(
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
            <Link to=" ">
              {' '}
              <Icon className="" name="githu" />{' '}
            </Link>
          </li>
        </ul>
      </Header>
      <Layout>
        <Aside className="site-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon" activeClassName="activeStyle">
                Icon
              </NavLink>
            </li>
            <li>
              <NavLink to="/button" activeClassName="activeStyle">
                Button
              </NavLink>
            </li>
            <li>
              <NavLink to="/dialog" activeClassName="activeStyle">
                对话框
              </NavLink>
            </li>
            <li>
              <NavLink to="/layout" activeClassName="activeStyle">
                布局
              </NavLink>
            </li>
          </ul>
        </Aside>
        <Content className="site-main">
          <Route path="/" component={IconExample} />
          <Route path="/icon" component={IconExample} />
          <Route path="/button" component={ButtonExample} />
          <Route path="/dialog" component={DialogExample} />
          <Route path="/layout" component={LayoutExample} />
          {/* <Redirect to="/icon/" /> */}
        </Content>
      </Layout>
      <Footer className="site-footer">
        <Icon className="logoGrey" name="jui-grey" />
      </Footer>
    </Layout>
  </Router>,

  document.querySelector('#root')
)
