/** Configure Enzyme */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });


/** Testing */
import 'jsdom-global/register';
import React from 'react';
import { shallow, mount, render} from 'enzyme';
import App from '../client/components/app.jsx';
import { GlobalStyle, CastWrapper, CastSection, CastHeader, CastViewAll, CastArrowDown, CastArrowUp, ErrorMessage, CastItem} from '../client/styled.js';
import $ from 'jquery';
import { get } from '../_mock_/ajax.js';

jest.mock('jquery');

describe('<App />', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
    $.get.mockImplementation(get);
  });

  afterEach(() => {
    wrapper.unmount();
  })

  test('Should calls $.get', () => {
    const mock = jest.spyOn($, 'get');
    expect(mock).toBeCalled();
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
    // console.log(wrapper.debug({verbose: false}));
    expect(wrapper.containsMatchingElement(<span>View Less</span>)).toEqual(true);
  });


});
