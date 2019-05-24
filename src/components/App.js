import React from 'react';
import Button from '../containers/Button';
import CharactersComponent from '../containers/CharactersComponent';
import Loading from '../containers/Loading';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import CharacterItem from '../containers/CharacterItem';

const App = ({ characters }) => {
  return (
    <Container>
      <Button />
      <Loading />
      <CharactersComponent />
      <CharacterItem />
    </Container>
  );
};

export default App;
