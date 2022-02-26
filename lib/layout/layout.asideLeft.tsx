import React from 'react';
import { Layout,Header, Content,Footer, Aside }from './layout';
const AsideLeft = () => { 
  return (
    <div>
     <Layout style={{ height: 500, width: 500 }}>
      <Aside className="z" > Aside</Aside>
       <Layout>
         <Header className="x" >Header</Header>
         <Content className="y">Content</Content>
         <Footer className="x">Footer</Footer>
       </Layout>
    </Layout>
   </div>
  )
}
export default AsideLeft
