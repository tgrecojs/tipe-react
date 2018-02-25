/**
import React, { Component } from 'react';
import { getData } from '../../shared/api/index';
import TipeContext from './context';


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


export default class TipeProvider extends Component {
    state = { data: {} }

  componentWillMount() {
    /** This can be  
    getData(queryStr)
        .then(data => this.setState({ 
      loading: false,
      data
    }))

  }


  render() {
    return (
      <TipeContext.Provider value={this.state.data}>
        {this.props.children}
      </TipeContext.Provider>
    );
  }
}


*/