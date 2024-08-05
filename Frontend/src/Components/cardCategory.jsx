import React from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CardCategory(props) {
  return (
    <>
      <style type="text/css">
      {`
          .btn-primary {
            background-color: #275DAD; 
            color: #fff; 
            min-width: 100%; 
            width: 100%
          }

          .card-img-top {
            padding: 10%;
          }

          .card-title {
            text-align: center;
            font-family: Helvetica;
            font-weight: bold;
            font-size: 22px
          }


          .card-text {
            text-align: center;
            font-family: Helvetica;
            font-size: 15px
          }
            
          // Obtenido de https://stackoverflow.com/a/62327439
          .card {
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 200px;
            background: #fcfcfc;
            margin: 20px 40px;
            transition: 0.4s all;
            width: 800px;
            padding: 20px;
            margin-left: auto;
            margin-right: auto;
          }
      `}
      </style>

      <Card border="light">
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            {props.description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" href={props.route}>Ver Información</Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default CardCategory;