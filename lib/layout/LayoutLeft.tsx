import React from 'react';
import { Layout,Header, Content,Footer, Aside }from './Layout';
const LayoutLeft = () => { 
  return (
    <div>
     <Layout style={{ height: 500, width: 500 }}>
      <Header className="x" >Header</Header>
       <Layout>
         <Aside className="z"> Aside</Aside>
         <Content className="y">Content</Content>
       </Layout>
      <Footer className="x">Footer</Footer>
      </Layout>
   </div>
  )
}
export default LayoutLeft
