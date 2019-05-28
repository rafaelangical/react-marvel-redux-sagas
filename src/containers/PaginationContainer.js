import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';
import { Row } from 'react-bootstrap';
class PaginationContainer extends React.Component{
  constructor(props){
    super();
    this.state = {
      limit: 20,
      offset: 0
    }
  }

  getData = async () => {
    const { fetchCharacters } = this.props;    
    const { offset, limit } = await this.state;

    await fetchCharacters(offset, limit);
    window.scrollTo(0, 0);
  }
  getMoreData = async () => {
    if(this.state.offset === 900){
      await this.setState({ offset: 900 })
    }
    await this.setState({offset: this.state.offset + 20});
    this.getData();
  }

  getLessData = async () => {
    if(this.state.offset === 0){
      await this.setState({ offset: 0})
    }
    await this.setState({offset: this.state.offset - 20});
    this.getData();
  }

  render() {
    
    return (
    <Row style={{justifyContent: 'center', alignItems: 'center'}}>
      {this.state.offset === 0 ? null : 
        <button onClick={() => this.getLessData()} 
          style={{justifySelf:'center', alignSelf: 'center', 
          color: 'darkblue', height: '50px', border:
          '1px solid #a4a4a4', borderRadius: 6, margin: 10}}
        >Get Less data</button>}
      {this.state.offset === 900 ? null :
        <button onClick={() => this.getMoreData()} 
          style={{justifySelf:'center', alignSelf: 'center', 
          color: 'darkblue', height: '50px', border:
          '1px solid #a4a4a4', borderRadius: 6, margin: 10}}
        >Get More data</button>
      }
    </Row>
    )}
}

const mapDispatchToProps = {
  fetchCharacters: fetchCharacters,
};

PaginationContainer = connect(null,mapDispatchToProps)(PaginationContainer);

export default PaginationContainer;