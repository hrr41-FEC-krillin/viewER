import React from 'react';
import { CastPhotosDiv, CastItem, CastImg, CastActor, CastCharacter } from '../styled.js';

const CastPhotos = (props) => {
  let last = 6;
  if (props.ifShow === true) {
    last = props.data.length;
  }
  return (
    <CastPhotosDiv>
      { props.data.slice(0, last).map(cast => {
        return (
          <CastItem key='castId'>
            <CastImg src={cast.imageUrl} alt={cast.actor}/>
            <CastActor>{cast.actor}</CastActor>
            <CastCharacter>as {cast.character}</CastCharacter>
          </CastItem>
        )
        })
      }
    </CastPhotosDiv>
  )
}

export default CastPhotos;
