import React, { Component, useState } from 'react';
import {Button,Modal} from 'react-bootstrap';

class SearchGS extends Component{
    
    render() { 
        const [modal, setModal] = useState(false);
        return ( 
            <Modal show = {this.modal} onHide = {() =>this.setModal(false)}>
                <Modal.Header closeButton>
                    Modal Head Part
                </Modal.Header>
                <Modal.Body>Hello there. You did it</Modal.Body>
                <Modal.Footer>
                    <Button onClick = {() =>this.setModal(false)}>Close Modal</Button>
                </Modal.Footer>
            </Modal>
          );
    }
}
 
export default SearchGS;