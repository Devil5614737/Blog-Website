import { Button, Modal } from "react-bootstrap";

function LoginUser(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body style={{margin:'0 auto'}}>
       <Button >Login with google</Button>
        </Modal.Body>
    
      </Modal>
    );
  }

  
  export default LoginUser;