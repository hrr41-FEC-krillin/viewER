import React from 'react';

const CastPhotos = (props) => {
  let last = 6;
  if (props.ifShow === true) {
    last = props.data.length;
  }
  return (
    <div className='cast-photos'>
      { props.data.slice(0, last).map(cast => {
        return (
          <div className='cast-item' key='castId'>
            <div className='cast-image'><img src={cast.imageUrl} width='100' height='120' /></div>
            <div className='cast-actor'>{cast.actor}</div>
            <div className='cast-character'>as {cast.character}</div>
          </div>
        )
        })
      }
    </div>
  )
}

export default CastPhotos;
