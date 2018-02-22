import React, { Component } from 'react';
import { render } from 'react-dom';
//
import { getData } from './shared/api/index';
import { ArticleWrapper } from './components/markdown/wrapper';
import { TipeProvider } from './shared/TipeContext/context';
import { ArticleDetails } from './components/markdown/consumer'

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
    this.state = { data: {} };
  }

  componentDidMount() {
    getData(queryStr).then(data => this.setState({ data }));
  }

  render() {
    return (
      <TipeProvider value={this.state.data}>
                <ArticleWrapper />
      </TipeProvider>
    );
  }
}
