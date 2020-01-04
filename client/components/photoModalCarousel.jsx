import React from 'react';
import { BackDrop, CloseButton, ModalImage, LeftButton, RightButton, Carousel} from '../styled.js';

const PhotoModalCarousel = (props) => {
    return (
      <BackDrop display={props.showModal ? 'visible' : 'none'}>
        <CloseButton onClick={() => props.togglePhotoModal('')}>X</CloseButton>
        <Carousel>
          <LeftButton>&lt;</LeftButton>
          <ModalImage src={props.targetImgUrl} />
          <RightButton>&gt;</RightButton>
        </Carousel>
      </BackDrop>
    )
  }

export default PhotoModalCarousel;
