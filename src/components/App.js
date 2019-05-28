import React from 'react';
import PaginationContainer from '../containers/PaginationContainer';
import CharactersComponent from '../containers/CharactersComponent';
import Loading from '../containers/Loading';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import CharacterItem from '../containers/CharacterItem';

const App = ({ characters }) => {
  return (
    <Container>
      <Row style={{position: 'relative'}}>
        <PaginationContainer />
      </Row>
      <Loading />
      <Row>
        <CharactersComponent />
      </Row>
      <CharacterItem />
    </Container>
  );
};

export default App;
