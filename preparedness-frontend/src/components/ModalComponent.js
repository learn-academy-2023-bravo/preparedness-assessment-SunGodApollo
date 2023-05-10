import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Label,
  Form,
  FormGroup,
} from 'reactstrap';
import PropTypes from 'prop-types';
import "../App.css"




const ModalComponent = (props) => {

  const { className } = props
  const [modal, setModal] = useState(false)


  const [inputValue, setInputValue] = useState('')
  

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }


  const toggle = () => setModal(!modal)

  const handleResetClick = () => {
    setInputValue('')
  }




  return (

    <div className="container">
    <Form inline onSubmit={(e) => e.preventDefault()} className="form">
      <FormGroup>
        <Label for="name" className="label">Enter your name</Label>
        <Input 
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
        >
        </Input>
      </FormGroup>


      <Button onClick={toggle}>
        Click Me
      </Button>
      <Button onClick={handleResetClick}>
        Reset
      </Button>
    </Form>
    <Modal
      isOpen={modal}
      toggle={toggle}
      className={className}

    >
      <ModalHeader toggle={toggle}>Hello there {inputValue}!</ModalHeader>
      <ModalBody>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
      </ModalBody>

    </Modal>
  </div>
);
}

ModalComponent.propTypes = {
className: PropTypes.string,
};
  


export default ModalComponent
