import React from 'react';
import { connect } from 'react-redux'

let CharactersComponent = ({ characters }) => (
  characters ?
  characters.map((item,id) => {
    return (
      <div key={id}>
        <h1>Name: <small>{item.name}</small></h1>
        {item.series.items.map((item,id) => {
          return (
            <ul key={id}>
              <li>{item.name}</li>
            </ul>
          )
        })}
      </div>
    );  
  })
  : null
);

const mapStateToProps = (state) => ({
  characters: state.characters,
})

CharactersComponent = connect(mapStateToProps,null)(CharactersComponent)

export default CharactersComponent;