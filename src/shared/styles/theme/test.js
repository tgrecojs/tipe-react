import React from 'react'
import ThemeComponent from './component';
import renderer from 'react-test-renderer'


test(`<ThemeComponent />`, () => {
  expect(
    renderer.create(<ThemeComponent />).toJSON()
  ).toMatchSnapshot()
})