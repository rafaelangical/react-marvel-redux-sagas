import React from 'react';
import Button from '../containers/Button';
import ButtonB from '../containers/ButtonB';
import CharactersComponent from '../containers/CharactersComponent';
import Loading from '../containers/Loading';
import { Container } from 'react-bootstrap';

const App = ({ characters }) => {
  return (
    <Container>
      <Button />
      <ButtonB />
      <Loading />
      <CharactersComponent />
    </Container>
  );
};

export default App;
