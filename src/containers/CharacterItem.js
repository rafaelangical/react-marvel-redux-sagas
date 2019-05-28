import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { closeModal } from '../actions';

let CharacterItem = ({ characterById, closeModal }) => (
  characterById ?
  <Modal.Dialog aria-labelledby="contained-modal-title-vcenter" centered style={{ justifySelf: 'center', alignSelf: 'center', margin: '0 auto', padding: 0, position: 'fixed', top: 0, left: 0, right: 0, bottom:0, width:'80%' }} >
    <Modal.Header closeButton={false}>
      <Modal.Title style={{ color: 'darkorange', width: '90%', margin: '0 auto'}}>{characterById.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body style={{ width: '90%', margin: '0 auto'}}>
      <p>{characterById.description !== '' ? characterById.description : 'No Description'}</p>
      <p style={{color: 'darkblue'}}>Comics:</p>
      {characterById.comics.items.slice(0,5).map((item,id) => {
        return(
          <ul key={id}><li>{item.name !== '' ? item.name : 'No comics'}</li></ul>
        );
      })}
    </Modal.Body>

    <Modal.Footer>
      <Button variant="secondary" onClick={closeModal}>Close</Button>
    </Modal.Footer>
  </Modal.Dialog>
  :
  null
);

const mapStateToProps = (state) => ({ characterById: state.characterById })

CharacterItem = connect(mapStateToProps,null)(CharacterItem)

const mapDispatchToProps = {
  closeModal: closeModal,
};

CharacterItem = connect(null,mapDispatchToProps)(CharacterItem);

export default CharacterItem;