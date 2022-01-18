import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { auth, db } from "../firebase";
import { addDoc, collection ,serverTimestamp} from "firebase/firestore";
import {useNavigate} from 'react-router-dom'

function CreateBlog(props) {
  const navigate=useNavigate()
  const [values, setValues] = useState({
    title: "",
    article: "",
  });

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const blogCollections = collection(db, "blogs");

  const createBlog = async () => {
    await addDoc(blogCollections, {
      title: values.title,
      article: values.article,
      createdAt: serverTimestamp(),
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate('/blogs');
  };

  // console.log(new Date())
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header style={{ border: "none" }} closeButton></Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={values.title}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Article</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              type="text"
              name="article"
              value={values.article}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button disabled={!values.title|| !values.article} onClick={createBlog}>create</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateBlog;
