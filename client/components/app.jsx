import React from 'react';
import $ from 'jquery';
import CastPhotos from './castPhotos.jsx';
import PhotoModalCarousel from './PhotoModalCarousel.jsx';
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
      currentImgIdx: null,
    };
    this.fetch = this.fetch.bind(this);
    this.showAll = this.showAll.bind(this);
    this.togglePhotoModal = this.togglePhotoModal.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
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

  togglePhotoModal(index) {
    this.setState({
      showModal: !this.state.showModal,
      currentImgIdx: index,
    })
  }

  moveLeft() {
    if (this.state.currentImgIdx > 0) {
      this.setState({
        currentImgIdx: Number(this.state.currentImgIdx) - 1,
      })
    }
  }

  moveRight() {
    if (this.state.currentImgIdx < this.state.casts.length - 1) {
      this.setState({
        currentImgIdx: Number(this.state.currentImgIdx) + 1,
      })
    }
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
          <PhotoModalCarousel data={this.state.casts} currentImgIdx={this.state.currentImgIdx} showModal={this.state.showModal} togglePhotoModal={this.togglePhotoModal} moveLeft={this.moveLeft} moveRight={this.moveRight}/>
        </CastWrapper>
      </div>
    )
  }
}

export default App;
