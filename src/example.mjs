import React from 'react';
import { Markdown, Page } from './components/markdown'
import { Consumer } from './shared/TipeContext/context';
import { H1 } from './components/text';

export const ArticleDetails = props => (
    <Consumer>
    {tipeContext => !tipeContext.Webpage ? (
          <p>...loading</p>
        ) : (
          <Page>
            <H1 
            data={tipeContext.Webpage.tagline} />
            <Markdown data={tipeContext.Webpage.aboutMe} />
          </Page>
        )
      }
    </Consumer>
);
