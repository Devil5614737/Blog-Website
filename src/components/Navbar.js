import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";
import LoginUser from "./LoginUser";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useContext } from "react";
import { Context } from "../Context";

const NavbarComponent = () => {
  const navigate=useNavigate()
  const { user, setUser, isAuth, setIsAuth } = useContext(Context);
  const [modalShow, setModalShow] = useState(false);

  // implementing google login system
  const google = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        const user = result.user;
        localStorage.setItem("username",JSON.stringify(user.displayName));
        navigate('/blogs')
        localStorage.setItem("token", token);
        setIsAuth(true);
      })
      .catch((error) => {
        if (error) {
          window.alert("something went wrong..");
        }
      });
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate('/')
  };
  let username=localStorage.getItem('username')

  return (
    <Navbar
      bg="dark"
      variant="dark"
      style={{ position: "relative", zIndex: 1 }}
    >
      <Container>
        <Link style={{ textDecoration: "none" }} to="/">
          <Navbar.Brand href="#!">BloggersHub</Navbar.Brand>
        </Link>
        <Nav className="me-auto">
          <Link style={{ textDecoration: "none" }} to="/">
            <Nav.Link href="#home">Home</Nav.Link>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/blogs">
            <Nav.Link href="#blogs">Blogs</Nav.Link>
          </Link>
        </Nav>
        <Nav>
          {localStorage.getItem('token') &&<Nav.Link href="#username">{auth.currentUser &&auth.currentUser.displayName}</Nav.Link>}
          
          {localStorage.getItem("token") ? (
            <Nav.Link href="#login" onClick={handleLogout}>
              Logout
            </Nav.Link>
          ) : (
            <Nav.Link
              href="#login"
              onClick={() => setModalShow(true)}
              onClick={google}
            >
              Login
            </Nav.Link>
          )}

          <LoginUser show={modalShow} onHide={() => setModalShow(false)} />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
