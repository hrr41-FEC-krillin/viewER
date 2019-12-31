import React from 'react';
import $ from 'jquery';
import CastPhotos from './castPhotos.jsx';
import PhotoModal from './photoModal.jsx';
import styled from 'styled-components';
import { GlobalStyle, CastWrapper, CastSection, CastHeader, CastViewAll, CastArrowDown, CastArrowUp, ErrorMessage} from '../styled.js';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      casts: [],
      viewAll: false,
      error: false,
      showModal: false,
      targetImgUrl: '',
    };
    this.fetch = this.fetch.bind(this);
    this.showAll = this.showAll.bind(this);
    this.togglePhotoModal = this.togglePhotoModal.bind(this);
  }

  componentDidMount(){
    this.fetch();
  }

  fetch() {
    let id = window.location.search.slice(4) || 1;
    $.get({
      url: `/api/movie`,
      data: {id: id},
      success: (res) => {
        // console.log(res);
        this.setState({casts: res});
      },
      error: (err) => {
        console.log(err);
        this.setState({error: true})
      }
    })
  }

  togglePhotoModal(targetImgUrl) {
    this.setState({
      showModal: !this.state.showModal,
      targetImgUrl: targetImgUrl,
    })
  }

  showAll(){
    this.setState({ viewAll: !this.state.viewAll});
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
    if (!this.state.viewAll) {
      viewAllOrLess = <CastViewAll onClick={this.showAll}><span>View All</span><CastArrowDown></CastArrowDown></CastViewAll>
    } else {
      viewAllOrLess = <CastViewAll onClick={this.showAll}><span>View Less</span><CastArrowUp></CastArrowUp></CastViewAll>
    }

    return (
      <div>
        <CastWrapper>
          <GlobalStyle />
          <CastSection>
            <CastHeader>CAST</CastHeader>
            <CastPhotos data={this.state.casts} ifShow={this.state.viewAll} togglePhotoModal={this.togglePhotoModal}/>
            {viewAllOrLess}
          </CastSection>
        </CastWrapper>
        <PhotoModal targetImgUrl={this.state.targetImgUrl} showModal={this.state.showModal} togglePhotoModal={this.togglePhotoModal} />
      </div>
    )
  }
}

export default App;
