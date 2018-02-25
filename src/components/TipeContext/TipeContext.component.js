import React from 'react'
import { getData } from '../../shared/api';

/** 
 * Need to pass the query up to this component
 * 
 */

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


const TipeContext = React.createContext({})

export default class TipeProvider extends React.Component {
  state = {data: null }

    componentWillMount() {
        getData(queryStr).then(response => this.setState({ data: response }))
    }

  render() {
    return (
      <TipeContext.Provider value={this.state.data}>
        {this.props.children}
      </TipeContext.Provider>
    )
  }
}

// convert the TipeContext.Consumer to a component injection API
const TipeConsumer = ({render, ...rest}) => {
    return <TipeContext.Consumer {...rest}>{render}</TipeContext.Consumer>
}
  


export { TipeConsumer }
