import React from "react";
import image from "./image.jpg"
import Image from 'react-bootstrap/Image'
import '../../App.css'
import './profile.css'
import { Col, Container, Row } from "react-bootstrap";
const App = () => {
return (
<>
<Container>
<Row>
<Col xs={6} md={6}>
    <Image width={171} height={180} src={image} className="image1" />
    </Col>
</Row>
</Container>

</>

);
};
export default App;