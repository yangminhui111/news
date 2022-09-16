import { Layout } from "antd";
import SideMenu from "../../components/sandbox/SideMenu";
import TopHeader from "../../components/sandbox/TopHeader";
import NewsRouter from "../../components/sandbox/NewsRouter";
import './NewsSandBox.css'
const {Content} =Layout
const NewsSandBox = () => {
    return ( 
        <Layout>
            <SideMenu></SideMenu>
            <Layout className="site-layout">
            <TopHeader></TopHeader>
            <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow:'auto'
            }}
          >
            <NewsRouter />
            </Content>
            </Layout>
        </Layout>
     );
}
 
export default NewsSandBox;