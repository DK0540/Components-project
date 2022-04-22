import React, { useState, useEffect } from 'react';
import './register.css';
import { Form, Input, Button, Checkbox } from 'antd';
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 18,
  },
};
const formTailLayout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 6,
    offset: 8,
  },
};

const DynamicRule = () => {
  const [user, setUser] = useState("");

  const handleChange = (e) => {
   
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value
    })
  }

  const [form] = Form.useForm();
  const [checkStock, setCheckStock] = useState(false);
  useEffect(() => {
    form.validateFields(['stock']);
  }, [checkStock]);

  const onCheckboxChange = (e) => {
    setCheckStock(e.target.checked);
  };

  const onCheck = async () => {
    try {
      const values = await form.validateFields();
      console.log('Success:', values);
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  };

  return (
    <div className='container' >
        <Form className='homepage'  form={form} name="dynamic_rule">
      <Form.Item 
      style={{width: "20rem"}}
        {...formItemLayout}
        name="username"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your name',
          },
        ]}
      >
        <Input placeholder="Please input your name" />
      </Form.Item>
      <Form.Item
       style={{width: "20rem"}}
        {...formItemLayout}
        label="Email"
        name="email" value={ user.email } 
        rules={[
          {
            required: true,
            message: 'Email',
          },
        ]}
       
      >
        <Input  name="email" value={ user.email }  onChange={ handleChange }/>
      </Form.Item>
      <Form.Item  style={{width: "20rem"}}
        {...formItemLayout} type="text" name="phone" value={ user.phone }  label="Phone" rules={[{ required: true }]} >
        <Input name="name" value={ user.phone } onChange={ handleChange }/>
      </Form.Item>

      <Form.Item  style={{width: "20rem"}}
        {...formItemLayout} type="text" name="companyname" value={ user.companyname }  label="Company" rules={[{ required: true }]} >
        <Input name="companyname" value={ user.companyname } onChange={ handleChange }/>
      </Form.Item>

      <Form.Item  style={{width: "20rem"}}
        {...formItemLayout} type="text" name="productname" value={ user.productname }  label="Product" rules={[{ required: true }]} >
        <Input name="productname" value={ user.productname } onChange={ handleChange }/>
      </Form.Item>


      <Form.Item
      style={{width: "20rem"}}
        {...formItemLayout}
        name="stock"
        label="Stock"
        rules={[
          {
            required: checkStock,
            message: 'Please input your stock',
          },
        ]}
      >
        <Input placeholder="Please input your Stock id" />
      </Form.Item>
      <Form.Item  {...formTailLayout}>
        <Checkbox style={{width: "20rem"}} checked={checkStock} onChange={onCheckboxChange}>
          Confirmed
        </Checkbox>
      </Form.Item>
      <Form.Item style={{width: "20rem"}} {...formTailLayout}>
        <Button  type="primary" onClick={onCheck}>
          Check
        </Button>
      </Form.Item>
    </Form>
    </div>
    
  );
};

export default DynamicRule;





// const buyerSchema = new mongoose.Schema ({
//   name:{
//     type:String,
//     required:true,
//   },
//   email:{
//     type:String,
//     required:true,
//     lowercase:true,
//     unique:true,
//   },
//   phone:{
//     type:Number,
//     required:true,
//   },
//   companyName:{
//     type:String,
//     required:true,
//   },
//   productName:{
//     type:String,
//     required:true,
//   },
//   stock:{
//     type:Number,
//     required:true,
//   }
// })
