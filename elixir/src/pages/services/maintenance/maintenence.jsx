import { Col, Row } from "react-bootstrap";
import XCard from "../../../components/xcard/xcard";
import mainteneceData from "../../../data/maintenence";
import "./maint.css";

const Maintenence = () => {
    const colStyle={
        marginBottom:"1rem",
    }
    return ( 
        <section className="maint">
            <Row className="maint-header">
                <h2>
                    Property maintenance
                </h2>
                <p>All property occupants look for regular maintenance to keep their acquired premises functional and elegant. Our team of experts are well equipped to carry out desired maintenance services
</p>
            </Row>
    <Row>
        {
            mainteneceData.map((data)=>(
                <Col xs={12} lg={12} style={colStyle}>
                <XCard title={data.title} text={data.text} image={"/images/maint/"+data.image}/>
                </Col>
            ))
        }
    </Row>
    </section>
);
}
 
export default Maintenence;