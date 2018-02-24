import React from 'react';
import styled from 'react-emotion'

const Markdown = require('react-markdown');

/**
 * Style Props 
 * 
 * H1 -> H6 
 *  - Check out dynamically generating specific level headers
 *        * definitely can - use a size property 1-6
 *        * can just change the font family doing it
 *        * fontSize={6}   => 42px
 *        * fontSize={42} => 42px
 *        * cssGrid specifier <strikthrough>may be OD</strikthrough> super OD
 * 
 * <TipeImage /> 
 *      - We already know the size that were going to get the image back 
 *      
 * Markdown 
 * 
 */

 const defaultMdStyles = {
   display: 'flex',
   flexDirection: 'column'
 }

const MdComponent = styled(Markdown)(props => ({
    ...defaultMdStyles,
    // trying to find the line between supplying styles / allowing customization
    color: props.theme.textColor,
}))

const Page = styled('div')(props => ({
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