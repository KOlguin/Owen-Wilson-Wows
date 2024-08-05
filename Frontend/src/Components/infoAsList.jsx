import ListGroup from 'react-bootstrap/ListGroup';

import '../assets/styles/infoAslist.css'

function InfoList(props) {
    var informationArray = props.info

    return (
        <div className='listDiv'>
            <ListGroup variant="flush">
            {
                informationArray.map(item => <ListGroup.Item style={{borderWidth: 0}}>{item}</ListGroup.Item>)
            }
        </ListGroup>
        </div>
    );
}

export default InfoList;