import React from 'react';
import styled from 'react-emotion'
import PropTypes from 'prop-types';
const Markdown = require('react-markdown');
const { string, object } = PropTypes

const defaultMdStyles = {
   display: 'flex',
   flexDirection: 'column'
}

const MdComponent = styled(Markdown)(props => ({
    ...defaultMdStyles,
    // trying to find the line between supplying styles / allowing customization
    color: props.theme.textColor,
}))

MdComponent.propTypes = {
  theme: object,
  source: string,
}

const Page = styled('div')(props => ({
  display: !props.theme.flex ? 'flex' : `${props.theme.flex}`,
  flexDirection: !props.theme.flexDirection ? 'column' : `${props.theme.flex}`,
  fontFamily: props.theme.fontFamily,
  backgroundColor:props.theme.primary,
  // trying to find the line between supplying styles / allowing customization
  color: props.theme.textColor,
}))


const RenderMd = ({data}) => <MdComponent source={data}/>


export {
  MdComponent,
  RenderMd,
  Page
}