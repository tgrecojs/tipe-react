import React from 'react'
import { H1, H2, H3, H4, H5, H6 } from './index';
import renderer from 'react-test-renderer';

test(`<H1 />`, () => {
  expect(
    renderer.create(<H1 />).toJSON()
  ).toMatchSnapshot()
})