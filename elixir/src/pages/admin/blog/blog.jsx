import axios from "axios";
import { useState } from "react";
import { Button, Col, Container, Row,Form ,Modal} from "react-bootstrap";
import qs from 'qs';
const Blog = () => {
    const [showAdd,setAdd] = useState(false);
    const [title,setTitle] = useState("");
    const [body,setBody] = useState("");
    const [img,setImg] = useState("");
    const [showDel,setDel] = useState(false);
    const [bData,setBData] = useState();
    const [did,setDid] = useState();
    const submitBlog = async()=>{
        try{
            if(title!==''){
                if(img!==''){
                    if(body!==''){
                        const data = new FormData();
                        data.append("title",title);
                        data.append("img",img);
                        data.append("body",body);
                        await axios.post("http://localhost:5000/addblog.php",data)
                        alert("Added new blog");
                    }
                    else{
                        alert("Body can't be empty")
                    }
                }
                else{
                    alert("Image can't be empty")
                }
            }
            else{
                alert("Title can't be empty")
            }
        }
        catch(e){
            alert("Error occurred!");
        }
    }
    const deleteBlog =async()=>{
        console.log(did);
    }
    return ( 
        <Container fluid>
            <Modal show={showAdd} onHide={()=>{setAdd(!showAdd)}} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Add blog post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Image</Form.Label>
                        <Form.Control onChange={(e)=>setImg(e.target.files[0])} type="file" placeholder="Enter image" accept='image/*' />
                    </Form.Group>
                    <Form.Group className="mb-3" >
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" onChange={(e)=>setBody(e.target.value)} rows={10} placeholder="Enter the body" accept='image/*' />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setAdd(!showAdd)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={submitBlog}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showDel} onHide={()=>{setDel(!showDel)}} size="lg">
                <Modal.Header closeButton>
                <Modal.Title>Delete blog post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" >
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="Enter title" />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={()=>{setDel(!showDel)}}>
                    Close
                </Button>
                <Button variant="primary" onClick={deleteBlog}>
                    Save Changes
                </Button>
                </Modal.Footer>
            </Modal>
            <Row>
                <Col lg={12}>
                    <h1>Blog</h1>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button variant="primary" onClick={()=>{setAdd(!showAdd)}}>Add blog</Button>
                </Col>
                <Col lg={12}>
                    <Button variant="primary" onClick={()=>{setDel(true)}}>Delete blog</Button>
                </Col>
            </Row>
        </Container>
     );
}
 
export default Blog;