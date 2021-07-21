import { Layout } from 'antd';
import "antd/dist/antd.css";
import Routes from './routes';
import {Router, Link } from 'react-router-dom';




const { Content, Footer } = Layout;
export default function App() {
  return (
    <div>
     
        <Content >
          <div className="site-layout-content">          
             <Routes />       
          </div>
        </Content>
          <Footer style={{backgroundColor:'#C2D3E0'},{textAlign:'center'}}>eVaccine developed By Rocket Team TM</Footer>
      
    </div>
  );
}      
     