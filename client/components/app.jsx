import React from 'react';
import CastPhotos from './castPhotos.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      casts: [
        {
          "castId": "1",
          "actor": "Analiese Elsworth",
          "character": "Jemmy Lyard",
          "imageUrl": "https://castphotos.s3-us-west-1.amazonaws.com/1.png",
          "role": "S",
          "__v": 0
        },
        {
          "castId": "2",
          "actor": "Minny McCallum",
          "character": "Dickie Jone",
          "imageUrl": "https://castphotos.s3-us-west-1.amazonaws.com/2.png",
          "role": "XS",
          "__v": 0
        }]
    };
    // this.fetch = this.fetch.bind(this);
  }

  // componentDidMount(){
  //   fetch();
  // }

  // fetch() {
  //   $.ajax({
  //     url: '/api/movie:id',
  //     method: 'GET',
  //     data: {id: 1},
  //     success: (res) => {
  //       console.log('clent got data:', res);
  //       this.setState({casts: res});
  //     },
  //     error: (err) => console.log('client ajax fail:', err)
  //   })
  // }

  render() {
    return (
      <div className="cast-section">
        <h2 className="cast-header">CAST</h2>
        <CastPhotos data={this.state.casts}/>
        <span>View All</span>
      </div>
    )
  }
}

export default App;
