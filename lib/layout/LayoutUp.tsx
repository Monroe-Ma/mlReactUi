import React from 'react';
import { Layout,Header,Aside, Content,Footer }from './Layout';
const LayoutUp = () => { 
  return (
    <div>
        <Layout style={{ height: 500, width: 500 }} >
      <Header className="x" >Header</Header>
      <Content className="y">Content</Content>
      <Footer className="x">Footer</Footer>
    </Layout>
   
   </div>
  )
}
export default LayoutUp
