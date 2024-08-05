import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../assets/styles/footer.css'

import logo from '../assets/Image/Logo.jpg'

function Footer() {
  return (
    <footer>
        <Container fluid>
            <Row>
                <Col>
                    <img
                        src={logo}
                        width="140px"
                        height="90px"
                        className="d-inline-block align-top"
                        alt="Logo de la Página"
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={8}>
                    <p className='footerInfo'>Descargo de responsabilidad:
                    <br />
                    Esta página web y la API Owen Wilson Wow no está afiliada, asociada, autorizada, respaldada ni conectada 
                    oficialmente de ninguna manera con Owen Wilson, ni con ninguna de sus subsidiarias o afiliadas. Todas 
                    las películas, productos y marcas mencionados en este sitio web son marcas comerciales y derechos de autor 
                    respectivos de sus propietarios</p>
                </Col>
                <Col sm={4}>
                    <p className='footerInfo'>2024 - Owen Wilson's Wows
                    <br /> by Katherine Olguín B.
                    <br /> Los iconos fueron obtendo en <a href='https://www.flaticon.es' id='footerLink'>Flaticon.es</a>.</p>
                </Col>
            </Row>
        </Container>
    </footer>
    
  );
}

export default Footer;