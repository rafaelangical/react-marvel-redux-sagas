import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacters } from '../actions';

let Button=({ fetchCharacters })=>(
  <button onClick={fetchCharacters} style={{justifySelf:'center', alignSelf: 'center', color: 'darkblue', height: '50px', border:'1px solid #a4a4a4', borderRadius: 6, margin: 10}}>Get data</button>
)

const mapDispatchToProps = {
  fetchCharacters: fetchCharacters,
};

Button = connect(null,mapDispatchToProps)(Button);

export default Button;