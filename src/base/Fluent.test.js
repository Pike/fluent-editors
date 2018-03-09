import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import { Message } from './fluent';
import { parse } from 'fluent-syntax';

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });


describe('<Message />', () => {
  it('should render an id and value', () => {
    const ast = parse('message_id = Message Value');
    const message = ast.body[0];
    const wrapper = shallow(<Message {...message} />);
    console.log(wrapper.html());
    expect(wrapper.find('Identifier')).toHaveLength(1);
    expect(wrapper.find('Pattern')).toHaveLength(1);
  });
});
