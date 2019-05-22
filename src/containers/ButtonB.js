import React from 'react';
import { connect } from 'react-redux';
import { fetchCharacterById } from '../actions';

let ButtonB=({ fetchCharacterById })=>(
  <button onClick={fetchCharacterById} style={{justifySelf:'center', alignSelf: 'center', color: 'red', height: '50px', border:'1px solid #a4a4a4', borderRadius: 6}}>Get character by id</button>
)

const mapDispatchToProps = {
  fetchCharacterById: fetchCharacterById,
};

ButtonB = connect(null,mapDispatchToProps)(ButtonB);

export default ButtonB;
