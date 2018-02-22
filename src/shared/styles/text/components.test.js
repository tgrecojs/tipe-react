import React from 'react'
import * as emotion from 'emotion'
import { createSerializer } from 'jest-emotion'
import styled from 'react-emotion'
import renderer from 'react-test-renderer'

expect.addSnapshotSerializer(createSerializer(emotion))

const Button = styled('div')`
  color: hotpink;
`
const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ 
    color: props.color,
    fontSize: props.fontSize
  })
)

test('H1', () => {
  expect(renderer.create(<H1></H1>))
})

test('H1', () => {
  expect(
    renderer.create(<H1 fontSize="24" color="yellow">Button</H1>).toJSON()
  ).toMatchSnapshot()
})