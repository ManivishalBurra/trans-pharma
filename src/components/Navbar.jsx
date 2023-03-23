import React, { Component } from 'react';
import { Menu } from 'antd';
import { Truck, Notification, Home2, Profile2User, LogoutCurve } from 'iconsax-react';
import "../css/custom.css";
const Navbar = (props) =>{
  
    return (
        <Menu selectedKeys={[props.selectedKey]} mode="inline" inlineCollapsed={true} theme={"dark"} style={{margin:"10px", paddingTop:"40px", borderRadius:"50px", width:"60px", marginLeft:"15px", position:"relative"}}>
            <Menu.Item key="Home" className="center" style={{marginBottom:"50px"}} title="Home">
                <Home2 size="32" color="#FFE600" variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="notification" className="center" style={{marginBottom:"50px"}} title="Notification">
                <Notification size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="order" className="center" style={{marginBottom:"50px"}} title="Order">
                    <Truck size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="profile" className="center" style={{marginBottom:"50px"}} title="My Account">
                <Profile2User size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>
                <Menu.Item key="logout" className="center" style={{marginBottom:"5px", position:"absolute", bottom:"0"}} title="Log out">
                <LogoutCurve size="32" color="#d9e3f0" variant="Bold"/>
                </Menu.Item>
            </Menu>
    );
  }

export default Navbar;