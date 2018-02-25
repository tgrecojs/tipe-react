import { RenderMd, Page } from './component';
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { themes } from '../utils';
import renderer from 'react-test-renderer'

const defaultProps = {
    theme: themes.cowboys
}

const createProps = ({theme, data} = defaultProps) => ({
   ...defaultProps
})



test(`<Page />`, () => {
  expect(
    renderer.create(<Page />).toJSON()
  ).toMatchSnapshot()
})
