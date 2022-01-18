import React from "react";
import { Button, Container } from "react-bootstrap";
import CreateBlog from "../components/CreateBlog";
import NavbarComponent from "../components/Navbar";
import "../styles/home.css";

function Home() {
    const [modalShow, setModalShow] = React.useState(false);

  return (
    <div className="hero-container">
      <Container fluid>
        <NavbarComponent />
        <Container className="title-container">
          <p className="title">Only the best topics written </p>
          <p className="sub-title">
            create wonderful blogs with a couple of minutes..
          </p>
          <Button  onClick={() => setModalShow(true)} className="blog-btn" variant="outline-primary">
            create blog
          </Button>
          <CreateBlog  show={modalShow} onHide={()=>setModalShow(false)}/>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
