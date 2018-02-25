import React, { Component } from 'react';
import { render } from 'react-dom';
//
import TipeProvider, { TipeConsumer, exampleComponent } from './components/TipeContext/TipeContext.component';
import MarkdownExample from './example'
// import { getData } from './shared/api/index';
// import { Consumer } from './components/TipeContext/consumer.component';
// import { ThemeProvider } from 'emotion-theming'

const App = () => (
      <TipeProvider>
        <TipeConsumer render={data => data === null ? 
            <p>loading...</p> : 
            <MarkdownExample data={data} />}
        />
      </TipeProvider>
)

export default App
