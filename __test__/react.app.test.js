/** Configure Enzyme */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/** Testing */
import 'jsdom-global/register';
import React from 'react';
import { shallow, mount, render} from 'enzyme';
import App from '../client/components/app.jsx';
import CastPhotos from '../client/components/castPhotos.jsx';
import { GlobalStyle, CastWrapper, CastSection, CastHeader, CastViewAll, CastArrowDown, CastArrowUp, ErrorMessage, CastPhotosDiv, CastItem, CastImg, CastActor, CastCharacter} from '../client/styled.js';
import $ from 'jquery';
import { get } from '../__mock__/ajax.js';

jest.mock('jquery');
$.get.mockImplementation(get);
const mock = jest.spyOn($, 'get');

describe('<App />', () => {

  let wrapper;
  let res;
  beforeEach(async (done) => {
    wrapper = mount(<App />);
    res = await $.get().then((data) => data.res);
    done();
  });

  afterEach(() => {
    wrapper.unmount();
  })

  test('Should calls $.get', () => {
    expect(mock).toBeCalled();
  });

  test('Should $.get should return an Object', () => {
    expect($.get()).resolves.toBeInstanceOf(Object);
  });

  test('Should $.get should return an array ', () => {
    expect(Array.isArray(res)).toBe(true);
  });

  test('Should $.get should return an  of 9 items ', () => {
    expect(res).toHaveLength(9);
  });


  test('Should NOT contain <ErrorMessage>', () => {
    expect(wrapper.containsMatchingElement(<ErrorMessage>Oops, this movie doesn't exist.</ErrorMessage>)).toEqual(false);
  });

  test('Should contain <h2>', () => {
    expect(wrapper.containsMatchingElement(<h2>CAST</h2>)).toEqual(true);
  });

  test('Should NOT has "View Less" before viewall is clicked', () => {
    expect(wrapper.containsMatchingElement(<span>View Less</span>)).toEqual(false);
  })

  test('Should has "View Less" when viewall is clicked', () => {
    wrapper.find('.styled__CastViewAll-nu87go-4').simulate('click');
    expect(wrapper.containsMatchingElement(<span>View Less</span>)).toBe(true);
  });

  test('Should change viewAll to true when viewall is clicked', () => {
    wrapper.find('.styled__CastViewAll-nu87go-4').simulate('click');
    expect(wrapper.state('viewAll')).toBe(true);
  });

  test('Should change viewAll state to false when viewall is clicked twice', () => {
    wrapper.find('.styled__CastViewAll-nu87go-4').simulate('click');
    wrapper.find('.styled__CastViewAll-nu87go-4').simulate('click');
    expect(wrapper.state('viewAll')).toBe(false);
  });


});

describe('<CastPhotos />', () => {

  let wrapper;
  let res;
  beforeEach(async (done) => {
    res = await $.get().then((data) => data.res);
    wrapper = mount(<CastPhotos data={res} />);
    done();
  });

  afterEach(() => {
    wrapper.unmount();
  });

  test('Should only render 6 items ', () => {
    expect(wrapper.find('.styled__CastPhotosDiv-nu87go-7').children()).toHaveLength(6);
  });

});
