import { Whatsapp } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import "./whatsapp.css";
const Whatsappicon = () => {
    const nav = useNavigate();
    return ( 
        <button id="chatIcon" onClick={()=>{
            window.location = "https://wa.me/971501438975"
        }}><Whatsapp/></button>
     );
}
 
export default Whatsappicon;