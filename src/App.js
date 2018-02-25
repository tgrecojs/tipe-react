import React, { Component } from 'react';
import { render } from 'react-dom';
//
import TipeProvider, { TipeConsumer, exampleComponent } from './components/TipeContext/TipeContext.component';
import { getData } from './shared/api/index';
import { Consumer } from './components/TipeContext/consumer.component';
import MarkdownExample from './example'
import { ThemeProvider } from 'emotion-theming'

const Ex = props => {
  console.log('Props from example', props)
  return <h2>I am the example</h2>
}


const App = () => (
      <TipeProvider>
        <TipeConsumer component={MarkdownExample} />
      </TipeProvider>
)

export default App
