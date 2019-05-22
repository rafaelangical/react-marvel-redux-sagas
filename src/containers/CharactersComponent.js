import React from 'react';
import { connect } from 'react-redux'
import { Row, Col, Card, Button } from 'react-bootstrap';

let CharactersComponent = ({ characters }) => (
  <Row style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems:'center', margin: '0 auto', padding: 20}}>
  {characters ?
  characters.map((item,id) => {
    return (
      <Card style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', justifyContent: 'space-around', alignItems:'center',  width: '250px', height:'450px', margin: '20px auto ', border:'1px solid #a4a4a4', padding: 10, borderRadius: 4}}>
        <Card.Img variant="top" style={{width: '80%', height: '50%', alignSelf: 'center'}} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='image-thumbnail'/>
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        <Button variant="primary" color="primary" style={{border: '1px solid blue', borderRadius: 4, height: 40, width: 90}}>Details</Button>
        </Card.Body>
      </Card>
    );  
  })
  : null
  }
  </Row>
);

const mapStateToProps = (state) => ({
  characters: state.characters,
})

CharactersComponent = connect(mapStateToProps,null)(CharactersComponent)

export default CharactersComponent;