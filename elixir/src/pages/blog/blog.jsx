import Footer from "../../components/footer/footer";
import Header from "../../components/Header/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import {Container, Row,Accordion} from "react-bootstrap";
import "./blog.css";
import SubHeader from "../../components/subheader/subheader";
const Blog = () => {
    const [blog,setBlog] = useState([]);
    useEffect(async()=>{
        let res = await axios.get("/blog/blog.json");
        setBlog(res.data)
    },[]);
    return ( 
        <>
            <SubHeader/>
                <Container fluid className="blog-wrapper">
                    <Row>
                        <h1>Blog</h1>
                    </Row>
                    <Row>
                    {
                        blog.map((item,key)=>(
                            <Accordion>
  <Accordion.Item eventKey={key}>
    <Accordion.Header>{item.title}</Accordion.Header>
    <Accordion.Body>
        <img className="blog-img" src={"blog/img/"+item.image}/><br/>
                            {
                                item.text
                            }
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                        ))
                    }
                    </Row>
                </Container>
            <Footer/>
        </>
     );
}
 
export default Blog;
