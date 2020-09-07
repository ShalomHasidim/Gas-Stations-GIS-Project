import React from 'react';
import {Button,Modal, Form, Row, Col} from 'react-bootstrap';
import  CustomizedRatings  from './customizedRatings';

function ModalFilterGS(props) {
    return(
        <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        className = "modal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            סינון תחנות דלק
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
                <Form.Group as = {Row}>
                  <Form.Label column lg={4}>שם תחנה</Form.Label>
                  <Col lg={4}>
                    <Form.Control  id = "stationName" type="text" placeholder=""/>
                  </Col>
                </Form.Group>
                <Form.Group as = {Row}>
                <Form.Label column lg={4}>שם חברה</Form.Label>
                  <Col lg={{ span: 4, offset: 4 }}>
                    <Form.Control id = "companyName" type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group as = {Row}>
                <Form.Label column lg={4}>ישוב</Form.Label>
                  <Col lg={{ span: 4, offset: 4 }}>
                    <Form.Control  type="city" placeholder="חולון" /> 
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
          </Form>
        </Modal.Body>
        <Modal.Footer>
            <Col lg={{span:6, offset:6}}>
              <Button id="searchBtn" type="submit" className="left">חיפוש</Button>
            </Col>
        </Modal.Footer>
      </Modal>
    );
}

export default ModalFilterGS;