import React from 'react';
import { connect } from 'react-redux'
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import { closeModal } from '../actions';

let CharacterItem = ({ characterById, closeModal }) => (
  characterById ?
  <Modal.Dialog aria-labelledby="contained-modal-title-vcenter" centered style={{ justifySelf: 'center', alignSelf: 'center', marginTop: '0 auto', padding: 0, position: 'absolute', top: 0, left: 0, right: 0, bottom:0 }} >
    <Modal.Header closeButton={false}>
      <Modal.Title>{characterById.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <p>{characterById.description !== '' ? characterById.description : 'No Description'}</p>
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