import React from 'react';
import { CastPhotosDiv, CastItem, CastImg, CastActor, CastCharacter } from '../styled.js';

class CastPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.togglePhotoModal(e.target.dataset.idx);
  }

  render(){
    let last = 6;
    if (this.props.ifShow === true) {
      last = this.props.data.length;
    }
    return (
      <CastPhotosDiv>
        { this.props.data.slice(0, last).map((cast, index) => {
          return (
            <CastItem key={cast.castId} onClick={e => this.handleClick(e)}>
              <CastImg id={cast.castId} data-idx={index} src={cast.imageUrl} alt={cast.actor}/>
              <CastActor>{cast.actor}</CastActor>
              <CastCharacter>as {cast.character}</CastCharacter>
            </CastItem>
          )
          })
        }
      </CastPhotosDiv>
    )
  }
}

export default CastPhotos;
