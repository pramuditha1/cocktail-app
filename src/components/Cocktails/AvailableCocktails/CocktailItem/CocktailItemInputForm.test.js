import React from 'react';
import { mount } from 'enzyme';
import CocktailItemInputForm from './CocktailItemInputForm';
import Input from '../../../UI/Input';

describe('<CocktailItemInputForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<CocktailItemInputForm id="17235" cocktail={{}} />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form correctly', () => {
    expect(wrapper.find('form').hasClass('form')).toEqual(true);
    expect(wrapper.find('button[type="submit"]').text()).toEqual('Add');
    expect(wrapper.find(Input).prop('label')).toEqual('Amount');
    expect(wrapper.find(Input).prop('input').type).toEqual('number');
    expect(wrapper.find(Input).prop('input').defaultValue).toEqual('1');
    expect(wrapper.find(Input).prop('input').min).toEqual('1');
    expect(wrapper.find(Input).prop('input').max).toEqual('5');
    expect(wrapper.find(Input).prop('input').step).toEqual('1');
  });
});
