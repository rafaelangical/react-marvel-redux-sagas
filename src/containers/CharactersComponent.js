import React from 'react';
import { connect } from 'react-redux'
import { Row, Card, Button } from 'react-bootstrap';
import { fetchCharacterById } from '../actions';  

let CharactersComponent = ({ characters, fetchCharacterById, error }) => (
  <Row style={{margin: '0 auto', padding: 20}}>
  {characters ?
  characters.map((item,id) => {
    return (
      <Card  key={id} style={{ justifyContent: 'center', alignItems:'center',  width: '300px', height: '400px', margin: '20px auto ', border:'1px solid #a4a4a4', padding: 10, borderRadius: 4}}>
        <Card.Img variant="top" style={{ width: '90%', height: '45%' }} src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='image-thumbnail'/>
        <Card.Body>
          <Card.Title style={{ height: '15%' }}>{item.name}</Card.Title>
          <Card.Text style={{ height: '35%'}}>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
        <Button onClick={(id) => fetchCharacterById(`${item.id}`)} style={{ height: '20%' }} variant="primary" color="primary">Details</Button>
        </Card.Body>
      </Card>
    );  
  })
  : null
  }
  {error ? <h1>Error</h1> : null}
  </Row>
);

const mapStateToProps = (state) => ({
  characters: state.characters,
  error: state.error
});

const mapDispatchToProps = {
  fetchCharacterById: fetchCharacterById,
};

CharactersComponent = connect(mapStateToProps,null)(CharactersComponent);
CharactersComponent = connect(null,mapDispatchToProps)(CharactersComponent);

export default CharactersComponent;