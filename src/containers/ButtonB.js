import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../actions';

let ButtonB=({ fetchCharacterById })=>(
  <button onClick={fetchCharacterById} style={{slignSelf: 'center', color: 'red'}}>Get character by id</button>
)

const mapDispatchToProps = {
  fetchCharacterById: fetchCharacterById,
};

ButtonB = connect(null,mapDispatchToProps)(ButtonB);

export default ButtonB;
