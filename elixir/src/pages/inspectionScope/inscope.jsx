import { Container, Row,Col } from "react-bootstrap";
import Footer from "../../components/footer/footer";
import Whatsappicon from "../../components/whatsapp/whatsapp";
import "./inspection.css";
import Header from "../../components/Header/Header";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
function importAll() {
    let ar = [];
    for(let i=1;i<=9;i++){
        ar.push(require(`../../images/detail/${i}.png`));
    }
    return ar;
}
function importAll2() {
    let ar = [];
    for(let i=1;i<=18;i++){
        ar.push(require(`../../images/scope/${i}.png`));
    }
    return ar;
}
const InspectionScope = () => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    let images = importAll();
    let img = importAll2();
    const [mob,setMobile] = useState(false);
    useEffect(()=>{
        if(window.innerWidth<787){
            setMobile(true);
        }
    },[])
    return ( 
        <>
            <Header/>
            <Whatsappicon/>
            <section className="inspection-wrapper">
            <Container fluid>
                <Row>
                    <Col>
                        <h2>Property Inspection scope</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className="inspection-snag">
                    <h4>Why Property snagging?</h4>
                        <p>Many experts will say that snagging is more important now than ever before. New house building is at record levels – and developers are under pressure to complete every house quickly – but there’s a shortage of many skilled trades. So there’s more potential for things to go wrong. Snagging is the process of comprehensive inspection before purchasing a New Property from the Developer.</p>
                    </Col>
                </Row>
                <Row className="detail-header">
                    <h4>Detailed scope of 
                        provided services
                    </h4>
                </Row>
                <Row className="detail-list">
                    <Col>
                        <ul>
                        <li><img src={images[0]}/><br/>Inspection of Air conditioning units</li>
                        <li><img src={images[1]}/><br/>Inspection of fixed electrical units</li>
                        <li><img src={images[8]}/><br/>Visual inspection of external balcony</li>
                        <li><img src={images[3]}/><br/>Thermal Inspection</li>
                        </ul>
                    </Col>
                    <Col>
                        <ul id="second-list">
                        <li><img src={images[4]}/><br/>Rooftop Inspection of Mechanical Equipments</li>
                        <li><img src={images[5]}/><br/>Water Tank System and Pump Systems</li>
                        <li><img src={images[6]}/><br/>Power Socket Checking</li>
                        <li><img src={images[7]}/><br/>Visual Inspection of Interior Elements & Finishes</li>
                        </ul>
                    </Col>
                </Row>
                <div className="scope-list">
                <Row className="snag-props-list">

                    <p>Air Conditioning & Ventilation </p>
                    <img src={img[9]}/>
                    <ul>
	<li> Check if air conditioning is cooling to desired setting</li>
	<li>     Check if thermostat set temperature does not have (+/- 2˚C) difference</li>
	<li>     Check thermostat display reading is visible and clear</li>
	<li>     Check if fresh air supply coming in from the fresh air supply grille</li>
	<li>     Check if the exhaust / air extract fans are working properly</li>
	<li>     Check if AC grilles / diffusers are clean & free from molds / mildews</li>
	<li>     Check if for any unusual sound or noise</li>
	<li>     Check for unusual smell</li>
	<li>     Check for any signs of water leakage coming from air conditioning system</li>
	<li>     Check for excessive condensation and moisture at the AC supply grill area</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Electrical</p>
                    <img src={img[8]}/>
                    <ul>
	<li> Switched on and check all light fixtures if working properly, check for flickering light.</li>
	<li>     Check all switches if securely fixed and operating as intended</li>
	<li>     Check for any exposed electrical cables and wires</li>
	<li>     Check all electrical sockets for power and if securely fixed</li>
	<li>     Check for any signs of burn marks on or around switches & sockets</li>
	<li>     Check for exposed electrical PVC conduits</li>
	<li>     Check for Electrical Distribution Board (DB) are fixed securely & accessible</li>
	<li>     Check circuit breakers inside DB if properly labelled</li>
	<li>     Check if cables within the DB identified with tags</li>
	<li>     Check if there is a copy of Approved Electrical Load Schedule posted securely inside the DB</li>
	<li>     Check if void space inside the DB fitted safely and securely with a blank plate</li>
	<li>     Check if water heater is working when switched on.</li>
	<li>     Check if Electrical Floor Boxes fixed securely & levelled with the floor</li>
	<li>     Check for any exposed electrical cable above the ceiling without conduit</li>
	<li>     Check for visible marks, stains, cracks on the face plate of electrical switch and sockets</li>
	<li>     Checked if electrical socket in external areas such as balconies, decks, terrace, etc. are of weather proof type.</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Sanitary and Plumbing</p>
                    <img src={img[7]}/>
                    <ul>
	<li> Check overall condition of sanitary wares, fittings and accessories if installed properly and securely.</li>
	<li>     Check for marks, stain, scratches, dents, cracks</li>
	<li>     Check for signs of defects, wear and tear</li>
	<li>     Check the water pressure at taps, showers, and hand shut-off if to acceptable level</li>
	<li>     Check WC operation if flushing & refilling properly</li>
	<li>     Check if hot and cold mixer are operating properly and correctly connected</li>
	<li>     Check for sing of water dripping when tap, shower, shut-off or bidet are completely or tightly shut off</li>
	<li>     Check for signs of water leakage</li>
	<li>     Check if water drains properly from bathtub, wash basin and sink</li>
	<li>     Check if water flow & drains properly towards floor drains</li>
	<li>     Check if pipes & fittings are free from rust, corrosion, erosion and leaks</li>
	<li>     Check condition of toilet mirrors if clean and free from marks, scratches or cracks</li>
	<li>     (If applicable) Check shower door, enclosure and seal if installed properly and securely</li>
	<li>     Check if floor drain cover, strainer, drain cap is fixed</li>
	<li>     Check operation of tub and wash basin drain plug if working properly.</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Thermal Inspection</p>
                    <img src={img[11]}/>
                    <ul>
	<li> Thermal Inspection around the window frames.</li>
	<li>     Thermal Inspection around the Door frames.</li>
	<li>     Check moisture on the wall and ceiling.</li>
	<li>     Check for sealant application around termination.</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Utility Services: (Applies to Villas & Townhouses)</p>
                    <img src={img[17]}/>
                    <ul>
	<li> Check if DEWA (Electrical and water) Meter is installed and securely fitted in the Meter Box</li>
	<li>     Check for exposed electrical cables and wires</li>
	<li>     Check the pump room structure / enclosure overall condition. If pump room is under ground, check if sump pit and sump pump is provided and in good condition.</li>
	<li>     Check water pumps, motors & pressure gauges condition and if working properly. Check if gauges are working and readable.</li>
	<li>Check for sign of wear and tear on the equipment’s, fittings and connections.</li>
	<li>     Check the water tanks condition and its components (valves, fittings, etc) and check for leakage.</li>
	<li>     Check for signs of water leakage on the external piping / plumbing system.</li>
	<li>     Check the condition of the centralized water heater & cooling equipment’s and its components, Check for signs of wear and</li>
	<li>tear. Check for signs of water leaks.</li>
	<li>     Check the condition of the Air Conditioning outdoor units. Check for signs of wear and tear and unusual noise. Check for visible damage. Check for excessive water leakage beyond the normal condensate water.</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Gypsum False Ceiling and Bulkheads</p>
                    <img src={img[1]}/>
                    <ul>
                        <li>    Check for ceiling undulation and sagging</li>
                        <li>    Check for holes, cracks, scratches and bumps</li>
                        <li>    Check for visible marks and stains</li>
                        <li>    Check for quality of finishing around ceiling units such as light fixture, AC grille, Smoke detector, Fire sprinkler, etc.</li>
                        <li>    Check for quality of finishing at joints, edges, corners and terminations.</li>
                        <li>    Check if any paint is peeling off or is bubbly</li>
                        <li>    Check for quality of the finishing of ceiling access panels.</li>
                        <li>    (For Ceiling Tiles) Check for grid alignment, ceiling gaps, and terminations</li>
                    </ul>
                </Row>

                <Row className="snag-props-list">
                    <p>Flooring and Skirting - Applies to Villa, Townhomes, Apartments, Offices</p>
                    <img src={img[2]}/>
                <ul>
                    <li>Check for Paint, wall covering, and paneling in good condition</li>
                    <li>    Check for wall undulation and straightness</li>
                    <li>    Check for holes, cracks, scratches and bumps</li>
                    <li>    Check for visible marks and stains</li>
                    <li>    Check for any excessive paint runs</li>
                    <li>    Check for quality of finishing around wall units such as light switch, electrical sockets,</li>
                    <li>    Check for quality of finishing at joints, edges, corners and terminations.</li>
                    <li>    Check if any paint and/or wall covering is peeling off or is bubbly</li>
                </ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Windows</p>
                    <img src={img[3]}/>
                    <ul>
                        <li>Check for Paint, wall covering, and paneling in good condition</li>
                        <li>    Check for wall undulation and straightness</li>
                        <li>    Check for holes, cracks, scratches and bumps</li>
                        <li>    Check for visible marks and stains</li>
                        <li>    Check for any excessive paint runs</li>
                        <li>    Check for quality of finishing around wall units such as light switch, electrical sockets,</li>
                        <li>    Check for quality of finishing at joints, edges, corners and terminations.</li>
                        <li>    Check if any paint and/or wall covering is peeling off or is bubbly</li>
                    </ul>
                </Row>

                <Row className="snag-props-list">
                    <p>Carpentry / Joinery</p>
                    <img src={img[4]}/>
                    <ul>
                    <li> Check for Paint, wall covering, and paneling in good condition</li>
                    <li>     Check for wall undulation and straightness</li>
                    <li>     Check for holes, cracks, scratches and bumps</li>
                    <li>     Check for visible marks and stains</li>
                    <li>     Check for any excessive paint runs</li>
                    <li>     Check for quality of finishing around wall units such as light switch, electrical sockets,</li>
                    <li>     Check for quality of finishing at joints, edges, corners and terminations.</li>
                    <li>     Check if any paint and/or wall covering is peeling off or is bubbly</li>
                </ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Doors</p>
                    <img src={img[5]}/>
                    <ul>
	<li>Shutter, Frames, & Architraves</li>
	<li>    Check if doors are opening & closing properly / smoothly</li>
	<li>    Check for any noticeable noise while operating the door</li>
	<li>    Check for visible marks, scratches, dents and stains</li>
	<li>    Check for any sign of wood rot</li>
	<li>    Check if door seal are in place and are not damaged</li>
	<li>    Check for large gaps between doors & their frames. Should not be more than 6mm</li>
	<li>    Check for large gaps between doors & the associated floor finish. Should not be more than 6mm</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Iron mongeries</p>
                    <img src={img[6]}/>
                    <ul>
	<li> Check latches, bolts, locks & hinges if working properly & free from any damages or defects</li>
	<li>     Check if Any screws are missing from the hinges, handles or lock plates</li>
	<li>     Check keys with locks to see if working and turning properly and easily</li>
	<li>     Check keys for sign of bend and rust</li>
	<li>     (If Applicable) Check door closer operation if working properly and without noise</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Fire Protection System – (where applicable)</p>
                    <img src={img[10]}/>
                    <ul>
	<li> Check for provision of fire sprinkler system</li>
	<li>     Check for provision of fire detection and alarm system</li>
	<li>     Check for provision of emergency lights and exits lights</li>
	<li>     Check for provision of portable fire extinguisher</li>
	<li>     Check for provision of fire alarm panel and see if it indicators shows healthy or faults</li>
	<li>     Check for provision of fire blanket</li>
	<li>     Check for provision of gas detector with alarm system</li>
	<li>     Check for provision of pre-action system for electrical and similar rooms</li>
	<li>     Check for provision of fire blanket in kitchen and similar areas</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Appliance (where applicable)</p>
                    <img src={img[12]}/>
                    <ul>
	<li> Check all provided electrical appliances if powering on</li>
	<li>     Check general condition of appliances if clean inside and out</li>
	<li>     Check for any indication of damage</li>
	<li>     Check for water leakage (where applicable)</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>External / Facade</p>
                    <img src={img[14]}/>
                    <ul>
	<li> Check finishing condition, check for cracks, chipping and gaps.</li>
	<li>     Check for significant marks and stain, excessive paint and mortar filling</li>
	<li>     Check for external pavement condition</li>
	<li>     Check external lighting if working, check for flickering lights.</li>
	<li>     Check external power outlets if weatherproof type and check condition</li>
	<li>     Check roof deck condition, check for blocked drains, check if in clean and tidy. Check for loose objects and other safety hazard such as expose electrical wires, flammable compound left on the roof, etc.</li>
	<li>     Check roof access ladder’s condition if fixed securely and check for signs of safety hazard.</li>
</ul>
                </Row>

                <Row className="snag-props-list">
                    <p>Gate and Boundary Wall</p>
                    <img src={img[15]}/>
                    <ul>
	<li> Check overall condition of boundary wall, check for cracks, damage, obvious marks and stains</li>
	<li>     (if applicable) check boundary wall lights if all are turning on and check for faulty and flickering lights.</li>
	<li>     Check gate condition, check for operation</li>
	<li>     Check gate mechanism condition</li>
	<li>     Check gate finishing condition</li>
	<li>     (if applicable) Check automated garage door overall condition and operation. Check garage operation with manual switch and with provided remote.</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Lawn / Landscaping: (Applies to Villas & Townhouses)</p>
                    <img src={img[16]}/>
                    <ul>
	<li> (If applicable) Check if there is existing landscaping, check the condition</li>
	<li>     (If applicable) Check condition of irrigation system. Check what type of system is being used, manual or automatic. Check for water pressure and leakage.</li>
</ul>
                </Row>
                <Row className="snag-props-list">
                    <p>Miscellaneous</p>
                    <img src={img[13]}/>
                    <ul>
	<li> Check doorbell if working properly and installed securely and neatly</li>
	<li>     Check intercom system if working properly and installed securely and neatly</li>
	<li>     Check condition of stair thread, riser and handrail. Check for sign of damage, permanent marks and stains, scratches. check handrail if installed securely. Check finishing at joints and terminations, (where applicable)</li>
</ul>
                </Row>
                </div>
            </Container>
        </section>
            <Footer/>
        </>
     );
}
 
export default InspectionScope;