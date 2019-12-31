import React from 'react';
import { BackDrop, ModalImage } from '../styled.js';

const PhotoModal = (props) => {
    return (
      <BackDrop display={props.showModal ? 'visible' : 'none'}>
        <button onClick={() => props.togglePhotoModal('')}>X</button>
        <ModalImage src={props.targetImgUrl} />
      </BackDrop>
    )
  }

export default PhotoModal;
