import React, { Component } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Space } from 'antd';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import "../css/custom.css";
const Home = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate()
    const CreateOrder = (e) => {
        navigate(`/createorder/${e.to}/${e.from}/${e.pick_date.toString()}/${e.drop_date.toString()}`)
    }

    return (
    <div style={{display:"flex", height:"100vh"}}>
      <Navbar selectedKey = "Home"/>
    <div className='truck' style={{display:"inline"}}> 
      <p style={{marginBottom:"0px"}}>Ease of transport that <br></br></p>
      <p>your business deserve.</p> 
    </div>
    <div className='order-create' style={{fontFamily:"nunito"}}>
    <Form
      layout="vertical"
      form={form}
      onFinish={CreateOrder}
    >
      <div style={{display:"flex", justifyContent:"space-between"}}>
      <Form.Item name="from" label="From" style={{width:"50%", fontWeight:"bold"}}>
        <Input placeholder="Pick up location of the drug" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>
      <Form.Item name="to" label="To" style={{width:"50%", fontWeight:"bold"}}>
        <Input placeholder="Drop location of the drug" style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}/>
      </Form.Item>
      </div>
      <div style={{display:"flex"}}>
      <Form.Item name="pick_date" label="Pick Up Date" style={{width:"30%", fontWeight:"bold", marginBottom:"10px"}}>
        
        <DatePicker 
          style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} 
          onChange={e => console.log(e.target.value)}  
        />
  
      </Form.Item>
      <Form.Item name="drop_date" label="Drop Date" style={{width:"30%", fontWeight:"bold"}}>
        <DatePicker 
          style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}
        />
      </Form.Item>
      <Form.Item style={{height:"40px",}} >
        <Button htmlType="submit" type="primary" className="center shadow" style={{backgroundColor:"#FFE500", color:"black", width:"100%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px", marginLeft:"70px"}}>Create Order</Button>
      </Form.Item>
      </div>
      
    </Form>
    </div>
    </div>
    );
  }

export default Home;