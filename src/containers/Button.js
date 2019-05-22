import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

let Button=({ fetchCharacters })=>(
  <button onClick={fetchCharacters} style={{slignSelf: 'center'}}>Get data</button>
)

const mapDispatchToProps = {
  fetchCharacters: fetchCharacters,
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;