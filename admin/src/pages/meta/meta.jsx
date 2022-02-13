import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row,InputGroup,FormControl ,Form, Button} from "react-bootstrap";
import { useForm } from "react-hook-form";
import qs from 'qs'
const Meta = () => {
    const { register, handleSubmit,reset } = useForm();
    const [data,setData] = useState({
        home:{},
        move:{},
        months:{},
        handover:{},
        resale:{},
    });
    const onSubmit = async(data)=>{
        try{
            await axios.post("http://localhost:5000/submitMeta.php",data)

            alert("Updated values!")
        }
        catch(e){
            alert("failed to update")
        }
    }
    useEffect(async()=>{
        const res = axios.get("meta.json");
        setData((await res).data)
        reset((await res).data);
    },[]);
    return ( 
        <Container fluid>
            <Form onSubmit={handleSubmit(onSubmit)}>

            <Row>
                <Col lg={12}>
                    <h3>Google universal tag</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control defaultValue={data.tag} {...register("tag")}  as="textarea" placeholder="google universal tag" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>Home page</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control defaultValue={data.homeTitle}  {...register("homeTitle")}  type="text" placeholder="title" />
                    <Form.Label>Desciption</Form.Label>
                    <Form.Control defaultValue={data.homeDescription} {...register("homeDescription")}  type="text" placeholder="description" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>Property handover</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control defaultValue={data.handOverTitle}  {...register("handOverTitle")} type="text" placeholder="title" />
                    <Form.Label>Desciption</Form.Label>
                    <Form.Control defaultValue={data.handOverDescription} {...register("handOverDescription")} type="text" placeholder="description" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>Resale Inspection</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control  defaultValue={data.resaleTitle} {...register("resaleTitle")}  type="text" placeholder="title" />
                    <Form.Label>Desciption</Form.Label>
                    <Form.Control   defaultValue={data.resaleDescription}  {...register("resaleDescription")}  type="text" placeholder="description" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>11 Months defect liability</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control  defaultValue={data.monthsTitle} {...register("monthsTitle")}  type="text" placeholder="title" />
                    <Form.Label>Desciption</Form.Label>
                    <Form.Control  defaultValue={data.monthsDescription}  {...register("monthsDescription")} type="text" placeholder="description" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>Move in/Move out inspection</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control  defaultValue={data.moveTitle} {...register("moveTitle")} type="text" placeholder="title" />
                    <Form.Label>Desciption</Form.Label>
                    <Form.Control  defaultValue={data.moveDescription}  {...register("moveDescription")} type="text" placeholder="description" />
                </Form.Group>
                </Col>
            </Row>
            <Row>
            <Col lg={12}>
                    <h3>About us</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  defaultValue={data.about} {...register("about")} as="textarea" placeholder="about us" rows={5} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>What is snagging?</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control  defaultValue={data.what}  {...register("what")} as="textarea" placeholder="text" rows={5} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <h3>Who needs Snagging?</h3>
                </Col>
                <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control   defaultValue={data.who} {...register("who")} as="textarea" placeholder="text" rows={5} />
                </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <Button variant="primary" type='submit'>Save changes</Button>
                </Col>
            </Row>
            </Form>
        </Container>
     );
}
 
export default Meta;