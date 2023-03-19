import React, { Component } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Space } from 'antd';
import { Truck, Notification, Home2, Profile2User, LogoutCurve } from 'iconsax-react';
import "../css/custom.css";
import TruckImg from '../images/truck.jpeg'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Home extends Component {
  render() {
    return (
    <div style={{display:"flex", height:"100vh"}}>
   <Menu mode="inline" inlineCollapsed={true} theme={"dark"} style={{margin:"10px", paddingTop:"40px", borderRadius:"50px", width:"60px", marginLeft:"15px", position:"relative"}}>
       <Menu.Item key="Home" className="center" style={{marginBottom:"50px"}} title="Home">
          <Home2 size="32" color="#FFE600" variant="Bold"/>
        </Menu.Item>
        <Menu.Item key="notification" className="center" style={{marginBottom:"50px"}} title="Notification">
          <a href=""><Notification size="32" color="#d9e3f0" variant="Bold"/></a>
        </Menu.Item>
        <Menu.Item key="order" className="center" style={{marginBottom:"50px"}} title="Order">
          <a href=""><Truck size="32" color="#d9e3f0" variant="Bold"/></a>
        </Menu.Item>
        <Menu.Item key="profile" className="center" style={{marginBottom:"50px"}} title="My Account">
          <a href=""><Profile2User size="32" color="#d9e3f0" variant="Bold"/></a>
        </Menu.Item>
        <Menu.Item key="logout" className="center" style={{marginBottom:"5px", position:"absolute", bottom:"0"}} title="Log out">
          <a href="" style={{ marginRight:"8px"}}><LogoutCurve size="32" color="#d9e3f0" variant="Bold"/></a>
        </Menu.Item>
      </Menu>
    <div className='truck' style={{display:"inline"}}> 
      <p style={{marginBottom:"0px"}}>Ease of transport that <br></br></p>
      <p>your business deserve.</p> 
    </div>
    <div className='order-create' style={{fontFamily:"nunito"}}>
    <Form
      layout="vertical"
    >
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <Form.Item label="From" style={{width:"50%", fontWeight:"bold"}}>
        <Input placeholder="Pick up location of the drug" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      <Form.Item label="To" style={{width:"50%", fontWeight:"bold"}}>
        <Input placeholder="Drop location of the drug" style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}/>
      </Form.Item>
      </div>
      <div style={{display:"flex"}}>
      <Form.Item label="Pick Up Date" style={{width:"30%", fontWeight:"bold", marginBottom:"10px"}}>
        
        <DatePicker 
          style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} 
          onChange={e => console.log(e.target.value)}  
        />
  
      </Form.Item>
      <Form.Item label="Drop Date" style={{width:"30%", fontWeight:"bold"}}>
        <DatePicker 
          style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}
        />
      </Form.Item>
      <Button type="primary" className="center shadow" style={{backgroundColor:"#FFE500", color:"black", width:"15%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px", marginLeft:"70px"}}>Create Order</Button>
      </div>
      
    </Form>
    </div>
    </div>
    );
  }
}
export default Home;