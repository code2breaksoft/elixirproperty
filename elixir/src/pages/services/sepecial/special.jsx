import { Col, Row } from "react-bootstrap";
import XCard from "../../../components/xcard/xcard";
import sepcialData from "../../../data/special";

const Special = () => {
    const colStyle={
        marginBottom:"1rem",
    }
    return ( 
        <section className="maint">
            <Row className="maint-header">
                <h2>
                specialized-services
                </h2>
                <p>
                We as professionals provide specialized services to manage any break downs and repair works in concern to electrical, mechanical and plumbing areas.
</p>
            </Row>
    <Row>
        {
            sepcialData.map((data)=>(
                <Col xs={12} lg={12} style={colStyle}>
                <XCard title={data.title} text={data.text} image={"/images/special/"+data.image+".jpg"}/>
                </Col>
            ))
        }
    </Row>
    </section>
     );
}
 
export default Special;