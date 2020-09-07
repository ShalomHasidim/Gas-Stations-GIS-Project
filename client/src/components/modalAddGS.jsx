import React from 'react';
import {Button,Modal, Form, Col} from 'react-bootstrap';

function ModalAddGS(props) {
    return(
        <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        className = "modal">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <i className="fas fa-edit"></i>
            הוספת תחנת דלק חדשה
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Col lg={6}>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>שם תחנה</Form.Label>
                  <Col lg={10}>
                    <Form.Control id = "stationName" type="text" placeholder="" />
                  </Col>  
                </Form.Group>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>מספר תחנה</Form.Label>
                  <Col lg={10}>
                    <Form.Control id = "stationNumber" type="number" placeholder="" />
                  </Col>  
                </Form.Group>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>שם חברה</Form.Label>
                  <Col lg={10}>
                    <Form.Control id="companyName" as="select" defaultValue='ק"מ' dir="rtl">
                      <option>סונול</option>
                      <option>פז</option>
                      <option>דור אלון</option>
                    </Form.Control>
                  </Col>  
                </Form.Group>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>מספר טלפון</Form.Label>
                  <Col lg={10}>
                    <Form.Control id = "stationPhoneNumber" type="number" placeholder="" />
                  </Col>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>מחוז</Form.Label>
                  <Col lg={10}>
                    <Form.Control id = "district" type="text" placeholder="" />
                  </Col>
                </Form.Group>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>כתובת</Form.Label>
                  <Col lg={10}>
                    <Form.Control id = "city" type="text" placeholder="עיר" />
                  </Col>
                  <Col lg={10} className="padding-top">
                    <Form.Control id = "street" type="text" placeholder="רחוב" />
                  </Col>
                  <Col lg={10} className="padding-top">
                    <Form.Control id = "streetNumber" type="number" placeholder="מספר" />
                  </Col>
                </Form.Group>
                <Form.Group className="flex-group">
                  <Form.Label column lg={12}>שירותים זמינים בתחנה</Form.Label>
                    <Form.Row>
                    <Col lg={6}>
                      <Form.Check type="checkbox" label="מילוי גז וחשמל" />
                    </Col>
                    <Col lg={6}>
                      <Form.Check type="checkbox" label="חנות נוחות" />
                    </Col>
                    </Form.Row>


                </Form.Group>
              </Col>
              </Form.Row>
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

export default ModalAddGS;