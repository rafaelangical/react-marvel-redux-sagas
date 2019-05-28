import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

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

    const { characters } = this.props;
    
    return (
    <div>
      { characters ? null :
      <button onClick={() => this.getData()} 
        style={{justifySelf:'center', alignSelf: 'center', 
        color: 'darkblue', height: '50px', border:
        '1px solid #a4a4a4', borderRadius: 6, margin: 10}}
      >Get data</button>
      }
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
    </div>
    )}
}

const mapDispatchToProps = {
  fetchCharacters: fetchCharacters,
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

PaginationContainer = connect(mapStateToProps,null)(PaginationContainer);
PaginationContainer = connect(null,mapDispatchToProps)(PaginationContainer);

export default PaginationContainer;