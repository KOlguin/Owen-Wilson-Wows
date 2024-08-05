import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

import '../assets/styles/posterCategory.css'

function PosterCategory(props) {
  return (
    <Container fluid>
      <Row>
        <Col className='imgCol'>
            <img
                src={props.poster}
                className="imgPoster"
                alt="Poster de la Película"
            />
        </Col>
        <Col>
            <div className='listDiv'>
                <ListGroup variant="flush">
                    <ListGroup.Item style={{borderWidth: 0}}><b>Nombre de la Película: </b>{props.movie}</ListGroup.Item>
                    <ListGroup.Item style={{borderWidth: 0}}><b>Año de Estreno:</b> {props.year}</ListGroup.Item>
                    <ListGroup.Item style={{borderWidth: 0}}><b>Director:</b> {props.director}</ListGroup.Item>
                    <ListGroup.Item style={{borderWidth: 0}}><b>Cantidad de wows en la película:</b> {props.total_wows_in_movie}</ListGroup.Item>
                </ListGroup>
            </div>
        </Col>
      </Row>
    </Container>
  );
}

export default PosterCategory;