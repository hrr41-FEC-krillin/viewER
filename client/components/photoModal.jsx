import React from 'react';
import { BackDrop, CloseButton, ModalImage } from '../styled.js';

const PhotoModal = (props) => {
    return (
      <BackDrop display={props.showModal ? 'visible' : 'none'}>
        <CloseButton onClick={() => props.togglePhotoModal('')}>X</CloseButton>
        <ModalImage src={props.targetImgUrl} />
      </BackDrop>
    )
  }

export default PhotoModal;
