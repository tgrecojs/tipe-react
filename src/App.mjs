import React, { Component } from 'react';
import { render } from 'react-dom';
//
import { getData } from './shared/api/index';
import { Provider } from './shared/TipeContext/context';
import { ArticleDetails } from './example'
import { ThemeProvider } from 'emotion-theming'


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

export const themes = {
  cowboys: {
    // royal blue
    primary: '#003594',
    // dark blue
    secondary: '#003594',
    // silver
    complement: '#869397',
    textColor: 'white',
    fontFamily:  "'Kavivanar', cursive",
    fontSize: '16'
  },
  light: {
    primary: 'white'
  },
  black: {
    primary: 'black'
  }
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: { },
      theme: themes.cowboys
    }
  }

  componentWillMount() {
    getData(queryStr).then(data => this.setState({ 
      data
    }))

  }


  render() {
    return (
      <Provider value={this.state.data}>
        <ThemeProvider theme={this.state.theme}>
        <ArticleDetails />
        </ThemeProvider>
      </Provider>
    );
  }
}
