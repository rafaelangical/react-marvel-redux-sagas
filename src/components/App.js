import React from 'react';
import PaginationContainer from '../containers/PaginationContainer';
import CharactersComponent from '../containers/CharactersComponent';
import Loading from '../containers/Loading';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css'
import CharacterItem from '../containers/CharacterItem';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';
class App extends React.Component {

  componentDidMount() {
    const { fetchCharacters } = this.props;
    fetchCharacters(0, 20);
  }

  render() {
    return (
      <Container>
        <Row style={{padding: 20}}>
          <h1 style={{margin: '0 auto', alignSelf: 'center'}}>Marvel Characters</h1>
        </Row>
        <Loading />
        <Row>
          <CharactersComponent />
        </Row>
        <CharacterItem />
        <PaginationContainer />
      </Container>
    );
  }
};

const mapDispatchToProps = {
  fetchCharacters: fetchCharacters,
};

App = connect(null,mapDispatchToProps)(App);

export default App;
