import { Input, Form, Rate, Row, Button, Typography } from "antd";
import React, { useState } from "react";
import "antd/dist/reset.css";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
const { Text } = Typography;
const LoginWithLocalStorage = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogin, setshowLogin] = useState(false);
  const navigate=useNavigate()
  const onFinish = (values) => {
    console.log("values", values);
    const detailsBody = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email
    }
axios.post('http://localhost:8001/Survey/user/save', detailsBody)
.then((resp)=>{
    console.log("resp", resp)
})
.catch((err)=>{
    console.log("err", err)
})
    console.log("detailsBody", detailsBody)
    const commentsBody = {
      comments: values.comments,
      rating: values.rating
    }
    axios.post('http://localhost:8002/feedback', commentsBody)
.then((resp)=>{
    console.log("resp", resp)
})
.catch((err)=>{
    console.log("err", err)
})
    console.log("commentsBody", commentsBody)
  };
  const LoginPage = (values) => {
    if (values.email === "abc@gmail.com" && values.password === "12345") {
       navigate('/home')
    }
  }
  return (
    <div
      style={{
        width: "250px",
        padding: "20px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Row>
        <Text style={{ fontSize: "18px", fontWeight: "600px" }}>
          How was your experience
        </Text>
      </Row>
      <Button onClick={() => setShowForm(true)}> give feedback </Button>
      {showForm && (
        <Form onFinish={onFinish} style={{ marginTop: "10px" }}>
          <Form.Item name="firstName">
            <Input type="text" placeholder="FirstName" />
          </Form.Item>
          <Form.Item name="lastName">
            <Input type="text" placeholder="LastName" />
          </Form.Item>
          <Form.Item name="email">
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="comments">
            <Input type="text" placeholder="comments" />
          </Form.Item>
          <Text style={{ fontSize: "18px", fontWeight: "600px" }}>
            How much do you rate
          </Text>
          <Form.Item name="rating">
            <Rate />
          </Form.Item>
          <Button htmlType="submit">Submit feedback</Button>
        </Form>
      )}
      <Row>
        <Text>
            Are you an admin?
        </Text>

      </Row>
      <Button onClick={() => setshowLogin(true)}>Login</Button>
      {
        showLogin && <Form onFinish={LoginPage}>
        <Form.Item name="email">
            <Input type="email" placeholder="Email" />
          </Form.Item>
          <Form.Item name="password">
            <Input type="password" placeholder="Password" />
          </Form.Item>
          <Button htmlType="submit">Login</Button>
        </Form>
      }
    </div>
  );
};

export default LoginWithLocalStorage;