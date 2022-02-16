import { Tabs,Tab } from "react-bootstrap";
import SubHeader from "../../components/subheader/subheader";
import Blog from "./blog/blog";
import Faq from "./faq/faq";
import HomePage from "./homepage/home";
import Meta from "./meta/meta";
import Sample from "./sample/sample";
const Admin = () => {
    return ( 
        <>
            <header>
                <SubHeader/>
            </header>
            <main>
            <Tabs defaultActiveKey="meta" className="mb-3">
                <Tab eventKey="meta" title="Meta Data">
                    <Meta/>
                </Tab>
                <Tab eventKey="sample" title="Sample Report">
                    <Sample/>
                </Tab>
                <Tab eventKey="faq" title="Faq">
                    <Faq/>
                </Tab>
                <Tab eventKey="blog" title="Blog">
                    <Blog/>
                </Tab>
            </Tabs>
            </main>
        </>
     );
}
 
export default Admin;