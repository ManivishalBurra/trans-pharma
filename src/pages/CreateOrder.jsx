import React, { Component, useState } from 'react';
import { Menu, Icon, Form, Input, Button, DatePicker, Select, InputNumber, Descriptions, Modal, Result } from 'antd';
import { Truck, Notification, Home2, Profile2User, BoxAdd } from 'iconsax-react';
import moment from 'moment';
import Navbar from '../components/Navbar';
import "../css/custom.css";
import { useParams } from 'react-router-dom';
const CreateOrder = () => {
    const [form] = Form.useForm();
    let {to, from, pick_date, drop_date} = useParams();

    pick_date = moment(pick_date)
    drop_date = moment(drop_date)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [orderDetails, setOrderDetails] = useState({})
    const [testOrderSuccess, setTestOrderSuccess] = useState(false)
    const CreateOrderWithSummary = (e) => {
        e.pick_date = e.pick_date.toString()
        e.drop_date = e.drop_date.toString()
        setOrderDetails(e)
        setIsModalOpen(true);
    }
    
    const handleOk = () => {
        setIsModalOpen(false);
        setTestOrderSuccess(false);
      };
    
    const handleCancel = () => {
        setIsModalOpen(false);
        setTestOrderSuccess(false);
      };

    return (
    <div style={{display:"flex", height:"100vh"}}>
      <Navbar selectedKey = "Home"/>
    <div className='center' style={{ width:"100%", height:"100%"}}>
        <div style={{backgroundColor:"white", width:"100%", height:"89%", borderRadius:"20px", margin:"40px", padding:"30px"}}>
        <div style={{display:"flex", alignItems:"center"}}>
        <h1> Create Order </h1>
        <BoxAdd size="32" color="#36454F" variant="TwoTone"/>
        </div>
        <Form
            layout="vertical"
            form={form}
            onFinish={CreateOrderWithSummary}
            initialValues={{
                to,from,pick_date,drop_date
            }}
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
      </div>

      <Form.Item name="ProductName" label="Name of the item" style={{width:"30%", fontWeight:"bold"}}>
        <Input placeholder="Name of the Load you want to deliver" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
      </Form.Item>

      <div style={{display:"flex", justifyContent:"space-between"}}>
        <Form.Item name="totalLoadWeight" label="From" style={{width:"50%", fontWeight:"bold"}}>
            <InputNumber placeholder="Total weight of the load in Kgs" style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}} />
        </Form.Item>
        <Form.Item name="packageName" label="PackageName" style={{width:"50%", fontWeight:"bold"}}>
        <Select
        style={{borderRadius:"20px", width:"95%", marginRight:"5%", height:"40px", backgroundColor:"#EEEEEE"}}
        placeholder="select the type of packaging"
      options={[
        {
          value: 'Drums',
          label: 'Drums',
        },
        {
          value: 'Bags',
          label: 'Bags',
        },
        {
          value: 'Liquid container',
          label: 'Liquid container',
        },
      ]}
    />
        </Form.Item>
        <Form.Item name="totalPackages" label="Total number of packages" style={{width:"50%", fontWeight:"bold"}}>
            <InputNumber placeholder="No. of drums" style={{borderRadius:"20px", width:"100%", height:"40px", backgroundColor:"#EEEEEE"}}/>
        </Form.Item>
      </div>

      <Form.Item style={{height:"40px", width:"15%"}} >
        <Button htmlType="submit" type="primary" className="center shadow" style={{backgroundColor:"#FFE500", color:"black", width:"100%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px"}}>Create Order</Button>
      </Form.Item>
    </Form>
        </div>    
    </div>
    <Modal title="Order Summary" open={isModalOpen} width={1200} footer={null} onCancel={handleCancel}>
    {!testOrderSuccess ? <div>
    <Descriptions bordered>
    <Descriptions.Item label="Pick up Location">{orderDetails.from}</Descriptions.Item>
    <Descriptions.Item label="Drop Location" span={2}>{orderDetails.to}</Descriptions.Item>
    <Descriptions.Item label="Pick up Date">{orderDetails.pick_date}</Descriptions.Item>
    <Descriptions.Item label="Drop Date" span={2}>{orderDetails.drop_date}</Descriptions.Item>
    <Descriptions.Item label="Product Name" span={3}>{orderDetails.productName}</Descriptions.Item>
    <Descriptions.Item label="Total Load Weight" span={3}>{orderDetails.totalLoadWeight}</Descriptions.Item>
    <Descriptions.Item label="Package Name" span={1}>{orderDetails.packageName}</Descriptions.Item>
    <Descriptions.Item label="Total packaging quanitities" span={2}>{orderDetails.totalPackages}</Descriptions.Item>

    <Descriptions.Item label="Width">23</Descriptions.Item>
    <Descriptions.Item label="height">86</Descriptions.Item>
    <Descriptions.Item label="Breadth">45</Descriptions.Item>
    {/* <Descriptions.Item label="Status" span={3}>
      <Badge status="processing" text="Running" />
    </Descriptions.Item> */}
    
  </Descriptions>
  <Button type="primary" onClick={()=> setTestOrderSuccess(true)} className="center shadow" style={{backgroundColor:"#FFE500", color:"black", width:"15%", height:"40px", borderRadius:"20px", fontWeight:"bold", marginTop:"30px"}}>Create Order</Button>
  </div>
  :
  <Result
        status="success"
        title="Order requested successfully! We will send you the update of the request in 3 days"
        subTitle="Order number: 2017182818828182881 Created successfully"
        extra={[
        <Button key="console" style={{backgroundColor:"black", color:"white"}}>
            Go Home
        </Button>,
        <Button key="buy">My Orders</Button>,
        ]}
    />
}
  
    </Modal>
    </div>
    );
  }
export default CreateOrder;