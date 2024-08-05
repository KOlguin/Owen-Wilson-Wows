import ListGroup from 'react-bootstrap/ListGroup';

import '../assets/styles/listCategory.css'

function ListCategory(props) {
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

export default ListCategory;