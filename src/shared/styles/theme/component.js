import React from 'react';
import styled from 'react-emotion/macro'
import { ThemeProvider } from 'emotion-theming'
import renderer from 'react-test-renderer'

const theme = {
  borderRadius: '50%',
  borderColor: '#BF67AD'
}

const Avatar = styled('img')`
  width: 96px;
  height: 96px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid ${props => props.theme.borderColor};
`
const logoUrl = 'https://i.pinimg.com/564x/9b/d7/4f/9bd74fc0e9547d6da161c2c9c6e485e3.jpg';

const ThemeComponent = ({themeConfig = theme}) => 
    <ThemeProvider theme={theme}>
        <Avatar src={logoUrl}></Avatar>
    </ThemeProvider>

export default ThemeComponent
