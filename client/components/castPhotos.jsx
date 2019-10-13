import React from 'react';

const CastPhotos = (props) => (
  <div className='cast-photos'>
    { props.data.map(cast => {
       return (
        <div className='cast-item' key='castId'>
          <div className='cast-image'><img src={cast.imageUrl} width='100' height='120' /></div>
          <div className='cast-actor'>{cast.actor}</div>
          <div>as</div>
          <div className='cast-character'>{cast.character}</div>
        </div>
       )
      })
    }
  </div>
)

export default CastPhotos;
