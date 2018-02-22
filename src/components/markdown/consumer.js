import React from 'react';
import { TipeConsumer } from '../../shared/TipeContext/context';
import styled from 'react-emotion/macro'

const Markdown = require('react-markdown');

/**
 * Style Props 
 * 
 */

const H1 = styled.h1(
  {
    fontSize: 20
  },
  props => ({ color: props.color })
)

const RenderMd = ({data}) => <Markdown source={data}/>
const RenderText = ({data, color}) => <H1 color={color}>{data}</H1>;


export const ArticleDetails = props => (
  <TipeConsumer>
    {context => {
      return !context.Webpage ? (
        <p>...loading</p>
      ) : (
        <div style={{backgroundColor: `${context.Webpage.pageColor}`, padding: '10px'}}>
          <RenderText color="orange" data={context.Webpage.tagline} />
          <RenderMd data={context.Webpage.aboutMe} />
        </div>
      );
    }}
  </TipeConsumer>
);
