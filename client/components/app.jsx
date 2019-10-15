import React from 'react';
import $ from 'jquery';
import CastPhotos from './castPhotos.jsx';
import {GlobalStyle, CastWrapper, CastSection, CastHeader, CastViewAll, CastArrowDown, CastArrowUp} from '../styled.js';


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
      data: {id: 6},
      success: (res) => {
        console.log('clent got data:', res);
        this.setState({casts: res});
      },
      error: (err) => console.log('client ajax fail:', err)
    })
  }

  showAll(){
    this.setState({showAll: !this.state.showAll});
  }


  render() {
    let viewAllOrLess;
    if (!this.state.showAll) {
      viewAllOrLess = <CastViewAll><span>View All</span><CastArrowDown></CastArrowDown></CastViewAll>
    } else {
      viewAllOrLess = <CastViewAll><span>View Less</span><CastArrowUp></CastArrowUp></CastViewAll>
    }

    return (
      <CastWrapper>
        <GlobalStyle />
        <CastSection>
          <CastHeader>CAST</CastHeader>
          <CastPhotos data={this.state.casts} ifShow={this.state.showAll}/>
          <div onClick={this.showAll}>{viewAllOrLess}</div>
        </CastSection>
      </CastWrapper>
    )
  }
}

export default App;
