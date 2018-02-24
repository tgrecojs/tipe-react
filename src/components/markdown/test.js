import { RenderMd, Page } from './component';
import React from 'react';
import ReactDOM from 'react-dom';

it('<Page /> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Page />, div);
  ReactDOM.unmountComponentAtNode(div);
});

