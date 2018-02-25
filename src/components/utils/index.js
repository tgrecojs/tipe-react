import React from 'react'
const LoadingIndicator = () => <p>loading...</p>;

const themes = {
    cowboys: {
      // royal blue
      primary: '#003594',
      // dark blue
      secondary: '#003594',
      // silver
      complement: '#869397',
      textColor: 'white',
      fontFamily: `'Dosis', sans-serif;`,
      fontSize: '16'
    },
    light: {
      primary: 'white'
    },
    black: {
      primary: 'black'
    }
}
  
export { LoadingIndicator, themes }