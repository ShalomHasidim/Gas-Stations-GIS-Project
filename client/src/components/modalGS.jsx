import React from 'react';
import {Button,Modal, Form, Row, Col} from 'react-bootstrap';

function ModalGS(props) {
    return (
        <Modal 
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered 
          className = "modal">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              מצא תחנת דלק בקרבתי
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
                  <Form.Group as = {Row}>
                    <Form.Label column lg={4}>אני נמצא ב</Form.Label>
                    <Col lg={4}>
                      <Form.Control  id = "city" type="text" placeholder="עיר"/>
                    </Col>
                  </Form.Group>
                  <Form.Group as = {Row} className="flex-row">
                    <Col lg={{ span: 4, offset: 4 }}>
                      <Form.Control id = "street" type="text" placeholder="רחוב" />
                    </Col>
                  </Form.Group>
                  <Form.Group as = {Row} className="flex-row">
                    <Col lg={{ span: 4, offset: 4 }}>
                      <Form.Control  type="number" placeholder="מספר" /> 
                    </Col>
                  </Form.Group>
                  <Form.Group as = {Row}>
                    <Form.Label column lg = {4}>מצאו לי תחנת דלק ברדיוס של</Form.Label>
                    <Col lg={4}>
                      <Form.Control type="number" placeholder="מספר" />
                    </Col>
                    <Col lg={4}>
                      <Form.Control as="select" defaultValue='ק"מ' dir="rtl">
                        <option>ק"מ</option>
                        <option>מטר</option>
                      </Form.Control>
                    </Col>
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

export default ModalGS;