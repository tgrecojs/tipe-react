import React, { Component } from 'react';
import { render } from 'react-dom';
//
// import { getData } from './shared/api/index';
import { ArticleWrapper } from './components/markdown/wrapper';
import { TipeProvider } from './shared/TipeContext/context';
import { ArticleDetails } from './components/markdown/consumer'
import { ThemeProvider } from 'emotion-theming';


const theme = {
  color: 'red',
};
const queryStr = `
{
    Webpage(id: "5a8ea44fa61b5500134fcd61") {
     aboutMe
     eggheadLink
     tagline
     pageColor
     techBackground
       }
   }
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: { 
         block: {
           heading: 'I am a heading',
           img: 'https://pbs.twimg.com/profile_images/903512775212900354/TCTwWDdy_400x400.jpg',
           markdown: `### I am some markdown.`,
           switch: false,
           calender: 711803471,
           pageColor: '#041E42'
         }
      }
    }}



  render() {
    return (
      <TipeProvider value={this.state.data}>
        <ThemeProvider theme={theme}>
        <ArticleWrapper />
        </ThemeProvider>
      </TipeProvider>
    );
  }
}
