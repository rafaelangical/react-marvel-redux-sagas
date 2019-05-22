import React from 'react';
import Button from '../containers/Button';
import ButtonB from '../containers/ButtonB';
import CharactersComponent from '../containers/CharactersComponent';
import Loading from '../containers/Loading';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'

const App = ({ characters }) => {
  return (
    <Container>
      <Row style={{display: 'flex', flex: 1, backgroundColor: '#444', height: '70px', alignContent: 'center', justifyContent: 'center' }}>
        <Button />
        <ButtonB />
      </Row>
      <Loading style={{width: '80%', height: '80%'}}/>
      <CharactersComponent />
    </Container>
  );
};

export default App;
