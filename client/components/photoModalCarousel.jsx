import React from 'react';
import { BackDrop, CloseButton, ModalImage, LeftButton, RightButton, Carousel} from '../styled.js';

const PhotoModalCarousel = (props) => {
    return (
      <BackDrop display={props.showModal ? 'visible' : 'none'}>
        <CloseButton onClick={() => props.togglePhotoModal(null)}>X</CloseButton>
        <Carousel>
          <LeftButton onClick={() => props.moveLeft()} color={props.currentImgIdx === 0 ? 'grey' : 'white'}>&lt;</LeftButton>
          <ModalImage src={props.currentImgIdx !== null ? props.data[props.currentImgIdx].imageUrl : ''} />
          <RightButton onClick={() => props.moveRight()} color={(props.currentImgIdx === props.data.length - 1) ? 'grey' : 'white'}>&gt;</RightButton>
        </Carousel>
      </BackDrop>
    )
  }

export default PhotoModalCarousel;
