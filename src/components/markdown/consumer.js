import React from 'react';
import { TipeConsumer } from '../../shared/TipeContext/context';
import styled from 'react-emotion/macro'

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



const defaultTextStyles = {
  fontSize: '16px',
  color: '#011344',
  fontFamily: "'Kavivanar', cursive",
  textAlign: 'center'
}

const H1 = styled.h1(
  {
    ...defaultTextStyles,
    fontSize: 20
  },
  props => ({ color: props.theme.color })
)



const RenderMd = ({data}) => <Markdown source={data}/>
const RenderText = ({data, color}) => <H1 color={color}>{data}</H1>;


export const ArticleDetails = props => (
  <TipeConsumer>
    {context => {
      // const { Webpack } = context;
      // All that shit can be automated
      console.log(context)
      return !context.block ? (
        <p>...loading</p>
      ) : (
        <div style={{backgroundColor: `${context.block.pageColor}`, padding: '10px'}}>
          <RenderText color="orange" data={context.block.heading} />
          <RenderMd data={context.block.aboutMe} />
          <img src={context.block.img} alt="Image baby"/>
        </div>
      );
    }}
  </TipeConsumer>
);
