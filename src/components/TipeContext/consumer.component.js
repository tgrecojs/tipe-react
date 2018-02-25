/** 
import React from 'react'
// import TipeContext from './context';

const Consumer = ({component, ...rest}) => {
    return (
      <TipeContext.Consumer {...rest}>
        {theme => React.createElement(component, {theme})}
      </TipeContext.Consumer>
    )
}

export {Consumer}
**/
