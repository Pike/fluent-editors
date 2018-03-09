import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import App from './App';
const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });


describe('<MyComponent />', () => {
  it('should render one <MessageList /> component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('MessageList')).toHaveLength(1);
  });
});
