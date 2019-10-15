import React from 'react';
import $ from 'jquery';
import CastPhotos from './castPhotos.jsx';
import {GlobalStyle, CastWrapper, CastSection, CastHeader, CastViewAll, CastArrowDown, CastArrowUp, ErrorMessage} from '../styled.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      casts: [],
      viewAll: false,
      error: false
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
      data: {id: 3},
      success: (res) => {
        console.log('client got data:', res);
        this.setState({casts: res});
      },
      error: (err) => {
        this.setState({error: true})
      }
    })
  }

  showAll(){
    this.setState({showAll: !this.state.showAll});
  }


  render() {
    if (this.state.error) {
      return (
          <ErrorMessage>
            Oops, this movie doesn't exist.
        </ErrorMessage>
      )
    }

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
          <CastPhotos data={this.state.casts} ifShow={this.state.showAll} hasError={this.state.error}/>
          <div onClick={this.showAll}>{viewAllOrLess}</div>
        </CastSection>
      </CastWrapper>
    )
  }
}

export default App;
