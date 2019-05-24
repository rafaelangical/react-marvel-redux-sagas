import React from 'react';
import Button from '../containers/Button';
import ButtonB from '../containers/ButtonB';
import CharactersComponent from '../containers/CharactersComponent';
import Loading from '../containers/Loading';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import CharacterItem from '../containers/CharacterItem';

const App = ({ characters }) => {
  return (
    <Container>
      <Row>
        <Col>
          <Button />
          <ButtonB />
        </Col>
      </Row>
      <Loading />
      <CharactersComponent />
      <CharacterItem />
    </Container>
  );
};

export default App;
