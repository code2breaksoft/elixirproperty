import { Container ,Row} from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./whatsapp.css";
import { Telephone } from "react-bootstrap-icons";
const Whatsappicon = () => {
    const nav = useNavigate();
    return ( 
        <div>
            <Container fluid id="contact-fixed">
                <Row>
                <button id="whats"  onClick={()=>{
            window.location = "https://wa.me/971501438975"
        }}><Whatsapp/></button>
                </Row>
                <Row>
                    <button
                    onClick={()=>{
                        window.location = "tel:971501438975"
                    }}
                    ><Telephone/></button>
                </Row>
            </Container>
        </div>
     );
}
 
export default Whatsappicon;