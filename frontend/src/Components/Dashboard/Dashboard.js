import React, { useState } from "react";
import SideNavigationBar from './SideNavigationBar';
import { Button } from 'react-bootstrap';
import './Dashboard.css';
import QRCodeGenerator from './QRCodeGenerator';
import { Container, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";

import "./Dashboard.css";


const Sidebar = () => {
//   const [select, setSelect] = useState(1);
//   const user_data = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  const [sidebar,setSidebar] = useState(true)
  const showsidebar = () => {
    console.log(sidebar)  
    setSidebar(!sidebar)
}
  return (
    <div className='main'>
    <SideNavigationBar />
    <div className='sub__main'>
        <Container className='info'>
            <QRCodeGenerator />
            <div className='details'>
                <p>Nikshita Shetty</p>
                <p>DOB</p>
                <p>1234 5678 7890</p>
            </div>
        </Container>
        <Form className="file__form">
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Insurance
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="file" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    PUC
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="file" placeholder="Password" />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                    Registeration Certificate
                </Form.Label>
                <Col sm="10">
                    <Form.Control type="file" placeholder="Password" />
                </Col>
            </Form.Group>
            <div className='save__btn'>
                <Button>Save</Button>
            </div>

        </Form>
    </div>

</div>
  );
};

export default Sidebar;