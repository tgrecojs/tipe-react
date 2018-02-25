import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './index';
import renderer from 'react-test-renderer'
import { themes } from '../utils';

const defaultProps = {
    theme: themes.cowboys,
    data: 'Some default data'
}

const createProps = ({theme, data} = defaultProps) => ({
   ...defaultProps
})


test(`<H1 />`, () => {
  expect(
    renderer.create(<H1 />).toJSON()
  ).toMatchSnapshot()
})

test(`<H2 />`, () => {
    expect(
      renderer.create(<H2 />).toJSON()
    ).toMatchSnapshot()
  })

test(`<H3 />`, () => {
    expect(
      renderer.create(<H3 />).toJSON()
    ).toMatchSnapshot()
  })

test(`<H4 />`, () => {
    expect(
      renderer.create(<H4 />).toJSON()
    ).toMatchSnapshot()
  })