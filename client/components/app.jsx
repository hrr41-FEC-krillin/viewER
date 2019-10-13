import React from 'react';
import $ from 'jquery';
import CastPhotos from './castPhotos.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      casts: [],
      viewAll: false
    };
    this.fetch = this.fetch.bind(this);
    this.showAll = this.showAll.bind(this);
  }

  componentDidMount(){
    this.fetch();
  }

  fetch() {
    $.ajax({
      url: '/api/movie',
      method: 'GET',
      data: {id: 1},
      success: (res) => {
        console.log('clent got data:', res);
        this.setState({casts: res});
      },
      error: (err) => console.log('client ajax fail:', err)
    })
  }

  showAll(){
    this.setState({showAll: true});
  }

  render() {
    return (
      <section className="cast-section">
        <h2 className="cast-header">CAST</h2>
        <CastPhotos data={this.state.casts} ifShow={this.state.showAll}/>
        <span onClick={this.showAll}>View All</span>
      </section>
    )
  }
}

export default App;
