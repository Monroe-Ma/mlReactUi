import React from 'react';
import { Layout,Header, Content,Footer, Aside }from './layout';
const LayoutRight = () => { 
  return (
    <div>
      <Layout style={{ height: 500, width: 500 }}>
        <Header className="x" >Header</Header>
        <Layout>
          <Content className="y">Content</Content>
          <Aside className="z"> Aside</Aside>
        </Layout>
      <Footer className="x">Footer</Footer>
    </Layout>
   </div>
  )
}
export default LayoutRight
