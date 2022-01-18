import React, { useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import NavbarComponent from "../components/Navbar";
import "../styles/blogs.css";
import { collection, getDocs,deleteDoc,doc } from "firebase/firestore";
import { db ,auth} from "../firebase";

function Blogs() {
  const[blogData,setBlogData]=useState([])
  const blogCollections = collection(db, "blogs")
  const handleDelete=async(id)=>{
    const postDoc=doc(db,'blogs',id);
    await deleteDoc(postDoc);
  }
  
  useEffect(()=>{
    const getBlogs=async()=>{
      const data=await getDocs(blogCollections);
setBlogData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getBlogs()
  },[handleDelete])
// let time=blogData.map(item=>{
// let a= item.createdAt.seconds
// let b=new Date(a* 1000)
// return b
// })


  return (
    <Container fluid>
      <NavbarComponent />
      <div className="grid-container">
          {blogData.map(blog=><div className="grid">
          <Card style={{width:"100%" ,height:'200px'}}>
            <Card.Body>
              <Card.Title style={{fontSize:'1.5rem',fontWeight:'bold'}}>{blog.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
               
              </Card.Subtitle>
       
              <Card.Text>
               {blog.article}
              </Card.Text>
              <Button onClick={()=>handleDelete(blog.id)} disabled={auth.currentUser.displayName!==blog.author.name}  variant="danger">Delete</Button>
              <Card.Subtitle style={{marginTop:'22px'}} className="mb-2 text-muted">
          author: <span style={{color:'black'}}>{blog.author.name}</span>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </div>)}
        
      </div>
    </Container>
  );
}

export default Blogs;
