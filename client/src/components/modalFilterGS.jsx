import React, {} from 'react';
import axios from "axios";
import { useForm } from 'react-hook-form';

import {Button,Modal, Form, Row, Col} from 'react-bootstrap';
import  CustomizedRatings  from './customizedRatings';

function ModalFilterGS(props) {
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    
    let url = `http://localhost:3900/api/gasStations?companyName=${data.companyName}`;
    axios.get(url).then(res => {
      props.handleFilter(res.data);
    });
  };


  return(
        <Modal 
        onHide = {props.onHide}
        show = {props.show}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        className = "modal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            סינון תחנות דלק
          </Modal.Title>
        </Modal.Header>
        <Form onClick = {handleSubmit(onSubmit)}>
        <Modal.Body> 
                <Form.Group as = {Row}>
                  <Form.Label column lg={4}>שם תחנה</Form.Label>
                  <Col lg={4}>
                    <Form.Control  name = "stationName" ref = {register} type="text" placeholder=""/>
                  </Col>
                </Form.Group>
                <Form.Group as = {Row}>
                <Form.Label column lg={4}>שם חברה</Form.Label>
                  <Col lg={{ span: 4, offset: 4 }}>
                    <Form.Control ref = {register} name = "companyName" type="text" placeholder=""/>
                  </Col>
                </Form.Group>
                <Form.Group as = {Row}>
                <Form.Label column lg={4}>ישוב</Form.Label>
                  <Col lg={{ span: 4, offset: 4 }}>
                    <Form.Control  ref = {register} name = "city" type="text" placeholder="חולון" /> 
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col lg={4}>
                    <Form.Check type="checkbox" label="פתוח 24/7" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Col lg={4}>
                    <Form.Check type="checkbox" label="מילוי גז וחשמל" />
                  </Col>
                  <Col>
                    <Form.Check type="checkbox" label="חנות נוחות" />
                  </Col>
                </Form.Group>
                <Form.Group as={Row}>
                  <Form.Label column lg={4}>דירוג תחנה</Form.Label>
                  <CustomizedRatings/>
                </Form.Group>
        </Modal.Body>
        <Modal.Footer>
            <Col lg={{span:6, offset:6}}>
              <Button id="searchBtn" type="submit" className="left">חיפוש</Button>
            </Col>
        </Modal.Footer>
        </Form>
      </Modal>
    );
}

export default ModalFilterGS;