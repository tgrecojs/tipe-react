import React from 'react';
import { Markdown, Page } from './components/markdown'
import { H1 } from './components/text';
import Tipe from './components/TipeContext/provder.component'
import { LoadingIndicator } from './components/utils'

const MarkdownExample = ({data}) => !data ? 
  <LoadingIndicator /> :  
  <Page>
    <Markdown data={data.Webpage.aboutMe} />
  </Page>;


export default MarkdownExample