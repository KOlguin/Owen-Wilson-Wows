import React, { useState } from 'react'

import ListGroup from 'react-bootstrap/ListGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import '../assets/styles/listCategory.css'

function ListCategory(props) {
    var descendingInformationArray = JSON.parse(JSON.stringify(props.info));
    var ascendingInformationArray = JSON.parse(JSON.stringify(props.info))
    var originalInformationCopy = JSON.parse(JSON.stringify(props.info))

    const [sortState, setSortState] = useState("DEFAULT")

    const sortMethods = {
        ASCENDING: { method: undefined},
        DESCENDING: { method: (a, b) => (a > b ? -1 : 1) }
    }

    var sortList = {
        DEFAULT: originalInformationCopy,
        ASCENDING: ascendingInformationArray.sort(),
        DESCENDING: descendingInformationArray.sort().reverse()
    }

    return (
        <>
            <DropdownButton id="dropdown-basic-button" title="Orden" defaultValue={'DEFAUL'} onSelect={(e) => setSortState(e)}>
                <Dropdown.Item eventKey="DEFAULT">Orden Original</Dropdown.Item>
                <Dropdown.Item eventKey="ASCENDING">Orden Ascendente</Dropdown.Item>
                <Dropdown.Item eventKey="DESCENDING">Orden Descendente</Dropdown.Item>
            </DropdownButton>

            <div className='listDiv'>
                <ListGroup variant="flush">
                {
                    sortList[sortState].map(item => <ListGroup.Item key={item} style={{borderWidth: 0}}>{item}</ListGroup.Item>)
                }
                </ListGroup>
            </div>
        </>
        
    );
}

export default ListCategory;