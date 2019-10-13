import React from 'react';
import $ from 'jquery';
import CastPhotos from './castPhotos.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      casts: []
    };
    this.fetch = this.fetch.bind(this);
  }

  componentDidMount(){
    this.fetch();
  }

  fetch() {
    $.ajax({
      url: '/api/movie:id',
      method: 'GET',
      data: {id: 1},
      success: (res) => {
        console.log('clent got data:', res);
        this.setState({casts: res});
      },
      error: (err) => console.log('client ajax fail:', err)
    })
  }

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
