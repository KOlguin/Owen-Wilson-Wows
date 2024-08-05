import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

import '../assets/styles/wowsCategory.css'

function WowsCategory(props) {
    // Obtenido de https://www.geeksforgeeks.org/how-to-toggle-play-pause-in-reactjs-with-audio/
    var state = {
 
        // Get audio file in a variable
        audio: new Audio(props.audio),
 
        // Set initial state of song
        isPlaying: false,
    };

    function PlayPause() {
        let isPlaying = state.isPlaying;
 
        if (isPlaying) {
            // Pause the song if it is playing
            state.audio.pause();
        } else {
 
            // Play the song if it is paused
            state.audio.play();
        }
 
        // Change the state of song
        setState({ isPlaying: !isPlaying });
    }
    
    return (
        <Container fluid>
        <Row>
            <Col>
                <Stack>
                    <p className='descriptionWow'><b>Nombre de la Película</b>: {props.movie}</p>
                    <p className='descriptionWow'><b>Año de Lanzamiento</b>: {props.year}</p>
                    <p className='descriptionWow'><b>Duración de la Película</b>: {props.movie_duration}</p>
                    <p className='descriptionWow'><b>Director</b>: {props.director}</p>
                    <p className='descriptionWow'><b>Nombre del Personaje de Owen Wilson</b>: {props.character}</p>
                    <p className='descriptionWow'><b>Linea en la que aparece el <i>wow</i></b>: {props.full_line}</p>
                    <p className='descriptionWow'><b>Momento en el cual se dice la línea anterior</b>: {props.timestamp}</p>
                    <p className='descriptionWow'><b>Audio con la línea anterior</b>:
                        <Button variant="secondary" size="sm" onClick={PlayPause} style={{backgroundColor: "#275dad", borderColor:"#275dad"}}>
                            Play | Pause
                        </Button>
                    </p>
                </Stack>
            </Col>
            <Col  id='imgColWow'>
                <img
                    src={props.poster}
                    id="imgPosterWow"
                    alt="Poster de la Película"
                />
            </Col>
        </Row>
        </Container>
    );
}

export default WowsCategory;